"use strict";
(() => {
    let myCustomVariable = "Fernando";
    console.log(typeof myCustomVariable);
    myCustomVariable = 20;
    console.log(typeof myCustomVariable);
    myCustomVariable = { name: "Bruce", age: 20, powers: [""] },
        console.log(typeof myCustomVariable);
})();
