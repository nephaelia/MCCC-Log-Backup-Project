var fs = require('fs');

var data = 'New File Contents';

fs.writeFile('temp.text', data, (err) => {
  if (err) console.log(err);
  console.log('Successfully Written to File.');
});