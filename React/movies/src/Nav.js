import React from 'react'
import './nav.css';
import {Link} from 'react-router-dom';
function Nav() {
    return (
       <nav className='nav-class' >
         <h1>Logo</h1>
         <ul className='list' >
           <Link to='/' >
           <li>Home</li>
           </Link>
           <Link to='/about'>
           <li>About</li>
           </Link>
           <Link to='/movies'>
           <li>Movies</li>
           </Link>
         </ul>
       </nav>
    )
}

export default Nav
