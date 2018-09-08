'use strict';
//standard way of accessing/calling/using a function
/*function run(){
    console.log('foo');
};
run();
*/
//using anonymous closures, the function is wrapped in a parenthesis to run - a
//self-executed function
(function(){
    console.log('foo');
})();
