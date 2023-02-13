const fibonacci = function(x) {
    //generate fibonacci array
    if (x < 0 )
        return "OOPS";
    let fibo = [0,1];
    for (let c=2;c<=x;c++)
        fibo[c]=fibo[c-2] + fibo[c-1];
    return fibo[x];
};

// Do not edit below this line
module.exports = fibonacci;
