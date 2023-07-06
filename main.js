"use strict";
(() => {
    let flash = {
        name: "Barry Allen",
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
(() => {
    class Mutant {
        mutantPower(id) {
            return this.name + " " + this.realName;
        }
        constructor(n, r, a) {
            this.name = n,
                this.realName = r,
                this.age = a;
        }
    }
})();
(() => {
    const client = {
        name: "Fernando",
        age: 25,
        address: {
            id: 125,
            zip: " KY@ SUD",
            city: "Ottawa"
        },
        getFullAddress(id) {
            var _a;
            return (_a = this.address) === null || _a === void 0 ? void 0 : _a.city;
        },
    };
    const client2 = {
        name: "Fernando",
        age: 25,
        address: {
            id: 125,
            zip: " KY@ SUD",
            city: "Ottawa"
        },
        getFullAddress(id) {
            var _a;
            return (_a = this.address) === null || _a === void 0 ? void 0 : _a.city;
        },
    };
})();
(() => {
    let addNumbersFunction;
})();
//# sourceMappingURL=main.js.map