const express = require('express');
const book = require('./book_controller.js');
const middleware = require('../common/middleware.js');

const route = express.Router();

route.get('/books', middleware.redirectLogin, async (req, res) => {
  try {
    const booksData = await book.getBooks();
    res.status(200).render('books', { data: booksData[0] });
  } catch (error) {
    res.status(500).send('some error happend please go back');
  }
});

route.get('/bookisbn/:isbn', middleware.redirectLogin, async (req, res) => {
  const isbnNo = req.params.isbn;
  const regex = /[0-9]+/;
  if (regex.test(isbnNo)) {
    const bookData = await book.getBookByIsbn(isbnNo);
    if (typeof bookData !== 'undefined' && bookData[0].length === 0) {
      res.status(500).send('BOOK NOT FOUND');
    } else {
      res.status(200).render('book_details', { data: bookData[0] });
    }
  } else {
    res.status(500).send('BOOK NOT FOUND');
  }
});

module.exports = route;
