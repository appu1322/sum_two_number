const sumNumbers = (...num) => {
    if (num.length < 2) {
        return new Error("At least 2 arguments are required");
    }

    const isNotANumber = num.find(n => typeof n !== "number");
    if (isNotANumber) {
        return new Error("Invalid Number");
    }

    const sum = num.reduce((acu, cur) => {
        return acu + cur;
    }, 0);

    return sum;
}

const sum = sumNumbers(12, 9, 8);
console.log({ sum });
