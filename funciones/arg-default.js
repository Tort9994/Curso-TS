"use strict";
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
//# sourceMappingURL=arg-default.js.map