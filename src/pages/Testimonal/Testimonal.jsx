import React from 'react';
import './Testimonal.css';

import Customer1 from '../../assets/images/customer-1.jpeg';
import Customer2 from '../../assets/images/customer-2.jpeg';

import Star from '../../assets/images/star.svg';



const Testimonial = () => {
 

  return (
    <div className='container bg-light py-5' id='testimonial' style={{ height: '100vh' }}>
      <p className="text-info text-center mb-0"><strong>Testimonial</strong></p>
      <h2 className="text-center mb-5">What Our Customers are Saying</h2>
      <div id="reviewCarousel" className="carousel slide" data-bs-ride="carousel">

        <div class="carousel-indicators mt-5">
          <button type="button" data-bs-target="#reviewCarousel" data-bs-slide-to="0" className="active bg-secondary" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#reviewCarousel" data-bs-slide-to="1" aria-label="Slide 2" className='bg-secondary'></button>
          <button type="button" data-bs-target="#reviewCarousel" data-bs-slide-to="2" aria-label="Slide 3" className='bg-secondary'></button>
        </div>
        <div className="carousel-inner">


          <div className="carousel-item active">
            <div className="row testimonal-row">

              <div className="col">
                <img src={Customer1} alt="customer" style={{ borderRadius: '75%', width: '100px', display: 'block', margin: 'auto', position: 'relative', top: '50px' }} />

                <div className="bg-white rounded p-3 pt-5" >
                  <h5 className="text-center mt-2">Alexander Martinus</h5>

                  <div className="row">
                    <div className="col  d-flex justify-content-center">
                      <img src={Star} alt="ratings" />
                      <img src={Star} alt="ratings" />
                      <img src={Star} alt="ratings" />
                      <img src={Star} alt="ratings" />
                      <img src={Star} alt="ratings" />
                    </div>
                  </div>

                  <p className='text-center text-black-50'>
                    We found Orespace to be highly organized and professional from start to finish.
                    Their process of having all key team members sit down together with clients
                    total what's wanted, and then having all return to sit down and discuss
                  </p>
                </div>

              </div>

              <div className="col">
                <img src={Customer2} alt="customer" style={{ borderRadius: '75%', width: '100px', height: '80px', display: 'block', margin: 'auto', position: 'relative', top: '50px' }} />
                <div className="bg-white rounded p-3 pt-5">
                  <h5 className="text-center mt-2">Rahmat Muhammad</h5>

                  <div className="row">
                    <div className="col  d-flex justify-content-center">
                      <img src={Star} alt="ratings" />
                      <img src={Star} alt="ratings" />
                      <img src={Star} alt="ratings" />
                      <img src={Star} alt="ratings" />
                      <img src={Star} alt="ratings" />
                    </div>
                  </div>

                  <p className='text-center text-black-50'>
                    We found Orespace to be highly organized and professional from start to finish.
                    Their process of having all key team members sit down together with clients
                    total what's wanted, and then having all return to sit down and discuss
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#reviewCarousel" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#reviewCarousel" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>



      </div>
    </div>
  );
};

export default Testimonial;

