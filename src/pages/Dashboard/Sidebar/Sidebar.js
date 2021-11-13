import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import './Sidebar.css';
import { IconContext } from 'react-icons';
import {
    Switch,
    Route,
    useRouteMatch
  } from "react-router-dom";
import useAuth from '../../hooks/useAuth';
import AddCar from '../Admin/AddCar/AddCar';
import AllOrders from '../Admin/AllOrders/AllOrders';
import MakeAdmin from '../Admin/MakeAdmin/MakeAdmin';
import Pay from '../NormalUser/Pay/Pay';
import MyOrders from '../NormalUser/MyOrders/MyOrders';
import CreateReview from '../NormalUser/CreateReview/CreateReview';
import ManageCars from '../Admin/ManageCars/ManageCars';
import AdminRoute from '../../Login/AdminRoute/AdminRoute';

const Sidebar = () => {
    const [sidebar, setSidebar] = useState(false);
    const showSidebar = () => setSidebar(!sidebar);
    const {admin, logOut} = useAuth();
    let { path, url } = useRouteMatch();
    
    return (
      <>
        <div>
            <IconContext.Provider value={{ color: '#fff' }}>
                <div className='sidebarWrap'>
                    <Link to='#' className='menu-bars'>
                        <FaIcons.FaBars onClick={showSidebar} />
                    </Link>
                    <h4 className="ms-3 mt-3 text-white">Dashboard</h4>
                </div>

                <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                    <ul className='nav-menu-items' onClick={showSidebar}>
                        <li className='navbar-toggle'>
                            <Link to='#' className='menu-bars'>
                            <AiIcons.AiOutlineClose />
                            </Link>
                        </li>

                        {admin && <div>
                            
                            <Link className="me-3 nav-text text-decoration-none fw-bold" to={`${url}/addCar`}><AiIcons.AiFillCarryOut className="me-2 fs-4" /> Add Car</Link> <br />
                            <Link className="me-3 nav-text text-decoration-none fw-bold" to={`${url}/allOrders`}><AiIcons.AiFillShopping className="me-2 fs-4" />All Orders</Link> <br />
                            <Link className="me-3 nav-text text-decoration-none fw-bold" to={`${url}/makeAdmin`}><AiIcons.AiFillContacts className="me-2 fs-4" />Make Admin</Link> <br />
                            <Link className="me-3 nav-text text-decoration-none fw-bold" to={`${url}/manageCars`}><AiIcons.AiFillCloseCircle className="me-2 fs-4" />Manage Cars</Link> <br />
                        </div>}

                        {!admin && <div>
                            <Link className="me-3 nav-text text-decoration-none fw-bold" to={`${url}/pay`}><AiIcons.AiFillDollarCircle className="me-2 fs-4" /> Pay</Link>  
                            <br />
                            <Link className="me-3 nav-text text-decoration-none fw-bold" to={`${url}/myOrders`}><AiIcons.AiFillEdit className="me-2 fs-4" /> My Orders</Link>  
                            <br />
                            <Link className="me-3 nav-text text-decoration-none fw-bold" to={`${url}/createReview`}><AiIcons.AiFillEye className="me-2 fs-4" /> Review</Link>  
                            <br />
                        </div>}
                        
                        <div className="side-nav">
                            <button onClick={logOut} className="side-nav-btn">Logout</button> 
                        </div>     
                    </ul>
                </nav>
            </IconContext.Provider>

            <Switch>
                    <Route exact path={path}>
                        <h3 className="default-text mt-5">Please select a topic.</h3>
                    </Route>
                    <AdminRoute path={`${path}/addCar`}>
                        <AddCar></AddCar>
                    </AdminRoute>
                    <AdminRoute path={`${path}/allOrders`}>
                        <AllOrders></AllOrders>
                    </AdminRoute>
                    <AdminRoute path={`${path}/makeAdmin`}>
                        <MakeAdmin></MakeAdmin>
                    </AdminRoute>
                    <Route path={`${path}/pay`}>
                        <Pay></Pay>
                    </Route>
                    <Route path={`${path}/myOrders`}>
                        <MyOrders></MyOrders>
                    </Route>
                    <Route path={`${path}/createReview`}>
                        <CreateReview></CreateReview>
                    </Route>
                    <AdminRoute path={`${path}/manageCars`}>
                        <ManageCars></ManageCars>
                    </AdminRoute>
                </Switch>
        </div>
      </>
    );
  }

export default Sidebar;