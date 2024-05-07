import mongoose from 'mongoose' ; 
import {DB_NAME} from './constants.js';
console.log(DB_NAME);

const connectDB = async () => {
    try {
        const connectionString = `${process.env.MONGODB_URI}${DB_NAME}`;
        console.log(connectionString)
        await mongoose.connect(connectionString);

        console.log("DB Connected");

        console.log(`\nMongoDB connected. DB HOST: ${mongoose.connection.host}`);

        // Fetch data from the 'users' collection using Mongoose model
        const User = mongoose.model('User'); // Replace 'User' with your actual Mongoose model name
        const userData = await User.find({});
        // console.log(userData);

        /* try catch is reqired */
        // .toArray() returns a promise<pending>
        try {
            const fetchedData = await mongoose.connection.db.collection("food_items");
            const data = await fetchedData.find({}).toArray();
            global.food_items = data;
            // console.log(global.food_items);
        } catch (err) {
            console.error(err);
        }

        try {
            const fetchedCategory = await mongoose.connection.db.collection("foodCategories");
            const categoryData = await fetchedCategory.find({}).toArray();
            global.foodCategories = categoryData;
        } catch (error) {
            console.error(err) ;
        }
        
    } catch (error) {
        console.error("MONGODB connection Failed", error);
        process.exit(1);
    }
};

export default connectDB;