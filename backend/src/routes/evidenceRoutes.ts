import express from 'express';
import { evidenceService } from '../services/evidenceService';
import multer from 'multer';

const router = express.Router();

// تكوين multer للتعامل مع الملفات
const storage = multer.memoryStorage();
const upload = multer({
  storage: storage,
  limits: {
    fileSize: 10 * 1024 * 1024, // 10MB max file size
  },
  fileFilter: (req, file, cb) => {
    // السماح فقط بملفات PDF والصور
    if (file.mimetype === 'application/pdf' || file.mimetype.startsWith('image/')) {
      cb(null, true);
    } else {
      cb(new Error('Only PDF and image files are allowed'));
    }
  },
});

// الحصول على الشواهد الخاصة بعنصر معين
router.get('/element/:elementId', async (req, res) => {
  try {
    const evidences = await evidenceService.getEvidencesByElementId(req.params.elementId);
    res.json(evidences);
  } catch (error) {
    console.error('Error in GET /evidences/element/:elementId:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Get a single evidence
router.get('/:id', async (req, res) => {
    try {
        const evidence = await evidenceService.getEvidenceById(req.params.id);
        if (!evidence) {
            return res.status(404).json({ error: 'Evidence not found' });
        }
        res.json(evidence);
    } catch (error) {
        console.error('Error fetching evidence:', error);
        res.status(500).json({ 
            error: 'Failed to fetch evidence',
            details: error instanceof Error ? error.message : 'Unknown error'
        });
    }
});

// الحصول على ملف الشاهد
router.get('/:id/file', async (req, res) => {
  try {
    const evidence = await evidenceService.getEvidenceById(req.params.id);
    if (!evidence) {
      return res.status(404).json({ error: 'Evidence not found' });
    }

    res.setHeader('Content-Type', evidence.mime_type);
    res.setHeader('Content-Disposition', `inline; filename="${evidence.file_name}"`);
    res.send(evidence.file_data);
  } catch (error) {
    console.error('Error in GET /evidences/:id/file:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// رفع ملف لشاهد معين
router.post('/:id/upload', upload.single('file'), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: 'No file uploaded' });
    }

    const evidence = await evidenceService.getEvidenceById(req.params.id);
    if (!evidence) {
      return res.status(404).json({ error: 'Evidence not found' });
    }

    // تحديث بيانات الملف
    const fileType = req.file.mimetype === 'application/pdf' ? 'pdf' : 'image';
    await evidenceService.updateEvidenceFile(
      req.params.id,
      req.file.buffer,
      req.file.originalname,
      req.file.mimetype,
      fileType
    );

    res.json({ message: 'File uploaded successfully' });
  } catch (error) {
    console.error('Error in POST /evidences/:id/upload:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

export default router; 