// It's work! :D

const converterBtn = document.getElementById("convert-btn");
const result = document.getElementById("output");

function isValidInput() {
    const inputNumber = document.getElementById("number-input").value;

    if (inputNumber === '') {
        result.textContent = 'Please enter a valid number';
    } else {
        const inputInt = parseInt(inputNumber);

        if (inputInt === -1) {
            result.textContent = 'Please enter a number greater than or equal to 1';
        } else if (inputInt >= 4000) {
            result.textContent = 'Please enter a number less than or equal to 3999';
        } else {
            const romanNum = convertDecimalToRoman(inputInt);
            result.textContent = romanNum;
        }
    }
};
function convertDecimalToRoman(num) {
    const romanNums = {
        M: 1000,
        CM: 900,
        D: 500,
        CD: 400,
        C: 100,
        XC: 90,
        L: 50,
        XL: 40,
        X: 10,
        IX: 9,
        V: 5,
        IV: 4,
        I: 1
    };

    let convert_result = "";

    for (let key in romanNums) {
        while (num >= romanNums[key]) {
            convert_result += key;
            num -= romanNums[key];
        }
    }

    return convert_result;
}

converterBtn.addEventListener("click", isValidInput);