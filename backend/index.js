import 'dotenv/config';
import cors from 'cors'; 
import express from 'express';
import connectDB from "./db.js" ; 
import router from './routes/CreateUser.js'; 


const app = express() ;
// cors error resolve
// app.use((req, res, next) => {
//   res.setHeader("Access-Control-Allow-Origin", "http://localhost:5173"); 
//   res.Headers(
//     "Access-Control-Allow-Headers",
//     "Origin, X-Requested-With, Content-Type, Accept"
//   );
//   next();
// })
const corsOptions = {
  origin: '*', 
  credentials:true, 
  optionSuccessStatus:200,
}
app.use(cors(corsOptions)) ; 

app.use(express.json()) ; 
app.use('/api', router) ; 

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// });

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})