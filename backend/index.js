import dotenv from 'dotenv';
import cors from 'cors'; 
import express from 'express';
import connectDB from "./db.js"; 
import router from './routes/CreateUser.js'; 
import DisplayData from './routes/DisplayData.js';
import Order from './routes/OrderData.js';

dotenv.config(); 

const app = express();

// Apply CORS middleware for all routes
app.use(cors());

app.use(express.json());
app.use('/api', router);
app.use('/api', DisplayData);
app.use('/api', Order);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

app.listen(process.env.PORT, () => {
  connectDB();
  console.log(`Example app listening on port ${process.env.PORT}`);
});
