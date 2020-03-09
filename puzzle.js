function setCharAt(str, index, chr) {
    if (index > str.length - 1) return str;
    return str.substr(0, index) + chr + str.substr(index + 1);
}

function getRandomChar(riddle, index) {
    var randomChar
    do {
        randomChar = Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 1);
    } while ((index > 0 && riddle[index - 1] == randomChar) || (index < riddle.length - 1 && riddle[index + 1] == randomChar))

    return randomChar
}

function solution(riddle) {
    let newRiddle = riddle;
    for (let i = 0; i < riddle.length; i++) {
        if (riddle[i] == '?') {
            riddle = setCharAt(riddle, i, getRandomChar(riddle, i))
        }
    }
    return riddle
}