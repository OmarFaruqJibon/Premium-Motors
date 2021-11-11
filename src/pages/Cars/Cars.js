import React, { useEffect, useState } from 'react';
import Car from './Car/Car';
import './Cars.css';

const Cars = () => {
    const [cars, setCars] = useState([]);
    useEffect( () => {
        fetch('http://localhost:5000/cars')
        .then(res=>res.json())
        .then(data=>setCars(data));
    },[]);
    return (
        <div>
        <div className="text-center">
            <h1 className="coutses-title mb-3">New Cars <span>Packages</span></h1>
            <p><small>Travel has helped us to understand the meaning of life and it has helped us become better people. <br /> Each time we travel, we see the world with new eyes.</small></p>
        </div>

        <div className="row g-4 m-5 mt-0">
            {
                cars.map((car=><Car
                    key={car._id}
                    car={car}>
                    </Car>))
            }
        </div>
    </div>
    );
};

export default Cars;