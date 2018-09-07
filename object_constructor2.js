'use strict';
function Car(make, model, year){
    //or var model, year, runs;

    this.carMake = make;
    this.carModel = model;
    this.year = year;

    /*this.runs = function(){
        console.log('the car runs fast');
    };
    */

}
/*var bmw = new Car();
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
*/
var bmw = new Car('BMW', '335i', 2021);
console.log(bmw.carMake);
console.log(bmw.carModel);
console.log(bmw.year);
