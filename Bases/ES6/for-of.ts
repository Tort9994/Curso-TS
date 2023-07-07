(() => {
    type Avenger = {
        name: string,
        weapon: string
    }

    const ironman: Avenger = {
        name: "Ironman",
        weapon: "Armorsuit"

    }
        const capAmerica: Avenger = {
        name: "Capitan america",
        weapon: "escudo de bibranio"

    }
        const deadPool: Avenger = {
        name: "deadPool",
        weapon: "katanas"
    }

    const avengers: Avenger[] = [ironman, deadPool, capAmerica]


    for (const avenger of avengers) {
        console.log(avenger)
    }
})();
