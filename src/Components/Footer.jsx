import React from 'react'
import {Link} from "react-router-dom"
const Footer = () => {
  return (

    <div className='Footer'>
    <footer> 
    <ul className='nav justify-content-center border-bottom '>
    <li className='nav-item'>
    <Link to ="/" className="nav-link px-2 fs-3">
    Dashboard
    </Link>
    </li>


    <li className='nav-item'>
    <Link to ="/bookdetails " className="nav-link px-2 fs-3">
    Manage books
    </Link>


    </li><li className='nav-item'>
    <Link to ="/Create" className="nav-link px-2 fs-3">
    Add book
    </Link>
    </li>
    
    
    <li className='nav-item'></li>
    </ul>
    <p className='text-center footer-text px-2 mt-3'> @Rajaguru </p>

    </footer>
    </div>
  )
}

export default Footer