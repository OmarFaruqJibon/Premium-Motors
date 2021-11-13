import React from 'react';
import './HomeTop.css';

const HomeTop = () => {
    return (
        <div className="container">
            <div className="home-top-header">
                <p>HELPS YOU TO FIND YOUR NEXT CAR EASILY</p>
                <h1 className="fw-bolder">Welcome to <span className="def-clr">Premium Cars</span> </h1>
            </div>

            <div className="home-top">
                <div className="row container gy-4 gx-md-5 home-top-body">
                    <div className="col-md-4 col-12 p-2">
                        <div>
                            <div>
                                <img src={'https://i.postimg.cc/sD2rrD84/car-1.png'} alt="" />
                            </div>
                            <p className="fw-bold">WE OFFERS LOWER CARS PRICES</p>
                            <p><small>Fruitful seed female multiply lights blessed above Bearing in so two every together forth so can't seas darkness years rule.</small></p>
                        </div>
                    </div>

                    <div className="col-md-4 col-12 p-2">
                        <div>
                            <div>
                                <img src={'https://i.postimg.cc/XNLbmy2v/trade.png'} alt="" />
                            </div>
                            <p className="fw-bold">LARGEST CARS DEALERSHIP</p>
                            <p><small>Evening together evening given fill upon darkness, i were lesser first fly. Had divide him called seas first after night god.</small></p>
                        </div>
                    </div>

                    <div className="col-md-4 col-12 p-2">
                        <div>
                            <div>
                                <img src={'https://i.postimg.cc/59YtByPk/car.png'} alt="" />
                            </div>
                            <p className="fw-bold">MULTIPOINT SAFETY CHECKS OFFERS</p>
                            <p><small>Also sixth be replenish third our also their moving unto hath whales beginning unto set you'll us let above dry shall greater..</small></p>
                        </div>
                    </div>
                    
                </div>
                <div className="home-top-car">
                    <img className="w-100" src={'https://i.postimg.cc/wMBM9Jkx/car-min.png'} alt="" />
                </div>
            </div>
        </div>













    );
};

export default HomeTop;