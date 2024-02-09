import express from "express";
const router = express.Router();

router.post('/foodData', (req, res) => {
    try {
        res.send([global.food_items, global.foodCategories]) ; 
    } catch (error) {
        console.log(error.message) ; 
        res.send("Server error") ; 
    }
})

export default router ;