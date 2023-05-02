import React from 'react';
import Navigation from '../shared/Navigation';
import { Outlet } from 'react-router-dom';
import Footer from '../shared/Footer';

const Main = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;