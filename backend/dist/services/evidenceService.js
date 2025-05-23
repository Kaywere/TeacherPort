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
exports.evidenceService = void 0;
const db_1 = __importDefault(require("../config/db"));
exports.evidenceService = {
    // الحصول على الشواهد الخاصة بعنصر معين
    getEvidencesByElementId(elementId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                if (!elementId) {
                    throw new Error('Element ID is required');
                }
                const result = yield db_1.default.query('SELECT * FROM evidences WHERE element_id = $1 ORDER BY evidence_number', [elementId]);
                if (!result.rows || result.rows.length === 0) {
                    console.log(`No evidences found for element ID: ${elementId}`);
                }
                return result.rows;
            }
            catch (error) {
                console.error('Error in evidenceService.getEvidencesByElementId:', error);
                throw error;
            }
        });
    },
    // الحصول على شاهد بواسطة المعرف
    getEvidenceById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                if (!id) {
                    throw new Error('Evidence ID is required');
                }
                const result = yield db_1.default.query('SELECT * FROM evidences WHERE id = $1', [id]);
                if (!result.rows[0]) {
                    console.log(`No evidence found with ID: ${id}`);
                    return null;
                }
                return result.rows[0];
            }
            catch (error) {
                console.error('Error in evidenceService.getEvidenceById:', error);
                throw error;
            }
        });
    },
    // تحديث ملف الشاهد
    updateEvidenceFile(id, fileData, fileName, mimeType, fileType) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                if (!id) {
                    throw new Error('Evidence ID is required');
                }
                const result = yield db_1.default.query(`UPDATE evidences 
         SET file_data = $1, 
             file_name = $2, 
             mime_type = $3, 
             file_type = $4,
             updated_at = CURRENT_TIMESTAMP
         WHERE id = $5
         RETURNING *`, [fileData, fileName, mimeType, fileType, id]);
                if (!result.rows[0]) {
                    throw new Error('Evidence not found');
                }
            }
            catch (error) {
                console.error('Error in evidenceService.updateEvidenceFile:', error);
                throw error;
            }
        });
    },
    // حذف ملف الشاهد
    deleteEvidenceFile(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                if (!id) {
                    throw new Error('Evidence ID is required');
                }
                // First get the current evidence to ensure it exists
                const evidence = yield this.getEvidenceById(id);
                if (!evidence) {
                    throw new Error('Evidence not found');
                }
                // Update with empty values instead of NULL to satisfy NOT NULL constraints
                const result = yield db_1.default.query(`
                    UPDATE evidences 
                    SET file_data = '',
                        file_name = '',
                        mime_type = 'application/octet-stream',
                        file_type = 'none',
                        updated_at = CURRENT_TIMESTAMP
                    WHERE id = $1
                    RETURNING *
                `, [id]);
                
                if (!result.rows[0]) {
                    throw new Error('Evidence not found');
                }
            }
            catch (error) {
                console.error('Error in evidenceService.deleteEvidenceFile:', error);
                throw error;
            }
        });
    },
    // تحديث بيانات الشاهد
    updateEvidence: (id, { title, description, evidence_number }) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            if (!id) {
                throw new Error('Evidence ID is required');
            }

            const result = yield db_1.default.query(
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
    }),
    // إنشاء شاهد جديد
    createEvidence: (elementId, { title, description, evidence_number }) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            if (!elementId) {
                throw new Error('Element ID is required');
            }

            const result = yield db_1.default.query(
                `INSERT INTO evidences 
                 (element_id, title, description, evidence_number, file_type, file_name, mime_type, file_data)
                 VALUES ($1, $2, $3, $4, 'none', '', 'application/octet-stream', '')
                 RETURNING *`,
                [elementId, title, description, evidence_number]
            );

            return result.rows[0];
        } catch (error) {
            console.error('Error in evidenceService.createEvidence:', error);
            throw error;
        }
    }),
    // حذف شاهد
    deleteEvidence: (id) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            if (!id) {
                throw new Error('Evidence ID is required');
            }

            const result = yield db_1.default.query(
                'DELETE FROM evidences WHERE id = $1 RETURNING *',
                [id]
            );

            if (!result.rows[0]) {
                throw new Error('Evidence not found');
            }

            return result.rows[0];
        } catch (error) {
            console.error('Error in evidenceService.deleteEvidence:', error);
            throw error;
        }
    })
};
