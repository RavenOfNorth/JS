const numberInput = document.getElementById("number-input");
const convertBtn = document.getElementById("convert-btn");
const result = document.getElementById("result");

//TODO Continue to update decimalToBinary func with recursion

const countDownAndUp = (number) =>{
    console.log(number);
    
    if (number === 0) {
        return
    } else {
        countDownAndUp(number - 1);
    };
};

// TODO delete it later!!!
countDownAndUp(3);

function decimalToBinary(input) {
    let binary = "";
    result.innerText = binary;

    if (input === 0) {
        binary = "0";
    }

    while (input > 0) {
        input = Math.floor(input / 2);
        binary = (input % 2) + binary;
    };
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