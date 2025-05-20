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
const aboutMeService_1 = require("../services/aboutMeService");
const router = express_1.default.Router();
// Get about me data
router.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const aboutMe = yield aboutMeService_1.aboutMeService.getAboutMe();
        if (!aboutMe) {
            // If no data exists, create default data
            const defaultData = yield aboutMeService_1.aboutMeService.createDefaultAboutMe();
            res.json(defaultData);
        }
        else {
            res.json(aboutMe);
        }
    }
    catch (error) {
        console.error('Error in GET /api/about-me:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
}));
// Update about me data
router.put('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const updatedAboutMe = yield aboutMeService_1.aboutMeService.updateAboutMe(req.body);
        res.json(updatedAboutMe);
    }
    catch (error) {
        console.error('Error in PUT /api/about-me:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
}));
// Create default data
router.post('/default', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const defaultData = yield aboutMeService_1.aboutMeService.createDefaultAboutMe();
        res.json(defaultData);
    }
    catch (error) {
        console.error('Error in POST /api/about-me/default:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
}));
exports.default = router;
