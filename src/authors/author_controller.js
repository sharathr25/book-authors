const fetch = require('node-fetch');
const url = require('../../config/url');

async function getAuthorsData() {
  let authors;
  try {
    const responce = await fetch(url.authorsUrl);
    authors = await responce.json();
  } catch (err) {
    console.log(err);
  }
  return authors;
}

async function getAuthorDataById(id) {
  let author;
  try {
    const authorUrl = `${url.authorsUrl}${id}`;
    const responce = await fetch(authorUrl);
    author = await responce.json();
  } catch (err) {
    console.log(err);
  }
  return author;
}

module.exports = {
  getAuthors: getAuthorsData,
  getAuthorById: getAuthorDataById,
};
