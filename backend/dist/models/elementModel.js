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
exports.elementModel = void 0;
const db_1 = __importDefault(require("../config/db"));
exports.elementModel = {
    // الحصول على عنصر بواسطة المعرف
    getElementById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                // التحقق من صحة المعرف
                if (!id || typeof id !== 'string') {
                    throw new Error('Invalid element ID');
                }
                const result = yield db_1.default.query('SELECT * FROM elements WHERE id = $1', [id]);
                if (!result.rows[0]) {
                    console.log(`No element found with ID: ${id}`);
                    return null;
                }
                return result.rows[0];
            }
            catch (error) {
                console.error('Error in getElementById:', error);
                throw error;
            }
        });
    },
    // الحصول على جميع العناصر
    getAllElements() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield db_1.default.query('SELECT * FROM elements ORDER BY id');
                return result.rows;
            }
            catch (error) {
                console.error('Error in getAllElements:', error);
                throw error;
            }
        });
    },
    // الحصول على العناصر المرتبطة (باستثناء العنصر الحالي)
    getRelatedElements(currentElementId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                // التحقق من صحة المعرف
                if (!currentElementId || typeof currentElementId !== 'string') {
                    throw new Error('Invalid element ID');
                }
                const result = yield db_1.default.query('SELECT * FROM elements WHERE id != $1 ORDER BY id LIMIT 3', [currentElementId]);
                return result.rows;
            }
            catch (error) {
                console.error('Error in getRelatedElements:', error);
                throw error;
            }
        });
    }
};
