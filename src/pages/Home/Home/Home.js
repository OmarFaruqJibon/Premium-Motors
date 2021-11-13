import React from 'react';
import AboutUs from '../../AboutUs/AboutUs';
import Footer from '../../Footer/Footer';
import Banner from '../Banner/Banner';
import HomeCars from '../HomeCars/HomeCars';
import HomeTop from '../HomeTop/HomeTop';
import Navigation from '../Navigation/Navigation';
import OurBrands from '../OurBrands/OurBrands';
import Reviews from '../Reviews/Reviews';

const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Banner></Banner>
            <HomeTop></HomeTop>
            <OurBrands></OurBrands>
            <HomeCars></HomeCars>
            <AboutUs></AboutUs>
            <Reviews></Reviews>
            <Footer></Footer>
        </div>
    );
};

export default Home;