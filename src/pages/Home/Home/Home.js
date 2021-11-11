import React from 'react';
import Cars from '../../Cars/Cars';
import Banner from '../Banner/Banner';
import Navigation from '../Navigation/Navigation';

const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Banner></Banner>
            <Cars></Cars>
        </div>
    );
};

export default Home;