// ==UserScript==
// @name         [01004920105FC000] KonoSuba: God’s Blessing on this Wonderful World! Labyrinth of Hope and the Gathering of Adventurers! Plus
// @version      1.0.0
// @author       [LunaLumin]
// @description  Yuzu
// * ENTERGRAM
//*
// ==/UserScript==
const gameVer = '1.0.0';

const { setHook } = require('./libYuzu.js');
const mainHandler = trans.send(handler, '200+');

setHook({
    '1.0.0': {
        [0x8006a2c0 - 0x80004000]: mainHandler.bind_(null, 1, "Main Text"),
}
}[globalThis.gameVer = globalThis.gameVer ?? gameVer]);

function handler(regs, index, hookname) {
     console.log('onEnter: ' + hookname);

    const address = regs[index].value;

    const len = address.add(0x10).readU32() * 2;
    let s = address.add(0x14).readUtf16String(len);
    
    s = s
        .replace(/^[^\.]*\./, '') // Gets rid of the useless noise before the hooked text. 
    return s;
}