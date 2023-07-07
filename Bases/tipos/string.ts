(()=> {
const batman: string = 'batman'
const linternaVerde: string = "batman"
const volcanNegro: string = `Hereo: Volcan negro`

console.log(`I'm ${batman}`)
console.log(batman.toUpperCase())

console.log(batman[10]?.toLocaleUpperCase()|| "no esta presente")
})()