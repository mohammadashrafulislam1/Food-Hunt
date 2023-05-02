import React from 'react';
import { useLoaderData } from 'react-router-dom';

const BrefPage = () => {
    const chefDetails =useLoaderData();
    console.log(chefDetails)
    return (
        <div>
            
        </div>
    );
};

export default BrefPage;