import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import pool from './config/db';
import evidenceRoutes from './routes/evidenceRoutes';
import elementRoutes from './routes/elementRoutes';
import aboutMeRoutes from './routes/aboutMeRoutes';

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors({
    origin: ['https://test.soss.site', 'http://localhost:5173', 'http://127.0.0.1:5173','http://192.168.1.51:5173'],
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true
}));
app.use(express.json());

// Test database connection on startup
const testDatabaseConnection = async () => {
    try {
        const result = await pool.query('SELECT NOW()');
        console.log('Database connection successful:', result.rows[0].now);
    } catch (error) {
        console.error('Database connection failed:', error);
        process.exit(1); // Exit if database connection fails
    }
};

// Test database connection
app.get('/api/test-db', async (req, res) => {
    try {
        const result = await pool.query('SELECT NOW()');
        res.json({ 
            message: 'Database connection successful',
            timestamp: result.rows[0].now
        });
    } catch (error) {
        console.error('Database connection error:', error);
        res.status(500).json({ 
            error: 'Database connection failed',
            details: error instanceof Error ? error.message : 'Unknown error'
        });
    }
});

// Routes
app.use('/api/evidences', evidenceRoutes);
app.use('/api/elements', elementRoutes);
app.use('/api/about-me', aboutMeRoutes);

// Error handling middleware
app.use((err: Error, req: express.Request, res: express.Response, next: express.NextFunction) => {
    console.error('Global error handler:', err);
    res.status(500).json({
        error: 'Internal server error',
        message: err.message
    });
});

// Start server
app.listen(port, async () => {
    console.log(`Server is running on port ${port}`);
    await testDatabaseConnection();
}); 