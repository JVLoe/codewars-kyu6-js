// Take a Number And Sum Its Digits Raised To The Consecutive Powers And ....¡Eureka!!
function sumDigPow(a, b) {
    let eureka = [];
    for (i = a; i <= b; i++){
        let digit = String(i).split('');
        if (i === digit.reduce(function(accumulator, currentValue, currentIndex){
            return accumulator + currentValue**(currentIndex + 1)
        }, 0))
            eureka.push(i);
    }
    return eureka
}

// Unique In Order
const uniqueInOrder = iterable => {
    let strArr = Array.isArray(iterable) ? iterable : iterable.split('');
    let unique = strArr.filter((letter, i) => {
        return strArr[i] != strArr[i+1];
    })
    return unique;
}

const uniqueInOrder1 = iterable => [...iterable].filter((a, i) => a !== iterable[i-1])
