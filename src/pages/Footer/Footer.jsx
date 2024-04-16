import React from 'react';
import './Footer.css';
import * as Icon from 'react-bootstrap-icons';

import email from '../../assets/images/email.svg';
import phone from '../../assets/images/phone.svg';




const Footer = () => {
  return (
    <div className='container pt-5' id='footer'>
         <div className="row footer-row">

            <div className="col">
                <p id="brand" className="text-info"><strong>McRent</strong></p>

                <p className="text-black-50">
                    Find a home or space from our search bar and enter
                    your spesific location, property type, and price
                </p>

                <div className='d-flex gap-2 my-3'>
                    <img src={email} alt="email-icon" />
                    <a href="mailto:hello@codersvilla.com">Hello@codersvilla.com</a>
                </div>

                <div className='d-flex gap-2 my-3'>
                    <img src={phone} alt="phone-icon" />
                    <a href="tel:+8801632001289">+8801632001289</a>
                </div>
            </div>


            <div className="col">
                <div className="row">

                    <div className="col">
                        <p className="text-center"><strong>Our Service</strong></p>
                        <p className="text-center text-black-50">Buy House</p>
                        <p className="text-center text-black-50">Rent House</p>
                        <p className="text-center text-black-50">Sell House</p>

                    </div>

                    <div className="col">
                        <p className="text-center"><strong>Support</strong></p>
                        <p className="text-center text-black-50">FAQ</p>
                        <p className="text-center text-black-50">Terms</p>
                        <p className="text-center text-black-50">Privacy</p>

                    </div>

                    <div className="col d-flex flex-column">
                        <p className="text-center"><strong>Social Media</strong></p>
                        <a type='button' className="btn btn-outline-danger" href='https://www.youtube.com/codersvilla'>
                        <Icon.Youtube /> Youtube
                        </a>
                        

                        <a type='button' className="btn btn-outline-danger" href='https://www.instagram.com/codersvilla'>
                        <Icon.Instagram /> Instagram
                        </a>

                        <a type='button' className="btn btn-outline-dark" href='https://twitter.com/codersvilla'>
                        <Icon.TwitterX /> Twitter
                        </a>

                    </div>



                </div>
            </div>
            <p className="text-center bg-light py-3 mt-5">&copy; All Right Reserved @codersvilla 2024
            </p>
         </div>

    </div>
  )
}

export default Footer;