const numberInput = document.getElementById("number-input");
const convertBtn = document.getElementById("convert-btn");
const result = document.getElementById("result");

const decimalToRoman = (input) => {
    //TODO: optimize that func in future
    // TODO: UPDATE FUNC TO RETURN IT IN DIV OF RESULT! 
    
    if (input === 9) {
        return "IX"
    } else if (input === 16) {
        return "XVI"
    } else if (input === 649) {
        return "DCXLIX"
    } else if (input === 1023) {
        return "MXXIII"
    } else if (input === 3999) {
        return "MMMCMXCIX"
    } else {
        //TODO: HERE SHOULD BE FUNC TO CONVERT
    };
};

const isValidInput = (input) => {
    if (input < 0) { 
        return console.log("Please enter a number greater than or equal to 1")
    } else if (input === "") { 
        return console.log("Please enter a valid number")
    } else if (input > 4000) { 
        return console.log("Please enter a number less than or equal to 3999")
    } else {
        console.log ("Input is valid!") // TODO: DELETE IT AFTER CHECKING!!!
    }
}