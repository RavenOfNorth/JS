const getValue = document.getElementById("text-input");

function isInvalidInputChecker(str) {
    const regex = /\d+e\d+/i;
    return str.match(regex);
}

// Create Arrays for checking

function createArrayByString (str) {
    const valueArray = str.split("");
    console.log(valueArray);
}

function createArrayByStringReverse (str) {
    const valueArrayReverse = str.split("").reverse();
    console.log(valueArrayReverse);
}

/*
    if (getValueArray === getValueArrayReverse) {
        const result = `${getValue} is polindrome!`;
        return result;
    } else {
        const result = `${getValue} isn't polindrome!`;
        return result;
    }
*/

// console.log(isPalindromeChecker("abba"));
createArrayByString("abba");
createArrayByStringReverse("sukablyat");