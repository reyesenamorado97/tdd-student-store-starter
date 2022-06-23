import * as React from "react"
import "./Navbar.css"
import Logo from "../../assets/logo.webp";
import {Link} from "react-router-dom";

export default function Navbar() {
  console.log("loaded")
  return (
    <nav className="navbar">
            


<Link to="/">
  <img className="logo" src={Logo} alt="Codepath" ></img>
</Link>


    
    <div className="socials">
      <p className="nav-titles">🐥</p>
      <p className="nav-titles">📸</p>
      <p className="nav-titles">F</p>
    </div>

       
      <div className="test">
        <Link to="/"><p className="nav-title-links">Home</p> </Link>

        <Link to="/#About"><p className="nav-title-links">About Us</p> </Link>
        <Link to="/#Contact"><p className="nav-title-links">Contact Us</p> </Link>
        <Link to="/#Buy"><p className="nav-title-links">Buy Now</p> </Link>

      </div>
    </nav>

  )
}

export function SearchBar() {
  return (
    <div className="search-bar">
      <input placeholder="Search Twitter" />
      <i className="fas fa-search"></i>
    </div>
  )
}
