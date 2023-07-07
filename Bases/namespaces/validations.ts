namespace Validations {
    export const validateText = (text: string): boolean => {
        return (text.length > 3) ? true : false
    }
    const validateDay = (myDate: Date): boolean => {
        return (isNaN(myDate.valueOf())) ? true : false
    }
}

console.log(Validations.validateText("Fer"))