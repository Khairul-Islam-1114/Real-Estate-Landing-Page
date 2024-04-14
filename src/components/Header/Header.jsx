import React from 'react'
import './Header.css';

const Header = () => {
  return (
    <nav className='navbar navbar-expand-sm bg-light'>
        <div className="container-fluid">

            <a href="#" className="navbar-brand text-info"><strong>McRent</strong></a>

            <ul className="navbar-nav">

                <li className="nav-item">
                    <a href="#home" className="nav-link active text-info" style={{fontWeight:500}}>Home</a>
                </li>

                <li className="nav-item">
                    <a href="#about_us" className="nav-link">About Us</a>
                </li>

                <li className="nav-item">
                    <a href="#services" className="nav-link">Our Service</a>
                </li>

                <li className="nav-item">
                    <a href="#contact" className="nav-link">Contact</a>
                </li>
            </ul>

            <div className="user-info">
                <a className="btn btn-light" href='#'>Sign In</a>
                <a className="btn btn-info text-white" href='#'>Sign Up</a>

            </div>
        </div>
    </nav>
  )
}

export default Header