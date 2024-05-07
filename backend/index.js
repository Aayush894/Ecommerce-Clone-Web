import dotenv from 'dotenv';
import cors from 'cors'; 
import express from 'express';
import connectDB from "./db.js"; 
import router from './routes/CreateUser.js'; 
import DisplayData from './routes/DisplayData.js';
import Order from './routes/OrderData.js';
import path from 'path';

dotenv.config(); 

const app = express();
const PORT = process.env.PORT || 5000;

const __dirname = path.resolve();

// Apply CORS middleware for all routes
app.use(cors());

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
