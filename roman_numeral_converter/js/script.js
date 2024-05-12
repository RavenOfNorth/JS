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