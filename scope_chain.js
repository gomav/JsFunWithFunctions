'use strict';
function parentProcess(){

    var speed = '180 miles per hour';
    function childProcess(){
        //var speed = '250 miles an hour';
        console.log('this car is running ' + speed);
    }

    childProcess();
}

parentProcess();

//when the variable speed is commented out, Js will look at the parent for the
//information; in this case with the funciton is executed, instead of 250 miles
//hour the result is 180, again, because the childProcess was not found and by
//default Js defaults to the parent...Scope Chain :) 
