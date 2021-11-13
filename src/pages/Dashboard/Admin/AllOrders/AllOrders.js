import React, { useEffect, useState } from 'react';
import './AllOrder.css';

const AllOrders = () => {
    const [orders, setOrders] = useState([]);

    useEffect(()=>{
        fetch('https://stark-sierra-80617.herokuapp.com/orders')
        .then(res=> res.json())
        .then(data=>setOrders(data));
    },[]);

    const handleDeleteBooking = id => {
        const proceed = window.confirm('Are you sure you want to delete?');
        if(proceed){
            const url = `https://stark-sierra-80617.herokuapp.com/orders/${id}`;
        fetch((url),{
            method: 'DELETE',
        })
        .then(res=>res.json())
        .then(data=>{
            alert('DELETED SUCCESSFULLY');
            const remainingUser = orders.filter(order => order._id !== id);
            setOrders(remainingUser);
        })
        }
    }
    return (
        <div>
           <h2 className="fw-bold mt-4 mb-5"> All Orders </h2>

           <div className="m-md-4">
                <div className="row g-4">
                    {
                        orders.map(order => <div key={order._id} className="col-md-4 col-12">
                                <div className="user-info">
                                <p>Name: {order.UserName}</p>
                                <p>Email: {order.email}</p>
                                <p>Order ID: {order.bookingID}</p>
                                <button onClick={()=>handleDeleteBooking(order._id)} className="delete-btn">Delete Order</button>
                                </div>
                            </div>
                            
                        )
                    }
                </div>
           </div>

        </div>
    );
};

export default AllOrders;