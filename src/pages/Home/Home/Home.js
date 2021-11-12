import React from 'react';
import Cars from '../../Cars/Cars';
import Banner from '../Banner/Banner';
import Navigation from '../Navigation/Navigation';
import Reviews from '../Reviews/Reviews';

const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Banner></Banner>
            <Cars></Cars>
            <Reviews></Reviews>
        </div>
    );
};

export default Home;