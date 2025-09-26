import express from 'express';
import cors from 'cors';
import connectDB from './config/db.js';
import blogRoutes from './routes/blogroute.js';
import authRoutes from './routes/authroute.js';

const app = express();
app.use(cors());

// Middleware
app.use(express.json());
app.use("/uploads", express.static("uploads"));

// Connect to MongoDB
connectDB();

// Basic route
app.get('/', (req, res) => {
    res.send('API is running...');
});

// API Routes
app.use('/api/blogs', blogRoutes);
app.use('/api/auth', authRoutes);

// Start server
const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});