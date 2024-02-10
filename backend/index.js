import 'dotenv/config';
import cors from 'cors'; 
import express from 'express';
import connectDB from "./db.js" ; 
import router from './routes/CreateUser.js'; 
import DisplayData from './routes/DisplayData.js'
import Order from './routes/OrderData.js'

const app = express() ;

const corsOptions = {
  origin: '*', 
  credentials:true, 
  optionSuccessStatus:200,
}
app.use(cors(corsOptions)) ; 

app.use(express.json()) ; 
app.use('/api', router) ; 
app.use('/api', DisplayData) ; 
app.use('/api', Order) ; 

connectDB() ; 

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})