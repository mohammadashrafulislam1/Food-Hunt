import React, { useEffect, useState } from 'react';
import ChefCard from '../layout/ChefCard';

const Chef = () => {
    const [chefs, setChefs] = useState();
    useEffect(()=>{
        fetch('https://food-hunt-server-mohammadashrafulislam1.vercel.app/chef')
        .then(res => res.json())
        .then(data => setChefs(data))
    })
    return (
        <div className='grid lg:grid-cols-4 gap-5 m-5'>
        {
            chefs?.map(chef => <ChefCard key={chef.id} chef={chef}></ChefCard>)
        }
        </div>
    );
};

export default Chef;