import { RemoteCodeLoader } from './fetch-script';
import { Dictionary } from 'dictionaryjs';

class Outer {
    constructor(public readonly s1: string , public readonly s2: string) { }

    concat(prefix: string, suffix: string) {
        return `${prefix}${this.s1}${this.s2}${suffix}`;
    }
}

const SCRIPT_BASE_URL = 'http://localhost:9000/' ;

(async function run() {
    let dct = new Dictionary<string, any>();
    dct.set('require', require);
    dct.set('Outer', Outer);

    let rcl = new RemoteCodeLoader(SCRIPT_BASE_URL, dct);
    let cmdFunc = await rcl.importRemoteCode('_from-far.js', 'n');

    let br = await cmdFunc.call(111);
    br = await cmdFunc.call(222);
})();

