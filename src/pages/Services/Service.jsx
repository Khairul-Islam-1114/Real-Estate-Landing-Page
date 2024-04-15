import React from 'react';
import './Service.css';
import Clock from '../../assets/images/clock.svg';
import Dollar from '../../assets/images/dollar.svg';
import Trust from '../../assets/images/trust.svg';



const Service = () => {
  return (
    <div className='container bg-light pt-4' id='service'>
        <p className="text-center text-info"><strong>Why Choose Us</strong></p>
        <h2 className="text-center mb-5">We are Providing Best Services</h2>
        <div className="row gap-2">
            <div className="col holder rounded p-3">

                <div className="icon">
                <img src={Clock} alt="clock-icon" />
                </div>

                <h4 className="text-center">Everytime Conusltation</h4>
                <p className="text-center text-black-50">You can contact us everytime for discuss</p>
            </div>

            <div className="col holder rounded p-3">

                <div className="icon">
                    <img src={Dollar} alt="dollar-icon" />
                </div>

                <h4 className="text-center">Best Price Offers</h4>
                <p className="text-center text-black-50">Saving your money to be useful</p>
            </div>

            <div className="col holder rounded p-3">

                <div className="icon">
                 <img src={Trust} alt="trust-icon" />
                </div>
                <h4 className="text-center">Trusted and Secure</h4>
                <p className="text-center text-black-50">Buy home with private information</p>
            </div>

        </div>
    </div>
  )
}

export default Service