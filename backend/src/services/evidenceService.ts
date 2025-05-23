import pool from '../config/db';

export interface Evidence {
  id: string;
  element_id: string;
  evidence_number: string;
  title: string;
  description: string;
  file_type: string;
  file_data: Buffer;
  file_name: string;
  mime_type: string;
  created_at: Date;
  updated_at: Date;
}

export const evidenceService = {
  // الحصول على الشواهد الخاصة بعنصر معين
  async getEvidencesByElementId(elementId: string): Promise<Evidence[]> {
    try {
      if (!elementId) {
        throw new Error('Element ID is required');
      }

      const result = await pool.query(
        'SELECT * FROM evidences WHERE element_id = $1 ORDER BY evidence_number',
        [elementId]
      );

      if (!result.rows || result.rows.length === 0) {
        console.log(`No evidences found for element ID: ${elementId}`);
      }

      return result.rows;
    } catch (error) {
      console.error('Error in evidenceService.getEvidencesByElementId:', error);
      throw error;
    }
  },

  // الحصول على شاهد بواسطة المعرف
  async getEvidenceById(id: string): Promise<Evidence | null> {
    try {
      if (!id) {
        throw new Error('Evidence ID is required');
      }

      const result = await pool.query(
        'SELECT * FROM evidences WHERE id = $1',
        [id]
      );

      if (!result.rows[0]) {
        console.log(`No evidence found with ID: ${id}`);
        return null;
      }

      return result.rows[0];
    } catch (error) {
      console.error('Error in evidenceService.getEvidenceById:', error);
      throw error;
    }
  },

  // تحديث ملف الشاهد
  async updateEvidenceFile(
    id: string,
    fileData: Buffer,
    fileName: string,
    mimeType: string,
    fileType: string
  ): Promise<void> {
    try {
      if (!id) {
        throw new Error('Evidence ID is required');
      }

      const result = await pool.query(
        `UPDATE evidences 
         SET file_data = $1, 
             file_name = $2, 
             mime_type = $3, 
             file_type = $4,
             updated_at = CURRENT_TIMESTAMP
         WHERE id = $5
         RETURNING *`,
        [fileData, fileName, mimeType, fileType, id]
      );

      if (!result.rows[0]) {
        throw new Error('Evidence not found');
      }
    } catch (error) {
      console.error('Error in evidenceService.updateEvidenceFile:', error);
      throw error;
    }
  },

  // حذف ملف الشاهد
  async deleteEvidenceFile(id: string): Promise<void> {
    try {
      if (!id) {
        throw new Error('Evidence ID is required');
      }

      const result = await pool.query(
        `UPDATE evidences 
         SET file_data = NULL, 
             file_name = NULL, 
             mime_type = NULL, 
             file_type = NULL,
             updated_at = CURRENT_TIMESTAMP
         WHERE id = $1
         RETURNING *`,
        [id]
      );

      if (!result.rows[0]) {
        throw new Error('Evidence not found');
      }
    } catch (error) {
      console.error('Error in evidenceService.deleteEvidenceFile:', error);
      throw error;
    }
  },

  // تحديث بيانات الشاهد
  async updateEvidence(id: string, { title, description, evidence_number }: { title: string; description: string; evidence_number: string }): Promise<Evidence> {
    try {
      if (!id) {
        throw new Error('Evidence ID is required');
      }

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

      if (!result.rows[0]) {
        throw new Error('Evidence not found');
      }

      return result.rows[0];
    } catch (error) {
      console.error('Error in evidenceService.updateEvidence:', error);
      throw error;
    }
  }
}; 