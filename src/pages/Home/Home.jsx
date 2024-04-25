import React from 'react';
import './Home.css'
import Property1 from '../../assets/images/property1.png';
import Property2 from '../../assets/images/property2.png';

const Home = () => {
  return (
    <div className="container" id="home">
      <div className='row home-row'>

        <div className="col d-flex flex-column justify-content-center align-items-center column-1">
          <p className="text-info mb-0 mt-3 "><strong>Dream Home</strong></p>

          <h1>Find Your Perfect Future Home</h1>

          <p>Find a home or space from our search bar and enter your
            spesific location, property type and price range and
            search your dream home for your life forever.
          </p>

          <div className="d-flex gap-3">
            <button className="btn btn-info text-white hide1">Search Now</button>
            <button className="btn btn-outline-info hide1">View Property</button>
          </div>

        </div>


        <div className="col">

          <div className="row">
            <div className="col">
              <img src={Property1} alt="condo-property" className="property1 img-fluid" />

            </div>

            <div className="col">
              <img src={Property2} alt="modern-apartment" className="property2 img-fluid" />

            </div>
          </div>

        </div>



      </div>

    </div>

  )
}

export default Home