function isEven(param) {
    if (param % 2 == 0 ) {
        return true;
    } else if (param % 2 == 1) {
        return false;
    } else {
        return isEven(param - 2);
    }
}

console.log(isEven(-1));