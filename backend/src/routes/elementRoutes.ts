import express from 'express';
import { elementService } from '../services/elementService';

const router = express.Router();

// الحصول على جميع العناصر
router.get('/', async (req, res) => {
  try {
    const elements = await elementService.getAllElements();
    res.json(elements);
  } catch (error) {
    console.error('Error in GET /elements:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// الحصول على العناصر المرتبطة
router.get('/related/:id', async (req, res) => {
  try {
    const relatedElements = await elementService.getRelatedElements(req.params.id);
    res.json(relatedElements);
  } catch (error) {
    console.error('Error in GET /elements/related/:id:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// الحصول على عنصر بواسطة المعرف
router.get('/:id', async (req, res) => {
  try {
    const element = await elementService.getElementById(req.params.id);
    res.json(element);
  } catch (error) {
    console.error('Error in GET /elements/:id:', error);
    if (error instanceof Error && error.message === 'Element not found') {
      res.status(404).json({ error: 'Element not found' });
    } else {
      res.status(500).json({ error: 'Internal server error' });
    }
  }
});

export default router; 