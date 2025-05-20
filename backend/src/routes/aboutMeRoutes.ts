import express from 'express';
import { aboutMeService } from '../services/aboutMeService';

const router = express.Router();

// Get about me data
router.get('/', async (req, res) => {
    try {
        const aboutMe = await aboutMeService.getAboutMe();
        
        if (!aboutMe) {
            // If no data exists, create default data
            const defaultData = await aboutMeService.createDefaultAboutMe();
            res.json(defaultData);
        } else {
            res.json(aboutMe);
        }
    } catch (error) {
        console.error('Error in GET /api/about-me:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// Update about me data
router.put('/', async (req, res) => {
    try {
        const updatedAboutMe = await aboutMeService.updateAboutMe(req.body);
        res.json(updatedAboutMe);
    } catch (error) {
        console.error('Error in PUT /api/about-me:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// Create default data
router.post('/default', async (req, res) => {
    try {
        const defaultData = await aboutMeService.createDefaultAboutMe();
        res.json(defaultData);
    } catch (error) {
        console.error('Error in POST /api/about-me/default:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

export default router; 