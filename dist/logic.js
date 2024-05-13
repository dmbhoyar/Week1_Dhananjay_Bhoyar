"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.secretHandshake = exports.isLeapYear = exports.concatenateStrings = exports.splitString = void 0;
function splitString(inputString) {
    return inputString.split('_').join(' ');
}
exports.splitString = splitString;
function concatenateStrings(param1, param2) {
    return param1 + param2;
}
exports.concatenateStrings = concatenateStrings;
function isLeapYear(year) {
    if (year % 400 === 0) {
        return true;
    }
    else if (year % 100 === 0) {
        return false;
    }
    else if (year % 4 === 0) {
        return true;
    }
    else {
        return false;
    }
}
exports.isLeapYear = isLeapYear;
function secretHandshake(decimalNumber) {
    if (isNaN(decimalNumber) || !Number.isInteger(decimalNumber) || decimalNumber < 0) {
        throw new Error('Invalid input. Please provide a non-negative integer.');
    }
    const binaryString = decimalNumber.toString(2);
    const actions = ['wink', 'double blink', 'close your eyes', 'jump'];
    const handshake = [];
    for (let i = binaryString.length - 1, j = 0; i >= 0; i--, j++) {
        if (binaryString[i] === '1') {
            if (j === 4) {
                handshake.reverse();
            }
            else {
                handshake.push(actions[j]);
            }
        }
    }
    return handshake;
}
exports.secretHandshake = secretHandshake;
//# sourceMappingURL=logic.js.map