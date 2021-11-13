import React from 'react';
import './ContactUs.css';
const ContactUs = () => {
    return (
        <div className="container">
            <div className="row mt-5 mb-5">
                <div className="col-md-4">
                    <div className="single-place-item">
                            <i className="contact-icon fas fa-phone-volume"></i>
                            <h5 className="fw-bold mt-3 mb-2">Phone numbers</h5>
                            <p><small>(+00) 458 877 4545 <br /> (+00) 998 8774 455</small></p>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="single-place-item">
                            <i className="contact-icon far fa-envelope"></i>
                            <h5 className="fw-bold mt-3 mb-2">Email Address</h5>
                            <p><small>info@example.com <br /> info@example.com</small></p>
                    </div>
                </div>
                <div className="col-md-4">
                     <div className="single-place-item">
                            <i className="contact-icon fas fa-house-user"></i>
                            <h5 className=" fw-bold mt-3 mb-2">Working Hours</h5>
                            <p><small>Mon - Fri: 10AM - 7PM <br /> Sta: 11AM - 5PM </small></p>
                    </div>
                </div>
            </div>

        <div className="contact-info">
            <div>
                <h4 className="mb-4 fw-bold">Leave a message!</h4>
                <div className="contact-input-field">
                    <input type="text" name="name" placeholder="Name" /> <br />
                    <input type="email" name="email" placeholder="Email" /><br />
                    <input type="text" name="address" placeholder="Address" /><br />
                    <input type="number" name="number" placeholder="Phone No" /><br />
                    <button className="btn signIn-btn">Submit</button>
                </div>
            </div>
        </div>


        </div>
    );
};

export default ContactUs;