const {sum, capitalize, reverseString, calculator, caesarCipher, analyzeArray} = require('./script')


test('Adds 1 + 2 to equal 3', () => {
    expect(sum(1,2)).toBe(3);
})

test('capitals', () => {
    expect(capitalize("xd")).toMatch(/Xd/)
    expect(capitalize("Lol")).toMatch(/Lol/)

})

test('reverseStrings' , () => {
    expect(reverseString("xd")).toMatch(/dx/)
    expect(reverseString("Penis")).toMatch(/sineP/)
    expect(reverseString("lol")).toMatch(/lol/)

})

test('calculator', () => {
    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    let randomint1 = getRandomInt(1, 100)
    let randomint2 = getRandomInt(1, 100)
    let add = randomint1 + randomint2
    let minus = randomint1 - randomint2
    let divide = randomint1 / randomint2
    expect(calculator.add(randomint1, randomint2)).toBe(add)
    expect(calculator.minus(randomint1, randomint2)).toBe(minus)
    expect(calculator.divide(randomint1, randomint2)).toBe(divide)
})


test('Caseser Cipher', () => {
    expect(caesarCipher("ab c", 3)).toMatch(/de f/)
    expect(caesarCipher("HeLLo, World!", 3)).toMatch (/KhOOr, Zruog!/)
    expect(caesarCipher("xYz", 3)).toMatch (/aBc/)
})



test('list', () => {
    function randomListGenerator() {
        function getRandomInt(min, max) {
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }
        let listLength = getRandomInt(0, 10)
        let list = []
        for(let i = 0; i < listLength; i++) {
            let randomNumber = getRandomInt(0, 100)
            list.push(randomNumber)
        }
        
        return list
    }
    function minCheck(list, minimum) {
        for(let i = 0; i < list.length; i++) {
            if(list[i] < minimum) {
                return false
            }
        }
        return true
    }
    function maxCheck(list, max) {
        for(let i = 0; i < list.length; i++) {
            if(list[i] > max) {
                return false
            }
        }
        return true
    }
    let list = randomListGenerator()
    let list2 = [1,8,3,4,2,6]
    expect(analyzeArray(list2).average).toBe(4)
    expect(minCheck(list, analyzeArray(list).min)).toBe(true)
    expect(maxCheck(list, analyzeArray(list).max)).toBe(true)

})