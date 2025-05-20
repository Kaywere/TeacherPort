import { elementModel, Element } from '../models/elementModel';

export const elementService = {
  // الحصول على عنصر بواسطة المعرف
  async getElementById(id: string): Promise<Element | null> {
    try {
      if (!id) {
        throw new Error('Element ID is required');
      }

      const element = await elementModel.getElementById(id);
      if (!element) {
        console.log(`Element not found with ID: ${id}`);
        throw new Error('Element not found');
      }
      return element;
    } catch (error) {
      console.error('Error in elementService.getElementById:', error);
      throw error;
    }
  },

  // الحصول على جميع العناصر
  async getAllElements(): Promise<Element[]> {
    try {
      const elements = await elementModel.getAllElements();
      if (!elements || elements.length === 0) {
        console.log('No elements found in the database');
      }
      return elements;
    } catch (error) {
      console.error('Error in elementService.getAllElements:', error);
      throw error;
    }
  },

  // الحصول على العناصر المرتبطة
  async getRelatedElements(currentElementId: string): Promise<Element[]> {
    try {
      if (!currentElementId) {
        throw new Error('Current element ID is required');
      }

      const relatedElements = await elementModel.getRelatedElements(currentElementId);
      if (!relatedElements || relatedElements.length === 0) {
        console.log(`No related elements found for element ID: ${currentElementId}`);
      }
      return relatedElements;
    } catch (error) {
      console.error('Error in elementService.getRelatedElements:', error);
      throw error;
    }
  }
}; 