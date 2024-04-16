import React, { useState } from 'react';
import SignUpModal from './SignUpModal';
import './Header.css';

const Header = () => {

    const [showSignUp, setShowSignUp] = useState(false);

    const toggleSignUpModal = () => {
        setShowSignUp(!showSignUp);
    }

  return (
    <nav className='navbar navbar-expand-sm bg-light'>
        <div className="container-fluid">

            <a href="#home" className="navbar-brand text-info"><strong>McRent</strong></a>

            <button type='button' className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarIcon">
                 <span className="navbar-toggler-icon"></span>

            </button>

            <div className="collapse navbar-collapse" id="navbarIcon">
                <ul className="navbar-nav ms-auto d-flex justify-content-between gap-2">

                    <li className="nav-item">
                        <a href="#home" className="nav-link active text-info" style={{fontWeight:500}}>Home</a>
                    </li>

                    <li className="nav-item">
                        <a href="#about_us" className="nav-link text-white">About Us</a>
                    </li>

                    <li className="nav-item">
                        <a href="#services" className="nav-link text-white">Our Service</a>
                    </li>

                    <li className="nav-item">
                        <a href="#contact" className="nav-link text-white">Contact</a>
                    </li>
                </ul>

                <div className="user-info ms-auto d-flex justify-content-between gap-1">
                    <button className="btn btn-light" type='button'>Sign In</button>
                    <button className="btn btn-primary text-white" type='button' onClick={toggleSignUpModal}>Sign Up</button>

                </div>
            </div>
        </div>

        {showSignUp && (
            <SignUpModal show={showSignUp} handleClose={toggleSignUpModal}/>
        )}
    </nav>
  )
}



  
export default Header;