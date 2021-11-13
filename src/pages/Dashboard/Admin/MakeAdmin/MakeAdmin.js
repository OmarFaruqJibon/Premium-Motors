import React, { useState } from 'react';

const MakeAdmin = () => {
    const [email, setEmail] = useState('');
    
    const handleOnBlur = e => {
        setEmail(e.target.value);
    }
    const handleAdminForm = e =>{
        const user = {email};
        fetch('https://stark-sierra-80617.herokuapp.com/users/admin',{
            method: 'PUT',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(user)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            if(data?.modifiedCount>0){
                alert('Admin create successfully');
            }
        })
        e.preventDefault();
    }
    return (
        <div className="default-text">
            <h2 className="mt-5 fw-bold">Add an Admin</h2>
               
                <form onSubmit={handleAdminForm}>
                    <div className="input-group m-0 m-auto mt-5 w-50 mb-3">
                        <input onBlur={handleOnBlur} type="email" className="form-control" placeholder="Email" aria-label="Recipient's username" aria-describedby="button-addon2"/>
                        <button className="btn btn-primary" type="submit" id="button-addon2">Add</button>
                    </div>
                </form>
        </div>
    );
};

export default MakeAdmin;