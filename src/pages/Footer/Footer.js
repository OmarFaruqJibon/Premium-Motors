import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className="footer-container">
            <div className="row g-0">
                <div className="col-md-4 col-12 footer-left">
                        <div className="footer-logo">
                            <img src={'https://i.postimg.cc/X7hWBdmq/730-ai-2.png'} alt="" />
                        </div>
                        <div className="social-icons">
                            <a target="blank" href="https://www.facebook.com/"><i className="fab fa-facebook"></i></a>
                            <a target="blank" href="https://www.twitter.com/"><i className="fab fa-twitter-square"></i></a>
                            <a target="blank" href="https://www.github.com/"><i className="fab fa-github"></i></a>
                            <a target="blank" href="https://www.linkedin.com/"><i className="fab fa-linkedin"></i></a>
                        </div>
                </div>
                <div className="col-md-4 col-12">
                    <h5 className="footer-menu">NAVIGATE</h5>
                    <div className="footer-nav">
                        <Link className="footer-nav-item" to="/home">Home</Link>
                        <Link className="footer-nav-item" to="/cars">Cars</Link>
                        <Link className="footer-nav-item" to="/about">About Us</Link>
                        <Link className="footer-nav-item" to="/contact">Contact Us</Link>
                        
                    </div>
                </div>
                <div className="col-md-4 col-12">
                    <h5 className="footer-menu">SUBSCRIBE</h5>
                    <div className="footer-input">
                    <input type="email" placeholder="Enter Email" />
                    <button>Submit</button>
                    </div>
                </div>
            </div>
            <hr />
            <div>
                <p className="footer-bottom">Copyright ©2021 All rights reserved | Premium Motors</p>
            </div>
        </div>
    );
};

export default Footer;