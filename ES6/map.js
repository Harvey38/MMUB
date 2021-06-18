let arr =[1,2,3,4,5,6];
// double each el of the array
//new array

//traditional

// let narr=[];
// for(let i=0;i<arr.length;i++)
// {
//     narr[i]=2*arr[i];
// }
// console.log(narr);

//map
//returns a new array
let narr = arr.map(function(el)
{
    // console.log(el);
    return el*el;

});
console.log(narr);
console.log(arr);

