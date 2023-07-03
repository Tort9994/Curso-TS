(() => {
const addNumbers = (a: number, b: number) => a + b
const greet = (name: string):string => `Hola ${name}`
const saveTheWorld = ():string => "Se salva el mundo"

let myFunction: () => string

// myFunction = 10
// console.log(myFunction)

myFunction = addNumbers

console.log(myFunction(1,2))
console.log(greet("Fernando"))
console.log(saveTheWorld())
})();
