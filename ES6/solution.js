// Q 4)
// const {today:{low:lowToday,high:highToday}} = LOCAL_FORECAST;


// Q3) 
// const squareList = arr => {
//     // Only change code below this line
//     arr = arr.filter(function(el){
//       return el>0 && el%parseInt(el)==0
//     })
//     arr = arr.map(function(fel){
//       return fel*fel;
//     })
//     return arr;
//     // Only change code above this line
//   };
  
//   const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);
//   console.log(squaredIntegers);

//   Q2) 
//   var filteredList;

// // Only change code above this line
// filteredList = watchList.map(function(obj){
//   return {title:obj.Title,rating:obj.imdbRating}
// });
// filteredList = filteredList.filter(function(movie){
//    return Number(movie.rating)>=8.0
// })