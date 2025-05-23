// Update evidence details
router.put('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { title, description, evidence_number } = req.body;
        
        const result = await evidenceService.updateEvidence(id, {
            title,
            description,
            evidence_number
        });
        
        res.json(result);
    } catch (error) {
        console.error('Error updating evidence:', error);
        res.status(500).json({ error: error.message });
    }
}); 