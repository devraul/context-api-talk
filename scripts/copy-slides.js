const fs = require('fs');
const path = require('path');

fs.copyFile(
  path.resolve('./docs/slides-context-api.html'),
  path.resolve('./build/slides-context-api.html'),
  err => {
    if (err) {
      console.log('v', err);
      console.log('Something went wrong while copy slides');
      return;
    }
    console.log('Great Success!');
  }
);
