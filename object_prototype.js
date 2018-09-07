'use strict';
//adding function to object by using prototype
function speed(miles){
    console.log(miles);
}


function Car(model, year){
    this.carModel = model;
    this.year = year;
}
//extending the function of an object by using prototype
Car.prototype.speed = speed;

var bmw = new Car('335i', 2021);
console.log(bmw.carModel);
console.log(bmw.year);
//passing the value of 'speed' to function using prototype
bmw.speed('180');
