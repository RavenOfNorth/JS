const getValue = document.getElementById("text-input");

// TODO: connect that funcs to index.html

function isInvalidInputChecker(str) {
    if (str.length < 1) {
        alert("Please input a value");
    } else {
        return;
    }
}

function isPolindromeChecker(str) {

    // Take str element to lowercase and delete spaces
    str = str.toLowerCase().replace(/\s/g, '');

    // Reverse str element
    const reversedStr = str.split("").reverse().join('');
    return str === reversedStr;
}

function getResult (value) {
    if (value === true) {
        console.log(`${getValue} is a palindrome`);
    } else {
        console.log(`${getValue} isn't a palindrome`);
    }
}

// console.log(isPolindromeChecker("abbac"));

getResult(isPolindromeChecker("abba"));
