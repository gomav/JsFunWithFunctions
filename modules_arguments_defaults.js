'use strict';
var run = (function(){

    //var speed = '199 miles per hour';

    var defaults = {
        topSpeed: '250 miles an hour'
    };
    return {
        speed: function(){
            //using the arguments below, one can access the data being passed
            //from the script in the html code, place in the body.
            //use short circuit evaluation to create a default and avoid
            //undefined errors
            var allArguments = arguments[0] || '';
            var myStatements = allArguments.topSpeed || defaults.topSpeed;//'30 miles an hour';
            console.log(myStatements);//(arguments[0].topSpeed);
        }
    };

})(); //anonymous, self executing function.
