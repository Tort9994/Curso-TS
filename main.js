"use strict";
(() => {
    class Mutante {
        constructor(name, realName) {
            this.name = name;
            this.realName = realName;
        }
    }
    class Xmen extends Mutante {
        salvarMundo() {
            return "Mundo Salvado";
        }
    }
    class Villian extends Mutante {
        conquistarMundo() {
            return "Mundo conquistado";
        }
    }
    const wolverine = new Xmen("Wolverine", "Logan");
    const magneto = new Villian("Magneto", "Magnus");
    const printName = (character) => {
        console.log(character.realName);
    };
    printName(wolverine);
})();
(() => {
    class Avenger {
        static getAveage() {
            return this.name;
        }
        constructor(name, t, r, ...rest) {
            this.name = name;
            this.t = t;
            this.r = r;
        }
        bio() {
            return `${this.name} ${this.t}`;
        }
    }
    const antman = new Avenger("takemichi", " tokio manji", "scott", 123);
})();
(() => {
    class Avenger {
        constructor(name, realName) {
            this.name = name;
            this.realName = realName;
            console.log("Constructor Avenger llamado");
        }
        getFullName() {
            return `${this.name} ${this.realName}`;
        }
    }
    class XmenAvenger extends Avenger {
        constructor(name, realName, villian) {
            super(name, realName);
        }
        getFullNameFromXmen() {
            super.getFullName();
        }
        get fullName() {
            return `${this.name} - ${this.realName}`;
        }
        set setFullName(v) {
            if (this.name.length < 3) {
                throw new Error('El nombre debe de ser mayor a tres letres');
            }
            this.name = v;
        }
    }
    const Wolverine = new XmenAvenger("", "", false);
})();
(() => {
    class Apocalipsis {
        constructor(name) {
            this.name = name;
        }
        static callApocalipsis() {
            if (!Apocalipsis.instance) {
                Apocalipsis.instance = new Apocalipsis("Soy apocalipsis");
            }
            return Apocalipsis.instance;
        }
        changeName(newName) {
            this.name = newName;
        }
    }
    const apocalipsis1 = Apocalipsis.callApocalipsis();
    apocalipsis1.changeName("Xavier");
})();
//# sourceMappingURL=main.js.map