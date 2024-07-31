function sum(a,b) {
    return a + b;
}


function capitalize(string) {
     return string.replace(string[0], string[0].toUpperCase())
    
}

function reverseString(string) {
  return string.split('').reverse().join('')
}

const calculator = {
    add(x,y) {
        return x + y
    },
    minus(x,y) {
        return x - y
    },
    divide(x,y) {
        return x / y
    },
    multiply(x,y) {
        return x * y
    }

}

function caesarCipher(string, shiftFactor) {
    const isUpperCase = (letter) => letter === letter.toUpperCase(), alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('')
    string = string.split('')
    for(let i = 0; i < string.length; i++) {
        let letter = string[i].toLowerCase()
        if(alphabet.includes(letter)) {
            let index = alphabet.indexOf(letter) + shiftFactor
            if(index > alphabet.length - 1) {index = index - alphabet.length} 
            string[i] = isUpperCase(string[i]) 
            ? alphabet[index].toUpperCase() 
            : alphabet[index]
        }
    }
    return string.join('')
}


function analyzeArray(array) {
    array = array.sort((a,b) => {return a - b})
    const average = Math.floor(array.reduce((a, b) => a + b) / array.length)
    return {
        min: array[0],
        max: array[array.length -1],
        average: array[array.indexOf(average)],
        length: array.length
    }
}


//


module.exports = {
    sum,
    capitalize,
    reverseString,
    calculator,
    caesarCipher,
    analyzeArray

}