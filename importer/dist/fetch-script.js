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
const fetch = require('node-fetch');
class CmdFunc {
    constructor(injections, fn, isValid) {
        this.injections = injections;
        this.fn = fn;
        this.isValid = isValid;
    }
    call(...args) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!this.isValid)
                return false;
            let arr = ArrayUtils.merge(this.injections, args);
            try {
                return yield this.fn(...arr);
            }
            catch (err) {
                console.log(`ERROR: ${err}`);
                return false;
            }
        });
    }
}
exports.CmdFunc = CmdFunc;
class RemoteCodeLoader {
    constructor(baseUrl, injections) {
        this.baseUrl = baseUrl;
        this.injections = injections;
    }
    importRemoteCode(remoteCodeName, ...args) {
        return __awaiter(this, void 0, void 0, function* () {
            let fn;
            let url = `${this.baseUrl}${remoteCodeName}`;
            let script = yield fetch(url);
            if (!script.ok)
                return new CmdFunc([], new Function(), false);
            let arr = ArrayUtils.merge(this.injections.keys(), args);
            try {
                let strFunc = `return (async () => { ${yield script.text()} })()`;
                fn = new Function(...arr, strFunc);
            }
            catch (err) {
                console.log(`*** ERROR: ${err}`);
                return new CmdFunc([], new Function(), false);
            }
            let arr1 = new Array();
            for (let i = 0; i < this.injections.length; i++)
                arr1.push(this.injections.get(this.injections.keys()[i]));
            return new CmdFunc(arr1, fn, true);
        });
    }
}
exports.RemoteCodeLoader = RemoteCodeLoader;
class ArrayUtils {
    static merge(arr1, arr2) {
        let arr = new Array();
        for (let i = 0; i < arr1.length; i++)
            arr.push(arr1[i]);
        for (let i = 0; i < arr2.length; i++)
            arr.push(arr2[i]);
        return arr;
    }
}
//# sourceMappingURL=fetch-script.js.map