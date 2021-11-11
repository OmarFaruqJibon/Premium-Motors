
import React, { useState } from 'react';
import { Link , useLocation , useHistory} from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
const Login = () => {
    const {user, authError, userLogin, googleLogin, isLoading} = useAuth();
    const [loginData, setLoginData] = useState({});

    const location = useLocation();
    const history = useHistory();

    const handleLogInField = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = {...loginData};
        newLoginData[field] = value;
        setLoginData(newLoginData);
        console.log(loginData);
    }

    const handleForm = e => {
       
        userLogin(loginData.email, loginData.password, location, history);
        e.preventDefault();
    }

    const handleGoogleLogin = () => {
        googleLogin(location, history);
    }

    return (
       <div>
           <div className="row container">
               <div className="col-md-6 col-12">
                   <h2 className="text-center mt-5">Login</h2>
                   <form className="text-center mt-5" onSubmit={handleForm}>
                       <input onBlur={handleLogInField} className="w-75 mt-2" type="email" name="email" placeholder="Email" />
                       <input onBlur={handleLogInField} className="w-75 mt-2" type="password" name="password" placeholder="Password" />
                       <button type="submit" className="w-75 mt-2">Login</button>
                   </form>
                   <p>New User? <Link to="/register">Register</Link> </p>
                   <p>----------OR----------</p>
                   <button onClick={handleGoogleLogin} type="submit" className="w-75 mt-2">Login with google</button>
               </div>
               <div className="col-md-6 col-12">
                    <img className="w-100 mt-5" src={'https://i.postimg.cc/hvS3Psfy/signin-11.png'} alt="" />
               </div>
           </div>
       </div>
    );
};

export default Login;