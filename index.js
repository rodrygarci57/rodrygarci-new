const moment = require('moment');
const validator = require('validator');

// Function to check if a date is in the future
function isFutureDate(date) {
  return moment(date).isAfter(moment());
}

// Function to validate an email address
function validateEmail(email) {
  return validator.isEmail(email);
}

// Function to generate a random number within a range
function generateRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// Function to truncate a string to a specified length
function truncateString(str, maxLength) {
  return str.length > maxLength ? `${str.slice(0, maxLength)}...` : str;
}

module.exports = {
  isFutureDate,
  validateEmail,
  generateRandomNumber,
  truncateString
};
