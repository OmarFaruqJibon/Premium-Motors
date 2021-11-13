import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const ManageCars = () => {
    const [car, setCar] = useState([]);

    useEffect( () => {
        fetch('https://stark-sierra-80617.herokuapp.com/cars')
        .then(res => res.json())
        .then(data=>setCar(data));
    },[]);

    const handleDeleteBooking = id =>{
        const proceed = window.confirm('Are you sure you want to delete?');
            if(proceed){
                const url = `https://stark-sierra-80617.herokuapp.com/cars/${id}`;
            fetch((url),{
                method: 'DELETE',
            })
            .then(res=>res.json())
            .then(data=>{
                alert('DELETED SUCCESSFULLY');
                const remainingCars = car.filter(user => user._id !== id);
                setCar(remainingCars);
            })
            }
    }

    return (
        <div>
            <div>
           <h4 className="fw-bold mt-4 mb-5"> Manage All Cars</h4>

           <div className="m-md-4">
                <div className="row g-4">
                    {
                        car.map(book => <div key={book._id} className="col-4">
                                <div className="user-info">
                                <p>Name: {book.title}</p>
                                <p>ID: {book._id}</p>
                                <button onClick={()=>handleDeleteBooking(book._id)} className="btn signIn-btn">Delete Booking</button>
                                </div>
                            </div>
                        )
                    }
                </div>
           </div>

        </div>
        </div>
    );
};

export default ManageCars;