"use strict";
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
//# sourceMappingURL=arg-required.js.map