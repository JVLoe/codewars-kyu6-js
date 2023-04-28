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

// Your order, please
function order(words){
    if (words.length == 0){
        return words;
    }
    let wordsarr = words.split(' ');
    let indarr = words.match(/\d/g);
    let neword = [];
    for (let i = 1; i <= indarr.length; i++){
        let ind = indarr.indexOf(i.toString())
        neword.push(wordsarr[ind])
    }
    return neword.join(' ')
}

function order1(words){
    return words.split(' ').sort(function(a, b){
        return a.match(/\d/) - b.match(/\d/);
    }).join(' ');
}

function order2(words) {
    return words.split(' ').sort((wordA, wordB) => wordA.match(/\d+/) > wordB.match(/\d+/)).join(' ')
}

// The Supermarket Queue
function queueTime(customers, n) {
    let w = new Array(n).fill(0);
    for (let t of customers) {
        let idx = w.indexOf(Math.min(...w));
        w[idx] += t;

    }
    return Math.max(...w);
}