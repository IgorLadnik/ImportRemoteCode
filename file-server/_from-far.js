console.log('****** BEGIN remote function');

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
console.log('****** END remote function');

return true;
