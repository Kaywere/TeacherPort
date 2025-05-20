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
const express_1 = __importDefault(require("express"));
const elementService_1 = require("../services/elementService");
const router = express_1.default.Router();
// الحصول على جميع العناصر
router.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const elements = yield elementService_1.elementService.getAllElements();
        res.json(elements);
    }
    catch (error) {
        console.error('Error in GET /elements:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
}));
// الحصول على العناصر المرتبطة
router.get('/related/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const relatedElements = yield elementService_1.elementService.getRelatedElements(req.params.id);
        res.json(relatedElements);
    }
    catch (error) {
        console.error('Error in GET /elements/related/:id:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
}));
// الحصول على عنصر بواسطة المعرف
router.get('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const element = yield elementService_1.elementService.getElementById(req.params.id);
        res.json(element);
    }
    catch (error) {
        console.error('Error in GET /elements/:id:', error);
        if (error instanceof Error && error.message === 'Element not found') {
            res.status(404).json({ error: 'Element not found' });
        }
        else {
            res.status(500).json({ error: 'Internal server error' });
        }
    }
}));
exports.default = router;
