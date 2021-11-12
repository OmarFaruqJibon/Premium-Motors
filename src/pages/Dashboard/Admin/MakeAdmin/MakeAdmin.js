import React, { useState } from 'react';
import useAuth from '../../../hooks/useAuth';

const MakeAdmin = () => {
    // const {token} = useAuth();
    const [email, setEmail] = useState('');
    
    const handleOnBlur = e => {
        setEmail(e.target.value);
    }
    console.log(email);
    const handleAdminForm = e =>{
        const user = {email};
        fetch('http://localhost:5000/users/admin',{
            method: 'PUT',
            headers: {
                // 'authorization' : `Bearer ${token}`,
                'content-type' : 'application/json'
            },
            body: JSON.stringify(user)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
        })
        e.preventDefault();
    }
    return (
        <div>
            <h2 className="mt-5">Add an Admin</h2>
               
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