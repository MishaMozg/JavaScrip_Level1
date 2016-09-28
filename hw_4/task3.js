//задача 3

function isEven(number) {
    if ( number != Math.round(number))
        return "число не целое";
    if (number < 0)
        number = number*(-1);
    if (number == 0)
        return true;
    if (number == 1)
        return false;
    number = number - 2;
    return isEven(number);
}

console.log(isEven(543)); //false
console.log(isEven(345)); //false
console.log(isEven(-300)); //true
console.log(isEven(-966)); //true
console.log(isEven(0.1));  //число не целое
console.log(isEven(-0.5));  //число не целое

