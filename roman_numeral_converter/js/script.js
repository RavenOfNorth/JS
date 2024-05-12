const inputNumber = document.getElementById("number-input").value;
const converterBtn = document.getElementById("converter-btn");
const result = document.getElementById("result");

const isValidInput = () => {

    if (inputInt === '') {
        result.textContent = 'Please enter a valid number';
    } else {
        const inputInt = parseInt(inputNumber);

        if (inputInt === -1) {
            result.textContent = 'Please enter a number greater than or equal to 1';
        } else if (number >= 4000) {
            result.textContent = 'Please enter a number less than or equal to 3999';
        } else {
            return // TODO update it later!
        }
    }
};

const convertDecimalToRoman = (num) => {
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