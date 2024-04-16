import React from 'react';
import './Home.css'
import Property1 from '../../assets/images/property1.png';
import Property2 from '../../assets/images/property2.png';

const Home = () => {
  return (
    <div className="container">
            <div className='row' id='home'>

                <div className="col d-flex flex-column justify-content-center align-items-center column-1">
                    <p className="text-info mb-0 mt-3 align-self-start"><strong>Dream Home</strong></p>

                    <h1>Find Your Perfect Future Home</h1>

                    <p>Find a home or space from our search bar and enter your
                      spesific location, property type and price range and 
                      search your dream home for your life forever.
                    </p>

                    <div className="d-flex gap-3" id='hide'>
                    <button className="btn btn-info text-white hide1">Search Now</button>
                    <button className="btn btn-outline-info hide1">View Property</button>
                    </div>

                </div>

                <div className="col">
                    <img src={Property1} alt="condo-property" className="property1 img-fluid" />
                </div>

                <div className="col">
                    <img src={Property2} alt="modern-apartment" className="property2 img-fluid" />
                </div>

    </div>

<div className="d-flex gap-3 justify-content-center" id='special'>
    <button className="btn btn-info text-white btn-small hide2">Search Now</button>
    <button className="btn btn-outline-info btn-small hide2">View Property</button>
    </div>
    </div>

  )
}

export default Home