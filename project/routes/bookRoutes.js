const express = require('express');
const router = express.Router();
const { protect } = require('../middleware/authMiddleware');
const Book = require('../models/bookModel');

// Get all books
router.get('/', async (req, res) => {
  try {
    const books = await Book.find({}).populate('seller', 'name email');
    res.json(books);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Get single book
router.get('/:id', async (req, res) => {
  try {
    const book = await Book.findById(req.params.id).populate('seller', 'name email');
    if (book) {
      res.json(book);
    } else {
      res.status(404).json({ message: 'Book not found' });
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Create book (seller only)
router.post('/', protect, async (req, res) => {
  try {
    const { title, author, description, price, category, stock, image } = req.body;
    const book = new Book({
      title,
      author,
      description,
      price,
      category,
      stock,
      image,
      seller: req.user._id
    });
    const createdBook = await book.save();
    res.status(201).json(createdBook);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;