// function fn()
// {
//     console.log(`Hi my name is ${this.person}`);
//     function abc()
//     {
//         console.log(`Hi my name is ${this.person}`);
//     }
//     abc();
// }

// let obj = {
//     person:'Tushar',
//     func:fn
// };
// obj.func();
//////////////////////////////////solution-1(Bind)
//  Bind is a function that is defined on other functions
//  let ret = fn.bind(argument)
// bind returns a new function whose definition is similar to the function on which it is called
//  and whose this is explicitly set equal to the argument that is passed
function fn()
{
    console.log(`Hi my name is ${this.person}`);
    function abc()
    {
        console.log(`Hi my name is ${this.person}`);
    }
    let ret = abc.bind(this);
    return ret;
}
let obj = {
    person:'Tushar',
    func:fn
};
obj.func();
let rf = obj.func();
rf();


// let ret = obj.func;
// ret();
//////////////////soln 2 Arrow fn