import { RemoteCodeLoader } from './fetch-script';
import { Dictionary } from 'dictionaryjs';

class Outer {
    constructor(public readonly s1: string , public readonly s2: string) { }

    concat(prefix: string, suffix: string) {
        return `${prefix}${this.s1}${this.s2}${suffix}`;
    }
}

const scriptBaseUrl = 'http://localhost:9000/' ;

(async function run() {
    let dctDependInj = new Dictionary<string, any>();
    dctDependInj.set('require', require);
    dctDependInj.set('Outer', Outer);
    dctDependInj.set('remoteCodeLoader', new RemoteCodeLoader(scriptBaseUrl, dctDependInj));
    
    let rcl = new RemoteCodeLoader(scriptBaseUrl, dctDependInj);
    let cmdFunc = await rcl.importRemoteCode('_from-far1.js', 'n');

    let br = await cmdFunc.call(111);
    br = await cmdFunc.call(222);
})();

