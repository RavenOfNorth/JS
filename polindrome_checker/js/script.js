const getValue = document.getElementById("text-input");

function isInvalidInputChecker(str) {
    const regex = /\d+e\d+/i;
    return str.match(regex);
}

function isPolindromeChecker(str) {

    // Take str element to lowercase and delete spaces
    str = str.toLowerCase().replace(/\s/g, '');

    // Reverse str element
    const reversedStr = str.split("").reverse().join('');
    return str === reversedStr;
}

console.log(isPolindromeChecker("abbac"));
