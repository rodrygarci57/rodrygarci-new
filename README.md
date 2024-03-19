# Rodrygarci-new

Rodrygarci-new is a Node.js module providing a collection of quick utility functions for various tasks.

## Installation

You can install this module via npm: `npm install rodrygarci-new`

## Usage
```javascript
const quickUtils = require('quick-utils');

// Check if a date is in the future
const futureDate = '2024-12-31';
console.log('Is future date?', quickUtils.isFutureDate(futureDate));

// Validate an email address
const email = 'test@example.com';
console.log('Is valid email?', quickUtils.validateEmail(email));

// Generate a random number within a range
const randomNumber = quickUtils.generateRandomNumber(1, 100);
console.log('Random number:', randomNumber);

// Truncate a string to a specified length
const longString = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.';
const truncatedString = quickUtils.truncateString(longString, 20);
console.log('Truncated string:', truncatedString);
```

