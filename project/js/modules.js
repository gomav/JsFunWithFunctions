'use strict';
var imageModule = (function(){

    return {
        //image object that the code will be looping through
        carImages: {

            car1: 'http://emaginas.com',
            car2: 'http://emaginas.com',
            car3: 'http://emaginas.com',
            car4: 'http://emaginas.com',
            car5: 'http://emaginas.com',
            car6: 'http://emaginas.com',
            car7: 'http://emaginas.com',
            car8: 'http://emaginas.com'
        },

        //the method below inserts the images by looping
        insertImages : function(){

            var myArguments = '.' + arguments[0];

            var imagesContainer = document.querySelectorAll(myArguments);

            var output = "<div>";

            for(var key in this.carImages){
                //html, bootstrap, markup. Note make sure that single and double
                //quotes are properly accounted for; also check spelling!
                output += '<div class="col-lg-3 col-md-4 col-xs-6 thumb">';

                output += '<a class="thumbnail" href="'+this.carImages[key]+'">';

                output += '<img class="img-responsive" src="images/'+key+'.jpg'+'" alt=""> ';

                output += '</a>';

                output += '</div>';
                //console.log(key); or
                //console.log(output);
            }

            for(var i = 0; i < imagesContainer.length; i++){

                imagesContainer[i].innerHTML = output;
            }

            output += '</div>';
        }
    };

})();
