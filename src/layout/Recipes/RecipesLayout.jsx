import React, { useState } from 'react';
import { FaBookmark } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const RecipesLayout = ({r}) => {
    const {recipe_name, img, id, ingredients, method, ratings, chef_id} =r;
    const [added, setAdded] = useState();
    const handleBook =()=>{
      alert('Added to BookMark')
      setAdded(true)
    }
    return (
        <div>
        <div className="card w-96 glass">
  <figure><img className='h-80 w-full' src={img} alt="car!"/></figure>
  <div className="card-body">
    <h2 className="card-title">{recipe_name}</h2>
    <div className="card-actions justify-between items-center">
    <button className='btn' disabled={added} onClick={handleBook} >
      <FaBookmark></FaBookmark>
    </button>
     <Link to={`/recipes/${chef_id}/${id}`}><button className="btn btn-primary">View More</button></Link>
    </div>
  </div>
</div>
        </div>
    );
};

export default RecipesLayout;