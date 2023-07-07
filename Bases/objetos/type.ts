(() => {
    type Hero = {
        name: string,
        age?: number,
        powers: string[],
        getName?: ()=> string
    }

let flash:Hero = {
    name: "Barry Allen",
    // age: 24,
    powers: ["super velocidad", "viajar en el tiempo"]
}

let superMan: Hero = {
    name: "Clark Ken",
    age: 60,
    powers: ["Super Fuerza"],
    getName(){
        return this.name
    }
}
})();
