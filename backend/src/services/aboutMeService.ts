import pool from '../config/db';

export interface AboutMe {
    id: number;
    name: string;
    title: string;
    bio: string;
    image_url: string;
    email: string;
    phone: string;
    school: string;
    education: any[];
    experience: any[];
    skills: any[];
    achievements: any[];
    created_at: Date;
    updated_at: Date;
}

export const aboutMeService = {
    async getAboutMe(): Promise<AboutMe | null> {
        try {
            const result = await pool.query('SELECT * FROM about_me ORDER BY id DESC LIMIT 1');
            return result.rows[0] || null;
        } catch (error) {
            console.error('Error in getAboutMe:', error);
            throw error;
        }
    },

    async updateAboutMe(data: Partial<AboutMe>): Promise<AboutMe> {
        try {
            // Check if any record exists
            const existingRecord = await this.getAboutMe();
            
            // Define JSONB fields
            const jsonbFields = ['education', 'experience', 'skills', 'achievements'];
            
            if (existingRecord) {
                // Update existing record
                // Remove updated_at if present in data
                const fields = Object.keys(data).filter(field => field !== 'updated_at');
                const values = fields.map(field => {
                    const value = (data as any)[field];
                    // Handle JSONB fields
                    if (jsonbFields.includes(field)) {
                        // Ensure the field is an array, even if empty
                        const arrayValue = Array.isArray(value) ? value : [];
                        return JSON.stringify(arrayValue);
                    }
                    return value;
                });
                
                const setClause = fields.map((field, index) => {
                    // Cast JSONB fields explicitly
                    if (jsonbFields.includes(field)) {
                        return `${field} = $${index + 1}::jsonb`;
                    }
                    return `${field} = $${index + 1}`;
                }).join(', ');
                
                const query = `
                    UPDATE about_me 
                    SET ${setClause}, updated_at = CURRENT_TIMESTAMP
                    WHERE id = $${values.length + 1}
                    RETURNING *
                `;
                
                console.log('Update Query:', query);
                console.log('Update Values:', JSON.stringify(values, null, 2));
                
                const result = await pool.query(query, [...values, existingRecord.id]);
                return result.rows[0];
            } else {
                // Insert new record if none exists
                const fields = Object.keys(data);
                const placeholders = fields.map((field, index) => {
                    // Cast JSONB fields explicitly
                    if (jsonbFields.includes(field)) {
                        return `$${index + 1}::jsonb`;
                    }
                    return `$${index + 1}`;
                }).join(', ');
                const columns = fields.join(', ');
                
                const query = `
                    INSERT INTO about_me (${columns})
                    VALUES (${placeholders})
                    RETURNING *
                `;
                
                const values = fields.map(field => {
                    const value = (data as any)[field];
                    // Handle JSONB fields
                    if (jsonbFields.includes(field)) {
                        // Ensure the field is an array, even if empty
                        const arrayValue = Array.isArray(value) ? value : [];
                        return JSON.stringify(arrayValue);
                    }
                    return value;
                });
                
                console.log('Insert Query:', query);
                console.log('Insert Values:', JSON.stringify(values, null, 2));
                
                const result = await pool.query(query, values);
                return result.rows[0];
            }
        } catch (error) {
            console.error('Error in updateAboutMe:', error);
            if (error && typeof error === 'object' && 'message' in error) {
                console.error('Error details:', {
                    message: (error as any).message,
                    detail: (error as any).detail,
                    where: (error as any).where
                });
            }
            throw error;
        }
    },
    
    async createDefaultAboutMe(): Promise<AboutMe> {
        try {
            // Check if any record exists
            const existingRecord = await this.getAboutMe();
            
            if (existingRecord) {
                return existingRecord; // Return existing record if it exists
            }
            
            // Default data
            const defaultData = {
                name: 'سلوى الزهراني',
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
                const value = defaultData[field as keyof typeof defaultData];
                return typeof value === 'object' ? JSON.stringify(value) : value;
            });
            
            const result = await pool.query(query, values);
            return result.rows[0];
        } catch (error) {
            console.error('Error in createDefaultAboutMe:', error);
            throw error;
        }
    }
}; 