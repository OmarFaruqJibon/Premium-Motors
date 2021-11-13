import React from 'react';
import { useForm } from 'react-hook-form';
import './CreateReview.css';

const CreateReview = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = data =>{
        fetch('https://stark-sierra-80617.herokuapp.com/reviews',{
            method: 'POST',
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res=>res.json())
        .then(result=>{
            if(result?.insertedId){
                alert('Review  Succesfully.');
                reset();
            }
        });
        console.log(data);
    }

    return (
        <div className="mb-5">
            <h2 className="mt-5">Please give us a review</h2>
            <form className="input-form" onSubmit={handleSubmit(onSubmit)}>
                <input {...register("name")} placeholder="Name" className="p-2 m-2 w-50"/>
                <br />
                <input {...register("img" , { required: true })} placeholder="Image Url" className="p-2 m-3 w-50"/>
                <br />
                <input {...register("rating" , { required: true })} placeholder="Rating" className="p-2 m-3 w-50"/>
                <br />
                <textarea row="30" col="50" {...register("message" , { required: true })} placeholder="Message" className="p-2 m-3 w-50"/>
                <br />
                {errors.exampleRequired && <span>This field is required</span>}
                
                <input type="submit" value="Submit" className="btn review-btn"/>
            </form>
        </div>
    );
};

export default CreateReview;