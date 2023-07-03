"use strict";
(() => {
    const hero = "Flash";
    function returnName() {
        return hero;
    }
    function activateBatisignal() {
        return "Batiseñal activada";
    }
    console.log(typeof activateBatisignal);
    const heroName = returnName();
})();
