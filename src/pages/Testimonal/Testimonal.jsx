import React, { useEffect, useState } from 'react';

import Customer1 from '../../assets/images/customer-1.jpeg';
import Customer2 from '../../assets/images/customer-2.jpeg';
import Customer3 from '../../assets/images/customer-3.jpg';

import Star from '../../assets/images/star.svg';

const ReviewCard = ({ customerImage, customerName, initialReview }) => {
  const [review, setReview] = useState('');
  const [fullReview, setFullReview] = useState(false);

  useEffect(() => {
    if (initialReview.length > 100) {
      setReview(initialReview.substring(0, 100) + "...");
    } else {
      setReview(initialReview);
    }
  }, [initialReview, fullReview]);

  const toggleReview = () => {
    setFullReview(!fullReview);
  }

  return (
    <div className='card w-25 h-25'>
      <img src={customerImage} className="card-img-top img-fluid" alt={customerName} />
      <div className="card-body">
        <h5 className="text-center card-title">{customerName}</h5>
        <div className="row">
          <div className="col  d-flex justify-content-center">
            <img src={Star} alt="ratings" />
            <img src={Star} alt="ratings" />
            <img src={Star} alt="ratings" />
            <img src={Star} alt="ratings" />
            <img src={Star} alt="ratings" />
          </div>
        </div>
        <p className='text-center card-text'>
          {fullReview ? initialReview : review}
          {initialReview.length > 100 &&
            <button type='button' onClick={toggleReview} className='btn btn-light border'>
              {fullReview ? 'Read less' : 'Read more'}
            </button>
          }
        </p>
      </div>
    </div>
  );
};

const Testimonial = () => {
  const initialReviews = [
    {
      customerImage: Customer1,
      customerName: "Alexandar Martinus",
      review: "We found Orespace to be highly organized and professional from start to finish. Their process of having all key team members sit down together with clients total what's wanted, and then having all return to sit down and discuss"
    },
    {
      customerImage: Customer3,
      customerName: "Khairul Islam",
      review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis fermentum tempus viverra."
    },
    {
      customerImage: Customer2,
      customerName: "Rahmat Muhammad",
      review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis fermentum tempus viverra."
    }
  ];

  return (
    <div className='container bg-light py-5' id='testimonial' style={{height:'100vh'}}>
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
            <div className="d-flex justify-content-between">
              {initialReviews.map((review, index) => (
                <ReviewCard
                  key={index}
                  customerImage={review.customerImage}
                  customerName={review.customerName}
                  initialReview={review.review}
                />
              ))}
            </div>
          </div>

          <div className="carousel-item">
            <div className="row">
              <div className="col">
                <img src={Customer1} alt="customer" style={{borderRadius:'75%', width: '100px', display:'block',margin:'auto',position:'relative',top:'50px'}}/>

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
                  <img src={Customer2} alt="customer" style={{borderRadius:'75%', width: '100px', height:'80px', display:'block',margin:'auto',position:'relative',top:'50px'}}/>
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

