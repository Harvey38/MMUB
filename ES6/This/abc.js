// this is a keyword that particularly refers to an object
// the value of this would change according to the context in which it is being refereed to
console.log(this);
//window

// we need this for only function calling

function fn()
{
    'use strict'
    console.log(this);
    console.log(`Hi my name is ${this.person}`);
}

//normal call
fn();
//in normal call the value of this is passed as window object only

let obj ={
    person:'Tushar',
    func:fn
}
// function call with object
// obj.func();
// In this case my this is equal to the object through which the fn is called

let ret = obj.func;
// ret();
// In this case the this again passed as the window object.