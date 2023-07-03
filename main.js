"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
(() => {
    const avengers = {
        nick: "Samuel L. Jackson",
        ironman: "Robert Downy Jr",
        vision: "Paul Bettany",
        activo: true,
        poder: 1500.12313123
    };
    const mostrarHero = (_a) => {
        var { vision } = _a, rest = __rest(_a, ["vision"]);
        console.log(vision, rest);
    };
    mostrarHero(avengers);
    const avengersArr = ["Cap. America", true, 23132123];
    const [, ironman,] = avengersArr;
    console.log(ironman);
})();
(() => {
    const ironman = {
        name: "Ironman",
        weapon: "Armorsuit"
    };
    const capAmerica = {
        name: "Capitan america",
        weapon: "escudo de bibranio"
    };
    const deadPool = {
        name: "deadPool",
        weapon: "katanas"
    };
    const avengers = [ironman, deadPool, capAmerica];
    for (const avenger of avengers) {
        console.log(avenger);
    }
})();
(() => {
    const nombre = "Fernando";
    const getName = () => {
        console.log("viejo getName");
    };
})();
//# sourceMappingURL=main.js.map