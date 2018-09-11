'use strict';
function run(){
    //note by declaring a variable, it can only be accessed locally - i.e., if
    //console.log is used (outside of function) to access variable speed, the
    //variable will not be accessbile and message 'uncaught reference error,
    //speed is not defined' will be displayed. if variable is not defined, it
    //can become global, which is not good.
    //speed = '100 miles';
    var speed = '100 miles';
    return speed;
}
console.log(run());
//run();
//console.log(speed);
