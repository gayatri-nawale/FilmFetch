import React from 'react'
import {Link} from 'react-router-dom'
import "../css/Navbar.css";
export function Navbar() {
  return (
    <div>
    <div className="first">
        <Link to='/'>Home</Link>
        <Link to='/favourite' >Favorites</Link>
    </div>
    </div>
  )
}


