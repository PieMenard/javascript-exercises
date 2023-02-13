const palindromes = function (word) {
    let cleanWord = word.toLowerCase().replace(/[^a-z]/g, "");
    const reversedWord = cleanWord.split('').reverse().join('');
    return cleanWord === reversedWord;
};

// Do not edit below this line
module.exports = palindromes;
