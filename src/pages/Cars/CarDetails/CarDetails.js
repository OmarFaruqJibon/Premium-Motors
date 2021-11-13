import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import useAuth from '../../hooks/useAuth';

const CarDetails = () => {
    const {user} = useAuth();
    const [car, setCar] = useState({});
    const {carId} = useParams();
    const {title, img, description, price } = car;
    const { register,reset, handleSubmit, formState: { errors } } = useForm();


    const url = `https://stark-sierra-80617.herokuapp.com/carDetails/${carId}`;
    useEffect(()=>{
        fetch(url)
        .then(res=>res.json())
        .then(data=>{
            setCar(data);
        })
    },[]);

    const onSubmit = data =>{
        data.bookingID = carId;
        fetch('https://stark-sierra-80617.herokuapp.com/orders',{
            method: 'POST',
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res=>res.json())
        .then(result=>{
            if(result.insertedId){
                alert('Booking Successfully.');
                reset();
            }
        })
    }

    return (
        <div className="container">
            <div>
                <h2 className=" fw-bold mt-5 mb-4">Car Booking</h2>
                <div className="row g-md-5 mt-3">
                    <div className="col-md-6 col-12 p-3">
                        <img className="w-100" src={img} alt="" />
                    </div>
                    <div className="col-md-6 col-12 p-3 text-start">
                        <h5><strong>{title}</strong></h5>
                        <p><small><strong>About Car:</strong> {description}</small></p>
                        <h5><strong>$ {price}</strong> </h5>
                    </div>
                </div>
            </div>

            <div className="container mb-5 text-center mt-5">
            <h5 className=" fw-bold mt-5 mb-4">Your Personal Information</h5>
            <form className="input-form" onSubmit={handleSubmit(onSubmit)}>
                <input {...register("UserName")} defaultValue={user.displayName} className="p-2 m-2 w-50"/>
                <br />
                <input {...register("email" , { required: true })} defaultValue={user.email}  className="p-2 m-2 w-50"/>
                <br />
                <input {...register("address" , { required: true })} placeholder="Address" className="p-2 m-2 w-50"/>
                <br />
                <input {...register("phone" , { required: true })} placeholder="Phone no" className="p-2 m-2 w-50"/>
                <br />
                
                {errors.exampleRequired && <span>This field is required</span>}
                
                <input type="submit" value="Purches" className="btn review-btn"/>
            </form>
        </div>



        </div>
    );
};


export default CarDetails;