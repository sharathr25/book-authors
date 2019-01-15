const bcrypt = require('bcrypt');
const fetch = require('node-fetch');
const urls = require('../../config/url');

function compare(password, userPassword) {
  if (bcrypt.compareSync(password, userPassword)) { return true; }
  return false;
}

async function addUsertoDb(userFormData) {
  let userData;
  try {
    const responce = await fetch(urls.signUpUrl, {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      mode: 'cors', // no-cors, cors, *same-origin
      credentials: 'same-origin', // include, *same-origin, omit
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userFormData),
    });
    userData = await responce.json();
  } catch (error) {
    console.log('some error occurred');
  }
  return userData;
}

async function findUserFromDb(user) {
  let userData;
  try {
    const responce = await fetch(urls.loginUrl, {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      mode: 'cors', // no-cors, cors, *same-origin
      credentials: 'same-origin', // include, *same-origin, omit
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    });
    userData = await responce.json();
  } catch (error) {
    console.log('some error occurred');
  }
  return userData;
}

function checkPassword(password1, password2) {
  if (password1 === password2) {
    return false;
  }
  return true;
}

module.exports = {
  addUser: addUsertoDb,
  findUser: findUserFromDb,
  checkPasswordMismatch: checkPassword,
  comparePassword: compare,
};
