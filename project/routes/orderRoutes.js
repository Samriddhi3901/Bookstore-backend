const express = require('express');
const router = express.Router();
const { protect } = require('../middleware/authMiddleware');

// Get all orders
router.get('/', protect, async (req, res) => {
  try {
    const orders = await Order.find({});
    res.json(orders);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Create new order
router.post('/', protect, async (req, res) => {
  try {
    const order = new Order({
      user: req.user._id,
      ...req.body
    });
    const createdOrder = await order.save();
    res.status(201).json(createdOrder);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;