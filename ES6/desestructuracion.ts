(() => {

    type Heroes = {
        nick: string,
        ironman: string,
        vision: string,
        activo: boolean,
        poder: number
    }


 const avengers = {
    nick: "Samuel L. Jackson",
    ironman: "Robert Downy Jr",
    vision: "Paul Bettany",
    activo: true,
    poder: 1500.12313123
 }


 const mostrarHero = ({vision, ...rest}: Heroes): void => {
    console.log(vision, rest)
 }

 mostrarHero(avengers)

//  const {poder, vision} = avengers
//  console.log(poder.toFixed(2), vision.toUpperCase())

const avengersArr: [string, boolean, number] = ["Cap. America", true, 23132123]

const [ , ironman, ] = avengersArr
console.log(ironman)
})();
