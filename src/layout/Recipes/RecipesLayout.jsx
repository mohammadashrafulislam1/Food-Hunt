import React from 'react';

const RecipesLayout = ({r}) => {
    const {recipe_name, img, id, ingredients, method, ratings} =r;
    return (
        <div>
        <div className="card w-96 glass">
  <figure><img className='h-80 w-full' src={img} alt="car!"/></figure>
  <div className="card-body">
    <h2 className="card-title">{recipe_name}</h2>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Learn now!</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default RecipesLayout;