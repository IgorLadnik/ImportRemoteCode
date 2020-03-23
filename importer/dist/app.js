"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const fetch_script_1 = require("./fetch-script");
const dictionaryjs_1 = require("dictionaryjs");
class Outer {
    constructor(s1, s2) {
        this.s1 = s1;
        this.s2 = s2;
    }
    concat(prefix, suffix) {
        return `${prefix}${this.s1}${this.s2}${suffix}`;
    }
}
const scriptBaseUrl = 'http://localhost:9000/';
(function run() {
    return __awaiter(this, void 0, void 0, function* () {
        let dctDependInj = new dictionaryjs_1.Dictionary();
        dctDependInj.set('require', require);
        dctDependInj.set('RemoteCodeLoader', fetch_script_1.RemoteCodeLoader);
        dctDependInj.set('scriptBaseUrl', scriptBaseUrl);
        dctDependInj.set('dctDependInj', dctDependInj);
        dctDependInj.set('Outer', Outer);
        let rcl = new fetch_script_1.RemoteCodeLoader(scriptBaseUrl, dctDependInj);
        let cmdFunc1 = yield rcl.importRemoteCode('_from-far1.js', 'n');
        let br = yield cmdFunc1.call(111);
        br = yield cmdFunc1.call(222);
    });
})();
//# sourceMappingURL=app.js.map