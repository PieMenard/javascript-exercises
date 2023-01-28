const removeFromArray = function(array,...args) 
{
    const newArray = [];

    //this function fills 'newArray' with contents from 'array'
    //but only with elements that are not on 'args' 
    function checkAndPush(item)
    {
        if (!args.includes(item))
           newArray.push(item);
    }

    array.forEach(element => checkAndPush(element));
    
    return newArray;

};

// Do not edit below this line
module.exports = removeFromArray;
