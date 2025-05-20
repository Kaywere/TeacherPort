import  pool  from '../config/db'

export interface Element {
  id: string;
  title: string;
  description: string;
  content: string;
  created_at: Date;
  updated_at: Date;
}

export const elementModel = {
  // الحصول على عنصر بواسطة المعرف
  async getElementById(id: string): Promise<Element | null> {
    try {
      // التحقق من صحة المعرف
      if (!id || typeof id !== 'string') {
        throw new Error('Invalid element ID');
      }

      const result = await pool.query(
        'SELECT * FROM elements WHERE id = $1',
        [id]
      );

      if (!result.rows[0]) {
        console.log(`No element found with ID: ${id}`);
        return null;
      }

      return result.rows[0];
    } catch (error) {
      console.error('Error in getElementById:', error);
      throw error;
    }
  },

  // الحصول على جميع العناصر
  async getAllElements(): Promise<Element[]> {
    try {
      const result = await pool.query('SELECT * FROM elements ORDER BY id');
      return result.rows;
    } catch (error) {
      console.error('Error in getAllElements:', error);
      throw error;
    }
  },

  // الحصول على العناصر المرتبطة (باستثناء العنصر الحالي)
  async getRelatedElements(currentElementId: string): Promise<Element[]> {
    try {
      // التحقق من صحة المعرف
      if (!currentElementId || typeof currentElementId !== 'string') {
        throw new Error('Invalid element ID');
      }

      // تحويل المعرف إلى رقم للمقارنة الصحيحة
      const currentIdNumber = parseInt(currentElementId);
      
      // جلب العناصر التي تأتي بعد العنصر الحالي
      const afterCurrent = await pool.query(
        'SELECT * FROM elements WHERE CAST(id AS INTEGER) > $1 ORDER BY CAST(id AS INTEGER) LIMIT 3',
        [currentIdNumber]
      );

      // إذا كان لدينا 3 عناصر، نعيدها مباشرة
      if (afterCurrent.rows.length === 3) {
        return afterCurrent.rows;
      }

      // إذا لم نحصل على 3 عناصر، نجلب العناصر التي قبل العنصر الحالي
      const remainingCount = 3 - afterCurrent.rows.length;
      const beforeCurrent = await pool.query(
        'SELECT * FROM elements WHERE CAST(id AS INTEGER) < $1 ORDER BY CAST(id AS INTEGER) LIMIT $2',
        [currentIdNumber, remainingCount]
      );

      // دمج النتائج
      return [...afterCurrent.rows, ...beforeCurrent.rows];
    } catch (error) {
      console.error('Error in getRelatedElements:', error);
      throw error;
    }
  }
}; 