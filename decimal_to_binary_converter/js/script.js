const numberInput = document.getElementById("number-input");
const convertBtn = document.getElementById("convert-btn");
const result = document.getElementById("result");

function decimalToBinary(input) {

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