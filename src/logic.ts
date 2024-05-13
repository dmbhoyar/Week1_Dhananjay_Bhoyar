export function splitString(inputString: string): string {
    return inputString.split('_').join(' ');
}

export function concatenateStrings(param1: string, param2: string): string {
    return param1 + param2;
}

export function isLeapYear(year: number): boolean {
    if (year % 400 === 0) {
        return true;
    } else if (year % 100 === 0) {
        return false;
    } else if (year % 4 === 0) {
        return true;
    } else {
        return false;
    }
}

export function secretHandshake(decimalNumber: number): string[] {
    if (isNaN(decimalNumber) || !Number.isInteger(decimalNumber) || decimalNumber < 0) {
        throw new Error('Invalid input. Please provide a non-negative integer.');
    }

    const binaryString = decimalNumber.toString(2);
    const actions = ['wink', 'double blink', 'close your eyes', 'jump'];
    const handshake: string[] = [];

    for (let i = binaryString.length - 1, j = 0; i >= 0; i--, j++) {
        if (binaryString[i] === '1') {
            if (j === 4) {
                handshake.reverse();
            } else {
                handshake.push(actions[j]);
            }
        }
    }

    return handshake;
}
