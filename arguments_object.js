'use strict';
var add = function(){
    return arguments.length;
};
//adding more strings to the array yields the length property in the console log
//in browser
console.log(add('hello', 'another string', '...and another'));
