import React, { useEffect, useState } from 'react';
import './HomeCar.css';
import { Link } from 'react-router-dom';

const HomeCars = () => {
    const [cars, setCars] = useState([]);
    useEffect( () => {
        fetch('https://stark-sierra-80617.herokuapp.com/cars')
        .then(res=>res.json())
        .then(data=>setCars(data));
    },[]);

    // slice courses array to 4 elements
    const sixItems = cars.slice(0, 6);
    
    return (
        <div>
        <div className="text-center">
            <h1 className="fw-bolder">Feature <span className="def-clr">Cars</span></h1>
            <p><small>Travel has helped us to understand the meaning of life and it has helped us become better people <br /> Each time we travel, we see the world with new eyes</small></p>
        </div>

        <div className="row g-4 m-5 mt-0">
            {sixItems.map(car => <div key={car._id} className="col-lg-4 col-md-6 col-12 mt-5">
                <div className="cart">
                    <div className="thumb">
                        <img src={car.img} alt="" />
                    </div>

                    <div className="Car-detail">
                        <h5><strong>{car.title}</strong></h5>
                        <p><small>{car.description}</small></p>
                        <h4 className="price">$ {car.price}</h4>
                    <div className="text-center">
                    <Link to={`/carDetails/${car._id}`}><button className="btn signIn-btn">Purches</button></Link>
                    </div>
                    </div>
                </div>
            </div>
            )}
        </div>
    </div>
    );
};

export default HomeCars;