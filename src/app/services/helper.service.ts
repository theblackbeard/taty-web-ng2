import { Injectable } from '@angular/core';

@Injectable()
export class HelperService {

    constructor() { }


    getSlug(data) {
        let map = {
            a: /[\xE0-\xE6]/g,
            e: /[\xE8-\xEB]/g,
            i: /[\xEC-\xEF]/g,
            o: /[\xF2-\xF6]/g,
            u: /[\xF9-\xFC]/g,
            c: /\xE7/g,
            n: /\xF1/g,
            A: /[\xC0-\xC6]/g,
            E: /[\xC8-\xCB]/g,
            I: /[\xCC-\xCF]/g,
            O: /[\xD2-\xD6]/g,
            U: /[\xD9-\xDC]/g,
            C: /\xC7/g,
            N: /\xD1/g,
            '-': /\s/g,
        };

        for (let letter in map) {
            let er = map[letter];
            data = data.replace(er, letter);
        }
        return data.toLowerCase().trim();
    }
   
}
