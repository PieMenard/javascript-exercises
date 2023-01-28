const reverseString = function(string) {
    let reversedString = "";
    for (let c = string.length - 1; c >= 0; c--)
    {
        reversedString += string[c];
    }
    return reversedString;
};

// Do not edit below this line
module.exports = reverseString;
