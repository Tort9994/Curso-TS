"use strict";
(() => {
    let flash = {
        name: "Barry Allen",
        // age: 24,
        powers: ["super velocidad", "viajar en el tiempo"]
    };
    let superMan = {
        name: "Clark Ken",
        age: 60,
        powers: ["Super Fuerza"],
        getName() {
            return this.name;
        }
    };
})();
