"use strict";
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
