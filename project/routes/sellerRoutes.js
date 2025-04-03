const express = require('express');
const router = express.Router();
const { protect } = require('../middleware/authMiddleware');

// Get all sellers
router.get('/', async (req, res) => {
  try {
    const sellers = await Seller.find({}).select('-password');
    res.json(sellers);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Register seller
router.post('/register', async (req, res) => {
  try {
    const seller = await Seller.create(req.body);
    res.status(201).json(seller);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;