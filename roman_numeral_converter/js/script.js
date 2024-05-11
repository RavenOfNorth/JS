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
