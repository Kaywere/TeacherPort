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
exports.aboutMeService = void 0;
const db_1 = __importDefault(require("../config/db"));
exports.aboutMeService = {
    getAboutMe() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield db_1.default.query('SELECT * FROM about_me ORDER BY id DESC LIMIT 1');
                return result.rows[0] || null;
            }
            catch (error) {
                console.error('Error in getAboutMe:', error);
                throw error;
            }
        });
    },
    updateAboutMe(data) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                // Check if any record exists
                const existingRecord = yield this.getAboutMe();
                if (existingRecord) {
                    // Update existing record
                    const fields = Object.keys(data);
                    const values = Object.values(data);
                    const setClause = fields.map((field, index) => `${field} = $${index + 1}`).join(', ');
                    const query = `
                    UPDATE about_me 
                    SET ${setClause}, updated_at = CURRENT_TIMESTAMP
                    WHERE id = $${values.length + 1}
                    RETURNING *
                `;
                    const result = yield db_1.default.query(query, [...values, existingRecord.id]);
                    return result.rows[0];
                }
                else {
                    // Insert new record if none exists
                    const fields = Object.keys(data);
                    const placeholders = fields.map((_, index) => `$${index + 1}`).join(', ');
                    const columns = fields.join(', ');
                    const query = `
                    INSERT INTO about_me (${columns})
                    VALUES (${placeholders})
                    RETURNING *
                `;
                    const values = Object.values(data);
                    const result = yield db_1.default.query(query, values);
                    return result.rows[0];
                }
            }
            catch (error) {
                console.error('Error in updateAboutMe:', error);
                throw error;
            }
        });
    },
    createDefaultAboutMe() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                // Check if any record exists
                const existingRecord = yield this.getAboutMe();
                if (existingRecord) {
                    return existingRecord; // Return existing record if it exists
                }
                // Default data
                const defaultData = {
                    name: 'نورة بنت محمد',
                    title: 'معلمة متميزة - مادة العلوم',
                    bio: 'معلمة متميزة بخبرة 12 عامًا في تدريس مادة العلوم للمرحلة المتوسطة، حاصلة على درجة الماجستير في طرق التدريس. شاركت في العديد من البرامج التدريبية وورش العمل لتطوير أساليب التدريس وتحسين مخرجات التعلم.',
                    image_url: 'https://placehold.co/400x400/pink/white?text=صورة+المعلمة',
                    email: 'teacher@example.com',
                    phone: '+966 5x xxx xxxx',
                    school: 'مدرسة التميز المتوسطة - الرياض',
                    education: [
                        {
                            degree: "ماجستير في طرق تدريس العلوم",
                            university: "جامعة الملك سعود",
                            year: "2018",
                            description: "أكملت رسالة ماجستير عن أثر استخدام استراتيجيات التعلم النشط في تدريس العلوم على التحصيل الدراسي."
                        },
                        {
                            degree: "بكالوريوس العلوم في الكيمياء",
                            university: "جامعة الملك عبدالعزيز",
                            year: "2010",
                            description: "تخرجت بمرتبة الشرف وكانت مشروع التخرج عن تحليل المواد الكيميائية في البيئة المدرسية."
                        }
                    ],
                    experience: [
                        {
                            title: "معلمة أولى لمادة العلوم",
                            school: "مدرسة التميز المتوسطة",
                            period: "2018 حتى الآن",
                            responsibilities: [
                                "قيادة فريق معلمات العلوم وتنسيق المناهج الدراسية",
                                "تطوير وتنفيذ خطط الدروس المبتكرة",
                                "إجراء ورش عمل تدريبية للمعلمات الجدد",
                                "المشاركة في تطوير المناهج على مستوى الإدارة التعليمية"
                            ]
                        },
                        {
                            title: "معلمة علوم",
                            school: "مدرسة النموذجية المتوسطة",
                            period: "2010 إلى 2018",
                            responsibilities: [
                                "تدريس مادة العلوم للصفوف المتوسطة",
                                "المشاركة في تطوير المعامل وتجهيزها",
                                "تنفيذ أنشطة علمية وبحثية للطالبات",
                                "المشاركة في اللجنة العلمية للمدرسة"
                            ]
                        }
                    ],
                    skills: [
                        { name: "التعلم النشط" },
                        { name: "التقييم المستمر" },
                        { name: "التعلم التعاوني" },
                        { name: "التفكير الناقد" },
                        { name: "التعلم المتمايز" }
                    ],
                    achievements: [
                        {
                            title: "جائزة المعلم المتميز",
                            year: "2021",
                            issuer: "على مستوى الإدارة التعليمية"
                        },
                        {
                            title: "شهادة التميز في توظيف التقنية",
                            year: "2020",
                            issuer: "مركز التطوير التقني"
                        },
                        {
                            title: "مشروع معمل العلوم الافتراضي",
                            year: "2019",
                            issuer: "فاز بالمركز الأول على مستوى المنطقة"
                        },
                        {
                            title: "نشر بحث تربوي",
                            year: "2017",
                            issuer: "في مجلة التربية العلمية المحكمة"
                        }
                    ]
                };
                // Insert default data
                const fields = Object.keys(defaultData);
                const placeholders = fields.map((_, index) => `$${index + 1}`).join(', ');
                const columns = fields.join(', ');
                const query = `
                INSERT INTO about_me (${columns})
                VALUES (${placeholders})
                RETURNING *
            `;
                const values = fields.map(field => {
                    const value = defaultData[field];
                    return typeof value === 'object' ? JSON.stringify(value) : value;
                });
                const result = yield db_1.default.query(query, values);
                return result.rows[0];
            }
            catch (error) {
                console.error('Error in createDefaultAboutMe:', error);
                throw error;
            }
        });
    }
};
