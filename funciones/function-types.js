"use strict";
(() => {
    const addNumbers = (a, b) => a + b;
    const greet = (name) => `Hola ${name}`;
    const saveTheWorld = () => "Se salva el mundo";
    let myFunction;
    // myFunction = 10
    // console.log(myFunction)
    myFunction = addNumbers;
    console.log(myFunction(1, 2));
    console.log(greet("Fernando"));
    console.log(saveTheWorld());
})();