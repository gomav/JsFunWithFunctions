'use strict';
var Car = function(){

    var model, year;
    return console.log(this);
};

var bmw = new Car();

bmw.model = '335I';

bmw.year = '1998';

console.log(bmw.model);

console.log(bmw.year);

var mercedes = new Car();

mercedes.model = 'c250';

mercedes.year ='2010';

console.log(mercedes.model);

console.log(mercedes.year);
