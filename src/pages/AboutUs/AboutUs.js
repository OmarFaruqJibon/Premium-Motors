import React from 'react';
import './AboutUs.css';

const AboutUs = () => {
    return (
        <div className="container text-start about-wraper">

            <div className="row">
                <div className="col-md-6">
                    <h6 className="fw-bold mt-3 def-clr">WHO IS Premium Cars?</h6>
                    <h1 className="fw-bold mb-5">About Our Company</h1>
                    <p className="fw-bold mt-4">A specialized team of experienced technicians thriving to help clients in their needs.</p>
                    <p><small>Since 2001, ClearView has specialized in repairing and replacing auto glass, windshields, automotive tinting, mobile services and more! <br />
                    <br />
                    Our full line of services is backed by decades of delivering quality workmanship and value to our customers. At ClearView, we pride ourselves on providing superior products and services for every one of our customers. It's what makes us the clear choice for all your glass needs</small></p>
                </div>
                <div className="col-md-6">
                    <img src={'https://i.postimg.cc/jjzLcR5T/Tabs-image-style-two-3-min.jpg'} alt="" className="w-100 rounded mt-4 mb-5" />
                </div>
            </div>
        </div>
    );
};

export default AboutUs;