import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Navigarion.css';

const Navigation = () => {
    const {user, logOut} = useAuth();
    return (
        <div>
            <div className="nav-bg">
            <nav className="navbar navbar-expand-lg navbar-light container">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div>
                        <Link to="/"><img className="me-md-5" src={'https://i.postimg.cc/FRL4QRST/logo-1.png'} alt="" /></Link>
                        
                    </div>
                    <div className="collapse navbar-collapse" id="navbarText">
                        <div className="navbar-nav me-auto mb-2 mb-lg-0">
                                <Link className="nav-item my-nav" to="/home">Home</Link>
                                <Link className="nav-item my-nav" to="/cars">Cars</Link>
                                <Link className="nav-item my-nav" to="/dashboard">Dashboard</Link>
                                {/* <Link className="nav-item my-nav" to="/about">About</Link>
                                <Link className="nav-item my-nav" to="/contact">Contact</Link> */}
                        </div>

                        <span className="navbar-text">
                            
                                {user.email ?
                                <><i className="fas fa-user-circle me-2 text-light"></i><span className="text-light">{user.displayName} </span> <button onClick={logOut} className="nav-btn me-2">Log out</button>
                                </>:
                                <Link to="/login"><button className="nav-btn">Log In</button></Link>
                                }
                        </span>
                    </div>
                </div>
            </nav>
        </div>
        </div>
    );
};

export default Navigation;