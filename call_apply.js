'use strict';
var run = function(speed){
    console.log(speed);
    console.log(this.firstSpeed);
};
var speedUpgrade = {
    firstSpeed: '50 more miles per hour',
    secondSpeed: '200 miles an hour'
};
run.call(speedUpgrade, speedUpgrade.secondSpeed);


//run('100 miles an hour');
