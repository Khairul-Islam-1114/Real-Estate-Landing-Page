import React from 'react';
import './Property.css';

import Wifi from '../../assets/images/wifi.svg';
import family from '../../assets/images/family.svg';


import FProperty1 from '../../assets/images/feature-property-1.png';
import FProperty2 from '../../assets/images/feature-property-2.png';
import FProperty3 from '../../assets/images/feature-property-3.png';
import FProperty4 from '../../assets/images/feature-property-4.png';
import FProperty5 from '../../assets/images/feature-property-5.png';
import FProperty6 from '../../assets/images/feature-property-6.png';







const Property = () => {
  return (
    <div className='container py-5 bg-light px-4' id='property'>

        <p className="text-info text-center mb-0 feature"><strong>Featured Property</strong></p>
        <h2 className="text-center mb-5">Special Offers From Us</h2>

        <div className="row mb-5 gap-3">
            <div className="col property-holder">
                <div className="row flx">
                    <div className="col">
                        <img src={FProperty1} alt="Perumahan Baleambang" className="img-fluid rounded" />
                    </div>

                    <div className="col d-flex flex-column align-content-center justify-content-center">
                        <div className='d-flex gap-2 mb-2 space'>
                            <span className='badge bg-secondary'>
                                <img src={Wifi} alt="wifi-icon" />
                                Free Wifi
                            </span>

                            <span className='badge bg-warning'>
                                <img src={family} alt="family-icon" />

                                Family
                            </span>
                        </div>
                        <h5 className='property-name'>
                            Perumahan Balekambang
                            Nagrak City No. 691 
                        </h5>
                        <h6 className="text-info">$220,00</h6>
                        <p className='small'>5 Building | 4 Beedroom | 2 Bathroom</p>
                        <button type="button" className="btn btn-info text-white">Show more details</button>
                    </div>
                </div>
            </div>

            <div className="col property-holder">
                <div className="row flx">
                        <div className="col">
                            <img src={FProperty2} alt="Perumahan Green Hill Raya" className="img-fluid rounded" />
                        </div>

                        <div className="col d-flex flex-column align-content-center justify-content-center">

                            <div className='d-flex gap-2 mb-2 space'>
                                <span className='badge bg-secondary'>
                                    <img src={Wifi} alt="wifi-icon" />
                                    Free Wifi
                                </span>

                                <span className='badge bg-warning'>
                                    <img src={family} alt="family-icon" />

                                    Family
                                </span>
                            </div>

                            <h5 className='property-name'>Perumahan Green Hill Raya
                                Segog City No. 691 
                            </h5>
                            <h6 className="text-info">$200,00</h6>
                            <p className='small'>3 Building | 4 Beedroom | 2 Bathroom</p>
                            <button type="button" className="btn btn-info text-white">Show more details</button>

                        </div>
                    </div>
                </div>
        </div>


        <div className="row mb-5 gap-3">
            <div className="col property-holder">
                <div className="row flx">
                    <div className="col">
                        <img src={FProperty3} alt="Nippah Valley Residence" className="img-fluid rounded" />
                    </div>

                    <div className="col d-flex flex-column align-content-center justify-content-center">
                        <div className='d-flex gap-2 mb-2 space'>
                            <span className='badge bg-secondary'>
                                <img src={Wifi} alt="wifi-icon" />
                                Free Wifi
                            </span>

                            <span className='badge bg-warning'>
                                <img src={family} alt="family-icon" />

                                Family
                            </span>
                        </div>
                        <h5 className='property-name'>
                            Nippah Valley Residence
                            No. 560 Jawa Barat 
                        </h5>
                        <h6 className="text-info">$220,00</h6>
                        <p className='small'>4 Building | 2 Beedroom | 2 Bathroom</p>
                        <button type="button" className="btn btn-info text-white">Show more details</button>
                    </div>
                </div>
            </div>

            <div className="col property-holder">
                <div className="row flx">
                        <div className="col">
                            <img src={FProperty4} alt="Perumahan Green Hill Raya" className="img-fluid rounded" />
                        </div>

                        <div className="col d-flex flex-column align-content-center justify-content-center">

                            <div className='d-flex gap-2 mb-2 space'>
                                <span className='badge bg-secondary'>
                                    <img src={Wifi} alt="wifi-icon" />
                                    Free Wifi
                                </span>

                                <span className='badge bg-warning'>
                                    <img src={family} alt="family-icon" />

                                    Family
                                </span>
                            </div>

                            <h5 className='property-name'>
                                Cijulang Raya Residence
                                No. 680 Bandung
                            </h5>
                            <h6 className="text-info">$224,00</h6>
                            <p className='small'>3 Building | 2 Beedroom | 2 Bathroom</p>
                            <button type="button" className="btn btn-info text-white">Show more details</button>

                        </div>
                    </div>
                </div>
        </div>


        <div className="row gap-3">
            <div className="col property-holder">
                <div className="row flx">
                    <div className="col">
                        <img src={FProperty5} alt="Perumahan Gunung Walat" className="img-fluid rounded" />
                    </div>

                    <div className="col d-flex flex-column align-content-center justify-content-center">
                        <div className='d-flex gap-2 mb-2 space'>
                            <span className='badge bg-secondary'>
                                <img src={Wifi} alt="wifi-icon" />
                                Free Wifi
                            </span>

                            <span className='badge bg-warning'>
                                <img src={family} alt="family-icon" />

                                Family
                            </span>
                        </div>
                        <h5 className='property-name'>
                            Perumahan Gunung Walat
                            Cosmo City No. 20 
                        </h5>
                        <h6 className="text-info">$228,00</h6>
                        <p className='small'>3 Building | 4 Beedroom | 1 Bathroom</p>
                        <button type="button" className="btn btn-info text-white">Show more details</button>
                    </div>
                </div>
            </div>

            <div className="col property-holder">
                <div className="row flx">
                        <div className="col">
                            <img src={FProperty6} alt="Green Valley Residence" className="img-fluid rounded" />
                        </div>

                        <div className="col d-flex flex-column align-content-center justify-content-center">

                            <div className='d-flex gap-2 mb-2 space'>
                                <span className='badge bg-secondary'>
                                    <img src={Wifi} alt="wifi-icon" />
                                    Free Wifi
                                </span>

                                <span className='badge bg-warning'>
                                    <img src={family} alt="family-icon" />

                                    Family
                                </span>
                            </div>

                            <h5 className='property-name'>
                                Green Valley Residence
                                Jawa Barat No. 78 
                            </h5>
                            <h6 className="text-info">$226,00</h6>
                            <p className='small'>3 Building | 2 Beedroom | 2 Bathroom</p>
                            <button type="button" className="btn btn-info text-white">Show more details</button>

                        </div>
                    </div>
                </div>
        </div>
        
    </div>
  )
}

export default Property