import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const MainDashboard = () => {
    const {admin} = useAuth();
    return (
        <div>
            <h1 className="my-5">Dashboard</h1>
            {admin && <div>
                <Link className="me-3 text-decoration-none fw-bold" to="/addCar">Add Car</Link>
                <Link className="me-3 text-decoration-none fw-bold" to="/allOrders">All Orders</Link>
                <Link className="me-3 text-decoration-none fw-bold" to="makeAdmin">Make Admin</Link>
                <Link className="me-3 text-decoration-none fw-bold" to="">Manage Cars</Link>
             </div>}

            {!admin && <div>
                <Link className="me-3 text-decoration-none fw-bold" to="">Pay</Link> 
                <Link className="me-3 text-decoration-none fw-bold" to="/myOrders">My Orders</Link> 
                <Link className="me-3 text-decoration-none fw-bold" to="">Reviews</Link> 
            </div>}




            <Link className="me-3 text-decoration-none fw-bold">Logout</Link> 

        </div>
    );
};

export default MainDashboard;