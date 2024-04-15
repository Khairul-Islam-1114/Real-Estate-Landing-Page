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
    <div className='card w-25'>
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
    <div className='container'>
      <p className="text-info text-center mb-0"><strong>Testimonial</strong></p>
      <h2 className="text-center mb-5">What Our Customers are Saying</h2>
      <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active d-flex justify-content-between">
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
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Testimonial;
