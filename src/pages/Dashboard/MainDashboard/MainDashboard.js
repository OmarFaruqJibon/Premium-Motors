import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './MainDashboard.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    useParams,
    useRouteMatch
  } from "react-router-dom";
import Pay from '../NormalUser/Pay/Pay';
const MainDashboard = () => {
    const {admin} = useAuth();
    let { path, url } = useRouteMatch();
    return (
        <div>
            

            <div className="row">
                <div className="col-md-3 col-12 dashboard-nav">
                    <h1 className="my-5">Dashboard</h1>
                    {admin && <div>
                        <Link className="me-3 text-decoration-none fw-bold" to="/addCar">Add Car</Link> <br />
                        <Link className="me-3 text-decoration-none fw-bold" to="/allOrders">All Orders</Link> <br />
                        <Link className="me-3 text-decoration-none fw-bold" to="makeAdmin">Make Admin</Link> <br />
                        <Link className="me-3 text-decoration-none fw-bold" to="">Manage Cars</Link> <br />
                        <Link className="me-3 text-decoration-none fw-bold">Logout</Link> 
                    </div>}

                    {!admin && <div>
                        <Link className="me-3 text-decoration-none fw-bold" to={`${url}/pay`}>Pay</Link>  <br />
                        <Link className="me-3 text-decoration-none fw-bold" to="/myOrders">My Orders</Link>  <br />
                        <Link className="me-3 text-decoration-none fw-bold" to="/createReview">Reviews</Link>  <br />
                        <Link className="me-3 text-decoration-none fw-bold">Logout</Link> 
                    </div>}
                </div>

                <div className="col-12 col-md-9">
                <Switch>
                    <Route exact path={path}>
                        <h3>Please select a topic.</h3>
                    </Route>
                    <Route path={`${path}/pay`}>
                        <Pay></Pay>
                    </Route>
                </Switch>
                </div>
            </div>
            



           

        </div>
    );
};

export default MainDashboard;