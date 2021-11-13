import React, { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';

const MyOrders = () => {
    const {user} = useAuth();
    const [orders, setOrders] = useState([]);

    useEffect(()=>{
        fetch('https://stark-sierra-80617.herokuapp.com/orders')
        .then(res=>res.json())
        .then(data=>{
            setOrders(data);
        })
    },[]);

    useEffect(()=>{
        fetch('https://stark-sierra-80617.herokuapp.com/orders')
        .then(res=>res.json())
        .then(data=>{
            const order = data.filter(book =>
                book?.email === user.email
                );
                setOrders(order);
        })
    },[user.email]);
    const handleDelete = id =>{
        const proceed = window.confirm('Are you sure you want to delete?');
            if(proceed){
                const url = `https://stark-sierra-80617.herokuapp.com/orders/${id}`;
            fetch((url),{
                method: 'DELETE',
            })
            .then(res=>res.json())
            .then(data=>{
                alert('DELETED SUCCESSFULLY');
                const remainingUser = orders.filter(user => user._id !== id);
                setOrders(remainingUser);
            })
            }
    }

    return (
        <div className="default-text">
           <h4 className="fw-bold mt-4 mb-5"> My Orders </h4>

           <div className="m-md-4">
                <div className="row g-4">
                    {
                        orders.map(order => <div key={order._id} className="col-md-4 col-12">
                                <div className="user-info">
                                <p>Name: {order.UserName}</p>
                                <p>Email: {order.email}</p>
                                <p>Order ID: {order.bookingID}</p>
                                <button onClick={()=>handleDelete(order._id)} className="delete-btn">Delete Order</button>
                                </div>
                            </div>
                            
                        )
                    }
                </div>
           </div>

        </div>
    );
};

export default MyOrders;