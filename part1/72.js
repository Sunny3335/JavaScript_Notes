// console.log(this) // return the window object. this is the global object of javascript.
// this===window
// console.log(window);
"use strict";

// ager "use strict" use nhi krenge to this keyword window object ko print kr dega because this is belong to the window object. but hm strict mode use krenge to window object print ni hoga.

function myFunc(){

    console.log(this);
}

// window.myFunc();
myFunc();