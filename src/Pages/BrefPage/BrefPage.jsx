import React, { useEffect, useState } from 'react';
import { FaHeart } from 'react-icons/fa';
import { useLoaderData } from 'react-router-dom';
import RecipesLayout from '../../layout/Recipes/RecipesLayout';

const BrefPage = () => {
    const chefDetails =useLoaderData();
    const {picture, name, likes, bio, num_recipes, experience_years, id} = chefDetails;
    const [recipes, setRecipes]  =useState();
    
    useEffect(()=>{
        fetch(`https://food-hunt-server-mohammadashrafulislam1.vercel.app/recipes/${id}`)
        .then(res => res.json())
        .then(data => setRecipes(data))
    })
    return (<>
        <div style={{backgroundColor:'#000080'}} className='p-10'>
      <div className="hero text-white">
  <div className="hero-content flex-col lg:flex-row">
    <img src={picture} className="max-w-sm rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-5xl font-bold">{name}</h1> <br />
     <div>
     <p className='flex items-center gap-2'><b>Likes:</b> <FaHeart></FaHeart> {likes}</p>
     <p><b>YEARS OF EXPERIENCE:</b> {experience_years}</p>
     <p><b>NUMBERS OF RECIPES:</b> {num_recipes}</p>
     <p className="py-6">{bio}</p>
     </div>
    </div>
  </div>
  </div>
  </div> 
  <div className='flex gap-5 p-10'>
  {
    recipes?.map(r => <RecipesLayout key={r.id} r={r}></RecipesLayout>)
  }
  </div>
  </>
    );
};

export default BrefPage;