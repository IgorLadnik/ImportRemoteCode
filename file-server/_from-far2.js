console.log('@@@@@@ BEGIN remote function from _from-far2.js');

const fs = require('fs');
let contents = fs.readFileSync('data.txt', 'utf8');
console.log(contents);

console.log(strArg);
console.log('@@@@@@ END remote function from _from-far2.js');

return true;
