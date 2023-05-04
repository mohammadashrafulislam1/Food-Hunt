import React, { useEffect, useState } from 'react';
import Rating from 'react-rating';
import { Link, useLoaderData } from 'react-router-dom';
import { FaRegStar, FaStar } from 'react-icons/fa';

const Details = () => {
    const details = useLoaderData();
    const [chef, setChef] = useState();
    const {recipe_name, img, id, ingredients, method, ratings, chef_id} = details;
    useEffect(()=>{
      fetch(`https://food-hunt-server-mohammadashrafulislam1.vercel.app/chef/${chef_id}`)
      .then(res => res.json())
      .then(data => setChef(data))
    },[]);
    console.log(chef)
    return (
        <div>
        <div className="hero" style={{ backgroundImage: `url(${img})` }}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">{recipe_name}</h1>
      <p className="mb-5"><Rating className='me-2'
      placeholderRating={ratings}
      emptySymbol={<FaRegStar></FaRegStar>}
      fullSymbol={<FaStar></FaStar>}
      placeholderSymbol={<FaStar className='text-warning'></FaStar>}
      readonly
      >
        </Rating>{ratings}</p>
    </div>
  </div>
      </div>
{/* Method and ingredient */}
      <div className='lg:flex my-11 mx-3'>
        <div className='lg:w-3/4 border border-2	border-cyan-500 rounded-lg p-5 lg:mx-5 mb-5'>
        <h3 className='text-3xl font-bold'>Mehtods:</h3>
          <br />
          <p>{method}</p>
        </div>
        <div className='border border-2	border-cyan-500 rounded-lg p-5'>
          <h3 className='text-3xl font-bold'>Ingredients:</h3>
          <br />
          {
            ingredients.map(i => <li key={i.id}>{i}</li>)
          }
        </div>
      </div>
 {/* Author of Recipe */}
 
 <div className="card w-96 bg-base-100 shadow-xl m-10">
  <figure className="px-10 pt-10">
    <img src={chef?.picture} alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{chef?.name}</h2>
    <div className="card-actions">
      <Link to={`/chef/${chef_id}`}>
      <button className="btn btn-primary" >View</button></Link>
    </div>
  </div>
</div>
        </div>
    );
};

export default Details;