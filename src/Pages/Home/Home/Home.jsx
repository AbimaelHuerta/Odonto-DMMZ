import React from 'react';
import Feature from '../../../components/Feature/Feature';
import Service from '../../../components/Service/Service';
import Banner from '../Banner/Banner';

const Home = () => {

    return (
        <>
           <Banner />
           <Feature />
           {/* <About /> */}
           <Service />
           {/* <Promo /> */}
        </>
    );
};

export default Home;