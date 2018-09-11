'use strict';
var parentProcess = function (){

    //var velocity = '199 miles per hour';

    //var childProcess = function(){
        console.log('this car is running ' + velocity);
        var velocity = '199 miles per hour';
    //};
    //childProcess();
};
parentProcess();


//in essence, Js processes code from top to bottom, when it sees the declared
//variable, it hoists the declared variable but without the value attached a
//message of undefined will be displayed.
