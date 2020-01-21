const translate = require('./translation.js');

console.log('Starting test script');

translate.translateText('en-US', 'fr-FR', 'hello!')
  .then(d => {
    console.log('finish');
    console.log(d);
  })