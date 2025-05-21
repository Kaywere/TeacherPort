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
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const db_1 = __importDefault(require("./config/db"));
const evidenceRoutes_1 = __importDefault(require("./routes/evidenceRoutes"));
const elementRoutes_1 = __importDefault(require("./routes/elementRoutes"));
const aboutMeRoutes_1 = __importDefault(require("./routes/aboutMeRoutes"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT || 5000;
// Middleware
app.use((0, cors_1.default)({
    origin: ['https://test.soss.site', 'http://localhost:5173', 'http://127.0.0.1:5173'],
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true
}));
app.use(express_1.default.json());
// Test database connection on startup
const testDatabaseConnection = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield db_1.default.query('SELECT NOW()');
        console.log('Database connection successful:', result.rows[0].now);
    }
    catch (error) {
        console.error('Database connection failed:', error);
        process.exit(1); // Exit if database connection fails
    }
});
// Test database connection
app.get('/api/test-db', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield db_1.default.query('SELECT NOW()');
        res.json({
            message: 'Database connection successful',
            timestamp: result.rows[0].now
        });
    }
    catch (error) {
        console.error('Database connection error:', error);
        res.status(500).json({
            error: 'Database connection failed',
            details: error instanceof Error ? error.message : 'Unknown error'
        });
    }
}));
// Routes
app.use('/api/evidences', evidenceRoutes_1.default);
app.use('/api/elements', elementRoutes_1.default);
app.use('/api/about-me', aboutMeRoutes_1.default);
// Error handling middleware
app.use((err, req, res, next) => {
    console.error('Global error handler:', err);
    res.status(500).json({
        error: 'Internal server error',
        message: err.message
    });
});
// Start server
app.listen(port, () => __awaiter(void 0, void 0, void 0, function* () {
    console.log(`Yes Server is running on port ${port}`);
    yield testDatabaseConnection();
}));
