import 'dotenv/config'
import mongoose from 'mongoose' ; 
import {DB_NAME} from './constants.js';
console.log(DB_NAME);

const connectDB = async () => { 
    try {
        // console.log(process.env.MONGODB_URI);
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)

        console.log(`\n MongoDB connected DB HOST: ${connectionInstance.connection.host}`)

        const fetched_data = await mongoose.connection.db.collection("sample") ; 
        // console.log(fetched_data.find({})) ; 
         
       fetched_data.find({}).toArray(function(err, data) {
            console.log(data) ; 
            if (err) console.log(err);
            else console.log(data);
        }) 
    } catch (error) {
        console.log("MONGODB connection Failed", error) ; 
        process.exit(1) ;
    }
}

export default connectDB;