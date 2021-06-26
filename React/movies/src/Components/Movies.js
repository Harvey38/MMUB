import React, { Component } from 'react'
import { getMovies } from './getMovies';
import axios from 'axios';
export default class Movies extends Component {
    constructor() {
        super();
        this.state = {
            movies: [],
            currSearchText: '',
            currPage: 1,
            genres: [{ _id: 'abcd', name: 'All Genres' }],
            cGenre: 'All Genres'

        }
    }
    async componentDidMount() {
        console.log('Component DID Mount');
        let res = await axios.get('https://backend-react-movie.herokuapp.com/movies');
        let genreRes = await axios.get('https://backend-react-movie.herokuapp.com/genres');
        // console.log(res.data.movies);
        console.log(genreRes.data.genres);
        this.setState({
            movies: res.data.movies,
            genres: [...this.state.genres, ...genreRes.data.genres]
        })
    }
    handleChange = (e) => {
        let val = e.target.value;
        console.log(val);
        this.setState({
            currSearchText: val,

        })
    }
    onDelete = (id) => {
        let arr = this.state.movies.filter(function (movieObj) {
            return movieObj._id !== id;
        })
        // console.log(arr);
        this.setState({
            movies: arr
        });
    }
    sortByRatings = (e) => {
        let className = e.target.className;
        console.log(className);
        let sortedMovies = [];
        if (className == 'fa fa-sort-asc') {
            //ascending order
            sortedMovies = this.state.movies.sort(function (movieObjA, movieObjB) {
                return movieObjA.dailyRentalRate - movieObjB.dailyRentalRate
            })
        }
        else {
            //descending order
            sortedMovies = this.state.movies.sort(function (movieObjA, movieObjB) {
                return movieObjB.dailyRentalRate - movieObjA.dailyRentalRate
            })
        }
        this.setState({
            movies: sortedMovies
        })
    }
    sortByStock = (e) => {
        let className = e.target.className;
        console.log(className);
        let sortedMovies = [];
        if (className == 'fa fa-sort-asc') {
            //ascending order
            sortedMovies = this.state.movies.sort(function (movieObjA, movieObjB) {
                return movieObjA.numberInStock - movieObjB.numberInStock
            })
        }
        else {
            //descending order
            sortedMovies = this.state.movies.sort(function (movieObjA, movieObjB) {
                return movieObjB.numberInStock - movieObjA.numberInStock
            })
        }
        this.setState({
            movies: sortedMovies
        })
    }
    handlePageChange = (pageNumber) => {
        this.setState({ currPage: pageNumber });
    }
    handleGenreChange = (genre) => {
        this.setState({
            cGenre: genre
        })
    }
    render() {
        console.log('render');
        let { movies, currSearchText, currPage, genres, cGenre } = this.state; //ES6 destructuring
        let limit = 4;
        let filteredArr = [];
        if (currSearchText === '') {
            filteredArr = movies;
        }
        else {
            filteredArr = movies.filter(function (movieObj) {
                let title = movieObj.title.toLowerCase();
                console.log(title);
                return title.includes(currSearchText.toLowerCase());
            })
        }
        if (cGenre != 'All Genres') {
            filteredArr = filteredArr.filter(function (movieObj) {
                return movieObj.genre.name == cGenre
            })
        }
        let numberofPage = Math.ceil(filteredArr.length / limit);
        let pageNumberArr = [];
        for (let i = 0; i < numberofPage; i++) {
            pageNumberArr.push(i + 1);
        }
        let si = (currPage - 1) * limit;
        let ei = si + limit;
        filteredArr = filteredArr.slice(si, ei);
        return (

            //JSX
            <>
                {this.state.movies.length == 0 ? <div className="spinner-border text-primary" role="status">
                    <span class="visually-hidden">Loading...</span>
                </div> :
                    <div className='container'>
                        <div className='row'>
                            <div className='col-3'>
                                <ul className="list-group">
                                    {
                                        genres.map((genreObj) => (
                                            <li onClick={() => this.handleGenreChange(genreObj.name)} key={genreObj._id} className='list-group-item'>
                                                {genreObj.name}
                                            </li>
                                        ))
                                    }
                                </ul>
                                <h5>Current Genre : {cGenre}</h5>
                            </div>
                            <div className='col-9'>
                                <input type='search' value={this.state.currSearchText} onChange={this.handleChange} ></input>
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th scope="col">#</th>
                                            <th scope="col">Title</th>
                                            <th scope="col">Genre</th>
                                            <th scope="col">
                                                <i onClick={this.sortByStock} className="fa fa-sort-asc" aria-hidden="true"></i>
                                                Stock
                                                <i onClick={this.sortByStock} className="fa fa-sort-desc" aria-hidden="true"></i>
                                            </th>
                                            <th scope="col">
                                                <i onClick={this.sortByRatings} className="fa fa-sort-asc" aria-hidden="true"></i>
                                                Rate
                                                <i onClick={this.sortByRatings} className="fa fa-sort-desc" aria-hidden="true"></i>
                                            </th>
                                            <th></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            filteredArr.map((movieObj) => {
                                                return (
                                                    <tr key={movieObj._id} >
                                                        <td></td>
                                                        <td>{movieObj.title}</td>
                                                        <td>{movieObj.genre.name}</td>
                                                        <td>{movieObj.numberInStock}</td>
                                                        <td>{movieObj.dailyRentalRate}</td>
                                                        <td><button onClick={() => {
                                                            this.onDelete(movieObj._id)
                                                        }} type="button" className="btn btn-danger">Delete</button></td>
                                                    </tr>
                                                )
                                            })
                                        }
                                    </tbody>
                                </table>
                                <nav aria-label="...">
                                    <ul className="pagination">
                                        {
                                            pageNumberArr.map((pageNumber) => {
                                                let classStyle = pageNumber == currPage ? 'page-item active' : 'page-item';
                                                return (
                                                    <li key={pageNumber} onClick={() => this.handlePageChange(pageNumber)}
                                                        className={classStyle}><span className="page-link">{pageNumber}</span></li>
                                                )
                                            })
                                        }
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                }
            </>
        )
    }
}

{/* <li className="page-item"><a class="page-link" href="#">1</a></li>
    <li className="page-item active" aria-current="page">
      <a className="page-link" href="#">2</a>
    </li>
    <li className="page-item"><a class="page-link" href="#">3</a></li> */}