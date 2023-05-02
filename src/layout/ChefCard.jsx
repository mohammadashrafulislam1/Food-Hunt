import React from 'react';
import { FaHeart } from 'react-icons/fa';

const ChefCard = ({chef}) => {
    const {name, picture, bio, likes, experience_years, num_recipes} =chef;
    return (
        <div className='my-5'>
            <div className="card bg-base-100 shadow-xl">
  <figure><img className='lg:h-60 w-full' src={picture} alt="Shoes" /></figure>
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
      <button className="btn btn-primary">View More</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default ChefCard;