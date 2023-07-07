
import { genericFunction, printObject } from "../generics/generics";

import { Villan, Hero } from "../interfaces";

// printObject( new Date())
// printObject(12312)
// printObject("")

// console.log(genericFunction(3.2312).toFixed(2))
// console.log(genericFunction("").toLowerCase())
// console.log(genericFunction(new Date).getTime())

const deadPool = {
    name: "DeadPool",
    realName: "Wade Winston",
    dangerLevel: 130
}
console.log(genericFunction<Hero>(deadPool).name)