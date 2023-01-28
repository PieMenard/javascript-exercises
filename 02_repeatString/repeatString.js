const repeatString = function(string,num) {
    let result = string;
    if (num < 0)
        return 'ERROR';
    if (num == 0)
        return '';
    for (let c = 1; c < num; c++)
    {
        result = result + string;
    }
    return result;
};

// Do not edit below this line
module.exports = repeatString;
