// class abc{
//     constructor(person)
//     {
//         this.person=person;
//         this.age = 25;
//     }
//     sayHi(){
//         console.log('Hello');
//         console.log(this.person);
//     }
// }

// let obj = new abc('Alexander');
// // let obj2 = new abc('Tushar');
// console.log(obj);
// // console.log(obj2);
// // let fn =obj.sayHi;
// // fn();
// //problem
// let btn = document.querySelector('button');
// btn.addEventListener('click',obj.sayHi);
///////////////////////////////////////////Bind

class abc{
    constructor(person)
    {
        this.person=person;
        this.age = 25;
        this.sayHi= this.sayHi.bind(this);
    }
    sayHi(){
        console.log('Hello');
        console.log(this.person);
    }
}

let obj = new abc('Alexander');
// let obj2 = new abc('Tushar');
console.log(obj);
// console.log(obj2);
// let fn =obj.sayHi;
// fn();
//problem
let btn = document.querySelector('button');
btn.addEventListener('click',obj.sayHi);

///////////////////////////////////////////Arrow Fn

class abc{
    constructor(person)
    {
        this.person=person;
        this.age = 25;
    }
    sayHi=()=>{
        console.log('Hello');
        console.log(this.person);
    }
}

// let obj = new abc('Alexander');
let obj2 = new abc('Tushar');
console.log(obj2);
// console.log(obj2);
// let fn =obj.sayHi;
// fn();
//problem
let btn = document.querySelector('button');
btn.addEventListener('click',obj2.sayHi);