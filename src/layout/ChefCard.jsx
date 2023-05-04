import React from 'react';
import { FaHeart } from 'react-icons/fa';
import LazyLoad from 'react-lazy-load';
import { Link } from 'react-router-dom';

const ChefCard = ({chef}) => {
    const {name, picture, bio, likes, experience_years, num_recipes, id} =chef;
    return (
        <div className='my-5'>
            <div className="card bg-base-100 shadow-xl">
  <figure><LazyLoad offset={300}><img className='lg:h-60 w-full' src={picture} alt="Shoes" /></LazyLoad></figure>
  <div className="card-body">
    <h2 className="card-title">{name}</h2>
    <p>{bio.length < 50 ? <>{bio}</>:<>{bio.slice(0,50)}..</>}</p>
    <hr />
    <p>Years Of Experience: {experience_years}</p>
    <hr />
    <p>Numbers Of Recipes: {num_recipes}</p>
    <p>{}</p>
    <div className="card-actions items-center justify-between">
    <div className='flex items-center gap-3'><FaHeart></FaHeart><span>{likes}</span></div>
      <Link to={`/chef/${id}`}><button className="btn btn-primary">View More</button></Link>
    </div>
  </div>
</div>
        </div>
    );
};

export default ChefCard;