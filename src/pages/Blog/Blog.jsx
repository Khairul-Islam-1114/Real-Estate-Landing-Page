import React, { useEffect, useState } from 'react'
import './Blog.css';
import BigHouse from '../../assets/images/big-house.png';
import SmallHouse1 from '../../assets/images/small-house-1.png';
import SmallHouse2 from '../../assets/images/small-house-2.png';
import SmallHouse3 from '../../assets/images/small-house-3.png';
import SmallHouse4 from '../../assets/images/small-house-4.png';




const Blog = () => {

const [truncateText, setTruncateText] = useState('');
const [showFullText, setShowFullText] = useState(false);

const originalText = 'Find a home or space from our search bar and enter your spesific location, property type and price range and more detailed for you and my friend. ' 

useEffect(()=>{

    if(originalText.length > 100){
        setTruncateText(originalText.substring(0,100) + '...');
    }else{
        setTruncateText(originalText);
    }

},[originalText, showFullText])

const toggleText = () => {
    setShowFullText(!showFullText);
}

  return (
    <div className='container bg-light py-5' id='blog'>
        <div className="row blog-flex">
            <div className="col">
                <img src={BigHouse} alt="Big-House" className="img-fluid" />

                <h5 className='bold'>Perumahan yang paling murah di Sukabumi, yuk segera booking rumah impianmu bersama kami</h5>
                <p className='text-black-50'>
                   {showFullText ? originalText : truncateText}
                    {originalText.length > 100 && 
                    <button type="button" onClick={toggleText} className='btn btn-info'>
                        {showFullText ? 'See less' : 'See more'}
                    </button>
                    }   
                </p>    
            </div>

            <div className="col column-2">
                <p className="text-info mb-0 first-p"><strong>Our Blog</strong></p>
                <h2 className='mb-5'>Always Check Our Latest
                    Blog For Update Info
                </h2>

                <div>


                    <div className='row mb-3'>
                        <div className="col d-flex gap-3">
                        <img src={SmallHouse1} alt="Neymar's-House" className="img-fluid rounded" />
                        <div>
                            <h6>
                                <a href="#">
                                Cara merawat rumah agar selalu bersih danenak di pandang oleh orang lain...
                                </a>

                            </h6>
                            <p className='text-black-50'>- Neymar Da Silva Junior</p>
                        </div>
                        </div>
                    </div>

                    <div className='row mb-3'>
                        <div className="col d-flex gap-3">
                        <img src={SmallHouse2} alt="James's-House" className="img-fluid rounded" />
                        <div>
                            <h6>
                                <a href="#">
                                How to make a design interior for your dream home and your apartment...
                                </a>

                            </h6>
                            <p className='text-black-50'>- James Ricardo Alexander</p>
                        </div>
                        </div>
                    </div>

                    <div className='row mb-3'>
                        <div className="col d-flex gap-3">
                        <img src={SmallHouse3} alt="Alex's-House" className="img-fluid rounded" />
                        <div>
                            <h6>
                                <a href="#">
                                Membuat rumah dengan harga murah dan kualitas yang sangat bagus...
                                </a>

                            </h6>
                            <p className='text-black-50'>- Alexander Johnson</p>
                        </div>
                        </div>
                    </div>

                    <div className='row mb-4'>
                        <div className="col d-flex gap-3">
                        <img src={SmallHouse4} alt="cristriano's-House" className="img-fluid rounded" />
                        <div>
                            <h6>
                                <a href="#">
                                Kumpulan design rumah yang cocok untuk pengantin yang baru menikah...
                                </a>

                            </h6>
                            <p className='text-black-50'>- Cristiano Martinus Alexander</p>
                        </div>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    </div>
  )
}

export default Blog