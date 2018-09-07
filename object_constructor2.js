'use strict';
function Car(make, model, year, runs){
    //or var model, year, runs;

    this.model = "335I";

    this.runs = function(){
        console.log('the car runs fast');
    };


}
var bmw = new Car();
bmw.make = 'BeeMer';
bmw.model = '335I';
bmw.year = '1998';
console.log(bmw.make);
console.log(bmw.model);
console.log(bmw.year);
console.log(bmw.runs());
var mercedes = new Car();
mercedes.make = 'Merc';
mercedes.model = '225I';
mercedes.year = '2020';
console.log(mercedes.make);
console.log(mercedes.model);
console.log(mercedes.year);
console.log(mercedes.runs());
