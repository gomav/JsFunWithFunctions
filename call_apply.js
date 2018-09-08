'use strict';
var run = function(speed){
    console.log(speed);
    console.log(this.firstSpeed);
};
var speedUpgrade = {
    firstSpeed: '50 more miles per hour',
    secondSpeed: '200 miles an hour'
};
//calling object and passing value
run.call(speedUpgrade, speedUpgrade.secondSpeed);
//applying object and passing value *needs to be an array or error
run.apply(speedUpgrade, ['500 miles an hour']);

//run('100 miles an hour');
