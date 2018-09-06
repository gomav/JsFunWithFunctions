'use strict';
//a function literal(definition expression); declaring the function.
var add = function(number1, number2){
    var sum = number1 + number2;
    console.log(sum);
}(15,5);
