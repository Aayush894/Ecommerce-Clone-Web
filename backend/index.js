import dotenv from 'dotenv';
import cors from 'cors'; 
import express from 'express';
import connectDB from "./db.js"; 
import router from './routes/CreateUser.js'; 
import DisplayData from './routes/DisplayData.js';
import Order from './routes/OrderData.js';
import path from 'path';
import {rateLimit} from 'express-rate-limit'; 

dotenv.config(); 

const app = express();

// Configure the rate limiter
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes in milliseconds
  max: 100, // Limit each IP to 100 requests per window (15 minutes)
  message: 'Too many requests from this IP, please try again after 15 minutes'
});

const PORT = process.env.PORT || 5000;

const __dirname = path.resolve();

// Apply CORS middleware for all routes
app.use(cors());
app.use(limiter); 

app.use(express.json());
app.use('/api', router);
app.use('/api', DisplayData);
app.use('/api', Order);

app.use(express.static(path.join(__dirname, '/frontend/dist')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'frontend', 'dist', 'index.html'));
}); 

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

app.listen(PORT, () => {
  connectDB();
  console.log(`Example app listening on port ${process.env.PORT}`);
});
