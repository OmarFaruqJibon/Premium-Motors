import React from 'react';
import { Link } from 'react-router-dom';
import './Car.css';

const Car = (props) => {
    const {_id, title, img , description, price} = props.car;
    
    return (
        <div className="col-lg-4 col-md-6 col-12 mt-5">
            <div className="cart">
                <div className="thumb">
                    <img src={img} alt="" />
                </div>

                <div className="cart-detail">
                    <h5><strong>{title}</strong></h5>
                    <p><small>{description}</small></p>
                    <h4 className="price">$ {price}</h4>
                   <div className="text-center">
                   <Link to={`/carDetails/${_id}`}><button className="btn signIn-btn">Purches</button></Link>
                   </div>
                </div>
            </div>
        </div>
    );
};

export default Car;