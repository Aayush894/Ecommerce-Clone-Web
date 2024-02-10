import express from "express";
import { Order } from "../models/Order.js";

const router = express.Router();

router.post("/orderData", async (req, res) => {
  try {
    const { email, order_data } = req.body;

    // Validate that email and order_data are provided
    if (!email || !order_data) {
      return res.status(400).json({ error: "Email and order data are required" });
    }

    // Check if email already exists in the database
    const existingOrder = await Order.findOne({ email });

    if (existingOrder) {
      // If email exists, update the existing order with new order data
      await Order.findOneAndUpdate({ email: req.body.email },
        { $push: { order_data: order_data } }).then(() => {
          res.json({ success: true })
        })
    } else {
      // If email doesn't exist, create a new order
      const newOrder = new Order({
        email,
        order_data: [order_data],
        // order_date: new Date().toDateString(),
      });
      await newOrder.save();
      return res.status(201).json({ success: true, message: "Order created successfully" });
    }
  } catch (error) {
    console.error("Error creating/updating order:", error);
    return res.status(500).json({ error: "Server Error" });
  }
});

export default router; // Exporting router as the default export
