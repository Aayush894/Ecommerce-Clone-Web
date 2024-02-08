import express from "express";
const router = express.Router();
import { User } from "../models/User.js";
import { body, validationResult } from "express-validator";

router.post(
  "/createuser",
  [
    body("email", "Incorrect Email").isEmail(),
    body('name').isLength({min : 5}),
    body("password", "Incorrect Password").isLength({ min: 3 }),
  ],
  async (req, res) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const { name, email, password, location } = req.body;
      const user = await User.create({
        name,
        password,
        email,
        location,
      });

      res.json({ success: true });
    } catch (error) {
      console.log(error);
      res.json({ success: false });
    }
  }
);


router.post(
  "/login",
  [
    body("email", "Incorrect Email").isEmail(),
    body("password", "Incorrect Password").isLength({ min: 3 }),
  ],
  async (req, res) => {

    const error = validationResult(req);
    if (!error.isEmpty()) {
      return res.status(400).json({ errors: error.array() });
    }

    const { email, password } = req.body;
    
    try {

      const user = await User.find(email);
      console.log(user) ; 

      if (!user) {
        res.status(400).json({ errors: "Try Login with correct credentials" })
      }
      else if (password !== user.password) {
        res.status(400).json({ errors: "Try Login with correct credentials" })
      }
      else {
        res.json({ success: true });
      }

    } catch (error) {

      res.json({success : false});
    }
  }
);
export default router;
