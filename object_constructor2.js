'use strict';
function Car(){
    var model, year, runs;

    this.model = "335I";

    this.runs = function(){
        console.log('the car runs fast');
    };


}
var bmw = new Car();
bmw.model = '335I';
bmw.year = '1998';
console.log(bmw.model);
console.log(bmw.year);
console.log(bmw.runs());
