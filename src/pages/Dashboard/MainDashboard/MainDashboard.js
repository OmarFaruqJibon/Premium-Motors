import React from 'react';
import { Link } from 'react-router-dom';

const MainDashboard = () => {
    return (
        <div>
            <h1 className="my-5">Dashboard</h1>
            <Link className="me-3 text-decoration-none fw-bold" to="/addCar">Add Car</Link>
            <Link className="me-3 text-decoration-none fw-bold" to="/allOrders">All Orders</Link>
            <Link className="me-3 text-decoration-none fw-bold" to="/myOrders">My Orders</Link> 

        </div>
    );
};

export default MainDashboard;