"use strict";
function Rectangle(options) {
    let width = options.width;
    let length = options.length;
    console.log(width * length);
}
/**The way of called is show error,beacuse Rectangle function get two property as perameter
 via options. we can't pass over argument. */
// Rectangle({width:20, length:5, height : 2}); 
let _3dOptions = {
    width: 20,
    length: 5,
    height: 2
};
/**The way of called is works fine, beacuse here sending an refference object via peremeter.
   function does not affect, how many properties holds the refference object. */
Rectangle(_3dOptions);
