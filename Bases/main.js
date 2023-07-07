"use strict";
var Validations;
(function (Validations) {
    Validations.validateText = (text) => {
        return (text.length > 3) ? true : false;
    };
    const validateDay = (myDate) => {
        return (isNaN(myDate.valueOf())) ? true : false;
    };
})(Validations || (Validations = {}));
console.log(Validations.validateText("Fer"));
//# sourceMappingURL=main.js.map