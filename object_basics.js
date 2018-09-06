'use strict';
//creating an object, invoking it, and adding a function within an object
var process = {
    fullName: "Manny Navarro",
    displayName : function(){
        console.log(this.fullName);
    },
    //more objects
    objectD23: [{
        cars: 'Honda',

    }]

};
//calling the property using the value of the function assigned to it
//process.displayName();

//another way of calling the property
console.log(process.fullName);
