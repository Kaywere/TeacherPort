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
Object.defineProperty(exports, "__esModule", { value: true });
exports.elementService = void 0;
const elementModel_1 = require("../models/elementModel");
exports.elementService = {
    // الحصول على عنصر بواسطة المعرف
    getElementById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                if (!id) {
                    throw new Error('Element ID is required');
                }
                const element = yield elementModel_1.elementModel.getElementById(id);
                if (!element) {
                    console.log(`Element not found with ID: ${id}`);
                    throw new Error('Element not found');
                }
                return element;
            }
            catch (error) {
                console.error('Error in elementService.getElementById:', error);
                throw error;
            }
        });
    },
    // الحصول على جميع العناصر
    getAllElements() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const elements = yield elementModel_1.elementModel.getAllElements();
                if (!elements || elements.length === 0) {
                    console.log('No elements found in the database');
                }
                return elements;
            }
            catch (error) {
                console.error('Error in elementService.getAllElements:', error);
                throw error;
            }
        });
    },
    // الحصول على العناصر المرتبطة
    getRelatedElements(currentElementId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                if (!currentElementId) {
                    throw new Error('Current element ID is required');
                }
                const relatedElements = yield elementModel_1.elementModel.getRelatedElements(currentElementId);
                if (!relatedElements || relatedElements.length === 0) {
                    console.log(`No related elements found for element ID: ${currentElementId}`);
                }
                return relatedElements;
            }
            catch (error) {
                console.error('Error in elementService.getRelatedElements:', error);
                throw error;
            }
        });
    }
};
