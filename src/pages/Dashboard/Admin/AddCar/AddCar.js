import React from 'react';
import { useForm } from 'react-hook-form';
import './AddCar.css';

const AddCar = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = data =>{
        fetch('https://stark-sierra-80617.herokuapp.com/cars',{
            method: 'POST',
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res=>res.json())
        .then(result=>{
            if(result?.insertedId){
                alert('Car Added Succesfully.');
                reset();
            }
        })
    }

    return (
        <div>
            <h2>Add a new car</h2>
             <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("title")} placeholder="Title" className="p-2 m-2 w-50"/>
                <br />
                <input {...register("description" , { required: true })} placeholder="description" className="p-2 m-2 w-50"/>
                <br />
                <input {...register("img" , { required: true })} placeholder="Image Url" className="p-2 m-2 w-50"/>
                <br />
                <input {...register("price" , { required: true })} placeholder="Price" className="p-2 m-2 w-50"/>
                <br />
                {errors.exampleRequired && <span>This field is required</span>}
                
                <input type="submit" value="Add Car" className="btn book-btn"/>
            </form>
        </div>
    );
};

export default AddCar;