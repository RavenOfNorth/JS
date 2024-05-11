const numberInput = document.getElementById("number-input");
const convertBtn = document.getElementById("convert-btn");
const result = document.getElementById("result");

// Create new Map
const RomanNums =  new Map();
RomanNums.set(1, "I");
RomanNums.set(4, "IV");
RomanNums.set(5, "V");
RomanNums.set(6, "VI");
RomanNums.set(9, "IX");
RomanNums.set(10, "X");
RomanNums.set(40, "XL");
RomanNums.set(50, "L");
RomanNums.set(90, "XC");
RomanNums.set(100, "C");
RomanNums.set(400, "CD");
RomanNums.set(500, "D");
RomanNums.set(900, "CM");
RomanNums.set(1000, "M");

const isValidInput = () => {
    const inputInt = parseInt(numberInput);
    if (inputInt < 0) { 
        result.textContent = "Please enter a number greater than or equal to 1"
    } else if (inputInt === "") { 
        result.textContent = "Please enter a valid number"
    } else if (inputInt > 4000) { 
        result.textContent = "Please enter a number less than or equal to 3999"
    } else {
        console.log ("Input is valid!") // TODO: DELETE IT AFTER CHECKING!!!
    }
}
