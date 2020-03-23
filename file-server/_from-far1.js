console.log('****** BEGIN remote function from _from-far1.js');

class Foo {
    a;
    b;

    constructor(a, b){
        this.a = a;
        this.b = b;
    }

    add() {
        return this.a + this.b;
    }
}

let foo = new Foo(5, 10);
console.log(foo.add());

const fs = require('fs');
let contents = fs.readFileSync('data.txt', 'utf8');
console.log(contents);

let ob = new Outer('Bb', 'Cc'); 
console.log(ob.concat('Aa', 'Dd'));

console.log(n);

let rcl = new RemoteCodeLoader(scriptBaseUrl, dctDependInj);
let cmdFunc = await rcl.importRemoteCode('_from-far2.js', 'strArg');
let br = await cmdFunc.call('str. argparam.');

console.log('****** END remote function from _from-far1.js');

return true;

