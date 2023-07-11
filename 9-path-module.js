//path module
const path = require('path');

//returns a specific separator
console.log(path.sep);

//joining paths together using the path.join method
const filePath = path.join('/content','subfolder','test.txt');
console.log(filePath);

//getting the base name
const base = path.basename(filePath);
console.log(base);

//getting an absolute path
const absolute = path.resolve(__dirname,'content', 'subfolder', 'test.txt');
console.log(absolute);