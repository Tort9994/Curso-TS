(() => {
    const fullName = (firstName: string, lastname: string):string => {
        if (!firstName) {
            throw new Error("nombre requerido")
        }
        return `Hola mi nombre es ${firstName} ${lastname}`
    }

    const persona = fullName("Fania", "torres")

    console.log(persona)
})();
