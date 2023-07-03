"use strict";
const batimovil = {
    carroceria: "Negra",
    modelo: "6x6",
    antibalas: true,
    pasajeros: 4
};
const bumblebee = {
    carroceria: "Amarillo con negro",
    modelo: "4x2",
    antibalas: true,
    pasajeros: 4,
    disparar() {
        console.log("Disparando");
    }
};
const villanos = [{
        nombre: "Lex Luthor",
        edad: 54,
        mutante: false
    }, {
        nombre: "Erik Magnus Lehnsherr",
        edad: 49,
        mutante: true
    }, {
        nombre: "James Logan",
        edad: undefined,
        mutante: true
    }];
const charles = {
    poder: "psiquico",
    estatura: 1.78
};
const apocalipsis = {
    lider: true,
    miembros: ["Magneto", "Tormenta", "Psylocke", "Angel"]
};
let mystique;
mystique = charles;
mystique = apocalipsis;
(() => {
    const fullName = (firstName, lastname, upper = false) => {
        if (upper) {
            return `Hola mi nombre es ${firstName} ${lastname || "----"}`.toUpperCase();
        }
        else {
            return `Hola mi nombre es ${firstName} ${lastname}`;
        }
    };
    const persona = fullName("Fania", "torres", true);
    console.log(persona);
})();
(() => {
    const fullName = (firstName, lastname) => {
        if (!firstName) {
            throw new Error("nombre requerido");
        }
        return `Hola mi nombre es ${firstName} ${lastname}`;
    };
    const persona = fullName("Fania", "torres");
    console.log(persona);
})();
(() => {
    const fullName = (firstName, lastname) => {
        if (!firstName) {
            throw new Error("nombre requerido");
        }
        return `Hola mi nombre es ${firstName} ${lastname || "no lastname"}`;
    };
    const persona = fullName("Fania");
    console.log(persona);
})();
(() => {
    const fullName = (firstName, ...restArgs) => {
        return `${firstName} ${restArgs.join(' ')}`;
    };
})();
(() => {
    const hero = "Flash";
    function returnName() {
        return hero;
    }
    function activateBatisignal() {
        return "Batiseñal activada";
    }
    console.log(typeof activateBatisignal);
    const heroName = returnName();
})();
(() => {
    const addNumbers = (a, b) => a + b;
    const greet = (name) => `Hola ${name}`;
    const saveTheWorld = () => "Se salva el mundo";
    console.log(greet("Fernando"));
    console.log(saveTheWorld());
})();
(() => {
    let flash = {
        name: "Barry Allen",
        age: 24,
        powers: ["super velocidad", "viajar en el tiempo"]
    };
    let superMan = {
        name: "Clark Ken",
        age: 60,
        powers: ["Super Fuerza"],
    };
})();
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
    let myCustomVariable = "Fernando";
    console.log(typeof myCustomVariable);
    myCustomVariable = 20;
    console.log(typeof myCustomVariable);
    myCustomVariable = { name: "Bruce", age: 20, powers: ["Super velocidad"] },
        console.log(typeof myCustomVariable);
})();
(() => {
    let avenger = 123;
    let exist;
    let power;
    avenger = "Dr Strange";
    console.log(avenger.charAt(0));
    avenger = 7187812.12321;
    console.log(avenger.toFixed(2));
    console.log(exist);
    console.log(power);
})();
(() => {
    const numbers = [1, 2, 3, 4, 5, 6, 7];
    const villians = ["Omega Rojo", " Dormammu", "Duende verde"];
    villians.forEach(v => console.log(v.toUpperCase()));
})();
(() => {
    let isSuperman = true;
    let isBatman = false;
    isSuperman = true && true;
    isSuperman = (isBatman) ? true : false;
    console.log({ isSuperman });
})();
(() => {
    let AudioLevel;
    (function (AudioLevel) {
        AudioLevel[AudioLevel["min"] = 1] = "min";
        AudioLevel[AudioLevel["medium"] = 2] = "medium";
        AudioLevel[AudioLevel["max"] = 10] = "max";
    })(AudioLevel || (AudioLevel = {}));
    let currentAudio = AudioLevel.medium;
    console.log(currentAudio);
    console.log(AudioLevel);
})();
(() => {
    const error = (message) => {
        if (false) {
            throw new Error(message);
        }
        return 1;
    };
    error("Auxilio");
})();
(() => {
    let nada = undefined;
    console.log(nada);
})();
(() => {
    let avengers = 10;
    let villians = 20;
    if (avengers < villians) {
        console.log("Estamos en problemas");
    }
    else {
        ("Nos salvamos");
    }
    avengers = Number("55A");
    console.log({ avengers });
})();
(() => {
    var _a;
    const batman = 'batman';
    const linternaVerde = "batman";
    const volcanNegro = `Hereo: Volcan negro`;
    console.log(`I'm ${batman}`);
    console.log(batman.toUpperCase());
    console.log(((_a = batman[10]) === null || _a === void 0 ? void 0 : _a.toLocaleUpperCase()) || "no esta presente");
})();
(() => {
    const hero = ['Dr Strange', 100, true];
    hero[0] = 'Ironman';
    hero[1] = 50;
    hero[2] = false;
    console.log(hero);
})();
(() => {
    function callBatman() {
    }
    const a = callBatman();
    const callSuperman = () => {
    };
    console.log(a);
})();
//# sourceMappingURL=main.js.map