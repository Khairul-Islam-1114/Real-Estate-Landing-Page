import React from 'react';
import Avenue from '../../assets/images/avenue-with-green-trees.png';
import './HowItWorks.css'


const HowItWorks = () => {
  return (
    <div className='container bg-light py-5' id='howItWorks'>
        <div className="row myStyle">
            <div className="col column-1">
                <p className="text-info first-p"><strong>How It Works</strong></p>
                <h2>We are Ready to Help You to Get Home</h2>

                <div className='holder'>
                <h5>Search Your Property</h5>
                <p className="text-black-50">
                    Cari dulu property yang ingin di pakai untuk rumah impianmu atau
                    untuk rumah yang akan di berikan ke orang lain
                </p>
                </div>

                <div className='holder'>
                <h5>Choose Your Property</h5>
                <p className="text-black-50">
                    Lalu pilih property yang ingin di pakai untuk rumah impianmu atau
                    untuk rumah yang akan di berikan ke orang lain
                </p>
                </div>

                <div className='holder'>
                <h5>Booking Your Property</h5>
                <p className="text-black-50">
                    Kemudian booking property yang ingin di pakai untuk rumah
                    impianmu atau untuk rumah yang akan diisi oleh orang lain
                </p>
                </div>

            </div>

            <div className="col d-flex align-items-center justify-content-center">
                <figure>
                <img src={Avenue} alt="avenue-with-green-tress" className="img-fluid rounded" id='design' />
                <figcaption className='text-center'><em>Avenue with Green Trees</em></figcaption>
                </figure>
            </div>
        </div>
    </div>
  )
}

export default HowItWorks