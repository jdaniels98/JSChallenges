/*
Return the number of vowels in a string
*/

const countVowel = (str) => {
    const count = str.match(/[aeiou]/g).length
    return count
}

module.exports = {
    countVowel
}