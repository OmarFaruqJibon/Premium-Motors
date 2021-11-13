import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div>
            <img className="w-50" src={'https://i.postimg.cc/Xvp32RGF/404.jpg'} alt=""/>
            <br/>
            <Link to="/"><button className="btn btn-primary">Go to Home</button></Link>
        </div>
    );
};

export default NotFound;