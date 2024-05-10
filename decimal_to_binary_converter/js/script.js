const numberInput = document.getElementById("number-input");
const convertBtn = document.getElementById("convert-btn");
const result = document.getElementById("result");

//TODO Continue to update decimalToBinary func with recursion

function decimalToBinary(input) {
    if (input === 0) {
        return "";
    } else {
        return decimalToBinary(Math.floor(input / 2));
    }
};

function checkUserInput() {
    if (!numberInput.value || isNaN(parseInt(numberInput.value))) {
        window.alert("Please provide a decimal number");
        return
    }
    decimalToBinary(parseInt(numberInput.value));
    numberInput.value = '';
};

// add event's leasteners here:
convertBtn.addEventListener('click', checkUserInput);
numberInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        checkUserInput();
    };
});