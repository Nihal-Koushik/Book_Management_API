const express = require('express');
const bookController = require('../controllers/bookControllers');
const { validateRequest } = require('../middlewares/validateRequest');
const { rateLimiter } = require('../middlewares/rateLimiter');

const router = express.Router();

router.get('/books', rateLimiter, bookController.listBooks);
router.get('/books/:id', rateLimiter, bookController.getBook);
router.post('/books', validateRequest, bookController.addBook);
router.put('/books/:id', validateRequest, bookController.updateBook);
router.delete('/books/:id', bookController.deleteBook);
router.get('/books/search', rateLimiter, bookController.searchBooks);

module.exports = router;
