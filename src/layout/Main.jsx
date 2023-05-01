import React from 'react';
import Navigation from '../shared/Navigation';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;