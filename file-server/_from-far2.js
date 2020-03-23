console.log('@@@@@@ BEGIN remote function from _from-far2.js');

let ob = new Outer('Qq', 'Uu'); 
console.log(ob.concat('Pp', 'Vv'));

const fs = require('fs');
let contents = fs.readFileSync('data.txt', 'utf8');
console.log(contents);

console.log(strArg);

let cmdFunc = await remoteCodeLoader.importRemoteCode('_from-far3.js', 'arg1', 'arg2', 'arg3');
let br = await cmdFunc.call(1, '2', a => console.log(`printed from nested 3: ${a}`));

console.log('@@@@@@ END remote function from _from-far2.js');

return true;
