import mongoose from 'mongoose'; 

const { Schema} = mongoose ; 
const handleDate = () => {
    const date = new Date();
    return date.toLocaleString();
}

const OrderSchema = new Schema({
    email : {
        type: String, 
        required:true,
        unique: true
    }, 
    order_data: {
        type: Array, 
        required: true,
    },
    order_date: {
        type: String, 
        default: handleDate,
    }
})

export const Order = mongoose.model('Order', OrderSchema);