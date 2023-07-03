(() => {
    const fullName = (firstName: string, lastname: string, upper: boolean = false):string => {
        if (upper) {
            return `Hola mi nombre es ${firstName} ${lastname || "----"}`.toUpperCase()
        }
        else{
            return `Hola mi nombre es ${firstName} ${lastname}`
        }
    }

    const persona = fullName("Fania", "torres", true)

    console.log(persona)
})();
