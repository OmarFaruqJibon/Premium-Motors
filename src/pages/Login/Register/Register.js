import React, { useState } from 'react';
import { Link , useHistory} from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Register = () => {
    const {user, authError, regiserUser} = useAuth();
    const [loginData, setLoginData] = useState({});

    const history = useHistory();

    const handleLogInField = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = {...loginData};
        newLoginData[field] = value;
        setLoginData(newLoginData);
        
    }
    console.log(loginData);
    const handleForm = e => {
        if(loginData.password !== loginData.password2){
            alert("Password did not match!");
            return
        }
        regiserUser(loginData.email, loginData.password, loginData.name, history);
        e.preventDefault();
    }


    return (
        <div>
           <div className="row container">
               <div className="col-md-6 col-12">
                   <h2 className="text-center mt-5">Register</h2>
                   <form className="text-center mt-5" onSubmit={handleForm}>
                       <input onBlur={handleLogInField} className="w-75 mt-2" type="text" name="name" placeholder="Name" />
                       <input onBlur={handleLogInField} className="w-75 mt-2" type="email" name="email" placeholder="Email" />
                       <input onBlur={handleLogInField} className="w-75 mt-2" type="password" name="password" placeholder="Password" />
                       <input onBlur={handleLogInField} className="w-75 mt-2" type="password" name="password2" placeholder="Confirm Password" />
                       <button type="submit" className="w-75 mt-4">Login</button>
                   </form>
                   <p>Already Registerd? <Link to="/login">Register</Link> </p>
               </div>
               <div className="col-md-6 col-12">
                    <img className="w-100 mt-5" src={'https://i.postimg.cc/hvS3Psfy/signin-11.png'} alt="" />
               </div>
           </div>
       </div>
    );
};

export default Register;