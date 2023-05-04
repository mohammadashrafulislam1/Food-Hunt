import React from 'react';
import Banner from './Banner';
import Chef from './Chef';
import SectionTwo from './SectionTwo';
import Contact from '../Contact/Contact';

const Home = () => {
    return (
        <div>
        <Banner></Banner>
        <Chef></Chef>
        <SectionTwo></SectionTwo>
        <Contact></Contact>
        </div>
    );
};

export default Home;