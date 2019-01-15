const fetch = require('node-fetch');
const url = require('../../config/url');

async function getBooksData() {
  let books;
  try {
    const responce = await fetch(url.booksUrl);
    books = await responce.json();
  } catch (err) {
    console.log(err);
  }
  return books;
}

async function getBookDataByIsbn(isbn) {
  let book;
  try {
    const bookUrl = `${url.booksUrl}${isbn}`;
    const responce = await fetch(bookUrl);
    book = await responce.json();
  } catch (err) {
    console.log(err);
  }
  return book;
}

module.exports = {
  getBooks: getBooksData,
  getBookByIsbn: getBookDataByIsbn,
};
