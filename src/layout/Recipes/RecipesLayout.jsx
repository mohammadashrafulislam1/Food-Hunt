import React from 'react';
import { FaBookmark } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

const RecipesLayout = ({r}) => {
    const {recipe_name, img, id, ingredients, method, ratings, chef_id} =r;
    const handleBook =()=>{
     toast("Added to bookmark")
    }
    return (
        <div>
        <div className="card w-96 glass">
  <figure><img className='h-80 w-full' src={img} alt="car!"/></figure>
  <div className="card-body">
    <h2 className="card-title">{recipe_name}</h2>
    <div className="card-actions justify-between items-center">
    <button onClick={handleBook}>
      <FaBookmark></FaBookmark>
      <ToastContainer></ToastContainer>
    </button>
     <Link to={`/recipes/${chef_id}/${id}`}><button className="btn btn-primary">View More</button></Link>
    </div>
  </div>
</div>
        </div>
    );
};

export default RecipesLayout;