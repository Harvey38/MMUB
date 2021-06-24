import React, { Component } from 'react'
import { getMovies } from './getMovies';
export default class Movies extends Component {
    constructor()
    {
        super();
        this.state={
            movies:getMovies()
        }
    }
    render() {
        return (
            //JSX
            <div className='container'>
           <div className='row'>
               <div className='col-3'>
                   Hello
               </div>
               <div className='col-9'>
                   <table className="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Title</th>
      <th scope="col">Genre</th>
      <th scope="col">Stock</th>
      <th scope="col">Rate</th>
      <th></th>
    </tr>
  </thead>
  <tbody>
   {
       this.state.movies.map((movieObj)=>{
           return(
               <tr scope='row' key={movieObj._id} >
                   <td></td>
                   <td>{movieObj.title}</td>
                   <td>{movieObj.genre.name}</td>
                   <td>{movieObj.numberInStock}</td>
                   <td>{movieObj.dailyRentalRate}</td>
                   <td><button type="button" className="btn btn-danger">Delete</button></td>
               </tr>
           )
       })
   }
  </tbody>
</table>
               </div>
           </div>
           </div>
        )
    }
}
