async function updateEvidence(id, { title, description, evidence_number }) {
    try {
        const result = await pool.query(
            `UPDATE evidences 
             SET title = $1, 
                 description = $2, 
                 evidence_number = $3,
                 updated_at = CURRENT_TIMESTAMP
             WHERE id = $4
             RETURNING *`,
            [title, description, evidence_number, id]
        );

        if (result.rows.length === 0) {
            throw new Error('Evidence not found');
        }

        return result.rows[0];
    } catch (error) {
        console.error('Error updating evidence:', error);
        throw error;
    }
}

module.exports = {
    updateEvidence,
}; 