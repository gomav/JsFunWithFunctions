'use strict';
/*passing string values and returning length
var add = function(){
    return arguments.length;
};
//adding more strings to the array yields the length property in the console log
//in browser
console.log(add('hello', 'another string', '...and another'));
*/

//passing array data and using the add property with a For loop
var add = function(){
    var sum = 0;
    for(var i = 0; i < arguments.length; i++){
        sum += arguments[i];
    }

    return sum;
};

console.log(add(10, 10, 1000, 344, 500, 678, 6798988));
