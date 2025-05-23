"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const evidenceService_1 = require("../services/evidenceService");
const multer_1 = __importDefault(require("multer"));
const router = express_1.default.Router();
// تكوين multer للتعامل مع الملفات
const storage = multer_1.default.memoryStorage();
const upload = (0, multer_1.default)({
    storage: storage,
    limits: {
        fileSize: 10 * 1024 * 1024, // 10MB max file size
    },
    fileFilter: (req, file, cb) => {
        // السماح فقط بملفات PDF والصور
        if (file.mimetype === 'application/pdf' || file.mimetype.startsWith('image/')) {
            cb(null, true);
        }
        else {
            cb(new Error('Only PDF and image files are allowed'));
        }
    },
});
// الحصول على الشواهد الخاصة بعنصر معين
router.get('/element/:elementId', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const evidences = yield evidenceService_1.evidenceService.getEvidencesByElementId(req.params.elementId);
        res.json(evidences);
    }
    catch (error) {
        console.error('Error in GET /evidences/element/:elementId:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
}));
// Get a single evidence
router.get('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const evidence = yield evidenceService_1.evidenceService.getEvidenceById(req.params.id);
        if (!evidence) {
            return res.status(404).json({ error: 'Evidence not found' });
        }
        res.json(evidence);
    }
    catch (error) {
        console.error('Error fetching evidence:', error);
        res.status(500).json({
            error: 'Failed to fetch evidence',
            details: error instanceof Error ? error.message : 'Unknown error'
        });
    }
}));
// الحصول على ملف الشاهد
router.get('/:id/file', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const evidence = yield evidenceService_1.evidenceService.getEvidenceById(req.params.id);
        if (!evidence) {
            return res.status(404).json({ error: 'Evidence not found' });
        }
        res.setHeader('Content-Type', evidence.mime_type);
        res.setHeader('Content-Disposition', `inline; filename="${evidence.file_name}"`);
        res.send(evidence.file_data);
    }
    catch (error) {
        console.error('Error in GET /evidences/:id/file:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
}));
// رفع ملف لشاهد معين
router.post('/:id/upload', upload.single('file'), (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        if (!req.file) {
            return res.status(400).json({ error: 'No file uploaded' });
        }
        const evidence = yield evidenceService_1.evidenceService.getEvidenceById(req.params.id);
        if (!evidence) {
            return res.status(404).json({ error: 'Evidence not found' });
        }
        // تحديث بيانات الملف
        const fileType = req.file.mimetype === 'application/pdf' ? 'pdf' : 'image';
        yield evidenceService_1.evidenceService.updateEvidenceFile(req.params.id, req.file.buffer, req.file.originalname, req.file.mimetype, fileType);
        res.json({ message: 'File uploaded successfully' });
    }
    catch (error) {
        console.error('Error in POST /evidences/:id/upload:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
}));
// حذف ملف الشاهد
router.delete('/:id/file', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const evidence = yield evidenceService_1.evidenceService.getEvidenceById(req.params.id);
        if (!evidence) {
            return res.status(404).json({ error: 'Evidence not found' });
        }
        yield evidenceService_1.evidenceService.deleteEvidenceFile(req.params.id);
        res.json({ message: 'File deleted successfully' });
    }
    catch (error) {
        console.error('Error in DELETE /evidences/:id/file:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
}));
// تحديث بيانات الشاهد
router.put('/:id/update', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const { title, description, evidence_number } = req.body;
        
        const result = yield evidenceService_1.evidenceService.updateEvidence(id, {
            title,
            description,
            evidence_number
        });
        
        res.json(result);
    } catch (error) {
        console.error('Error in PUT /evidences/:id/update:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
}));
// إنشاء شاهد جديد
router.post('/element/:elementId', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { elementId } = req.params;
        const { title, description, evidence_number } = req.body;
        
        const result = yield evidenceService_1.evidenceService.createEvidence(elementId, {
            title,
            description,
            evidence_number
        });
        
        res.status(201).json(result);
    } catch (error) {
        console.error('Error in POST /evidences/element/:elementId:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
}));
exports.default = router;
