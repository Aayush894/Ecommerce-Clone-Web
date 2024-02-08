import 'dotenv/config';
import express from 'express';
const app = express()
import connectDB from "./db.js" ; 
import router from './routes/CreateUser.js'; 

connectDB() ; 

app.get('/', (req, res) => {
  res.send('Hello World!')
});

app.use(express.json()) ; 
app.use('/api', router) ; 

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})