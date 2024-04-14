import React from 'react'
import './Header.css';

const Header = () => {
  return (
    <nav className='navbar navbar-expand-sm bg-light'>
        <div className="container-fluid">

            <a href="#home" className="navbar-brand text-info"><strong>McRent</strong></a>

            <button type='button' className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarIcon">
                 <span className="navbar-toggler-icon"></span>

            </button>

            <div className="collapse navbar-collapse" id="navbarIcon">
                <ul className="navbar-nav ms-auto">

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

                <div className="user-info ms-auto">
                    <a className="btn btn-light" href='#'>Sign In</a>
                    <a className="btn btn-info text-white" href='#'>Sign Up</a>

                </div>
            </div>
        </div>
    </nav>
  )
}

export default Header