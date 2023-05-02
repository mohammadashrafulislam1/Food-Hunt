import React from 'react';

const Banner = () => {
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: `url("https://c.pxhere.com/images/0d/18/692b96c4b089507219cf7247a57f-1621684.jpg!d")` }}>
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">no matter how you cook, Yumma has many the recipes</h1>
            <p className="mb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam quis, quam aliquam laborum vitae iste, est magni ex repellat nihil architecto alias quisquam assumenda. At ad error cumque eaque atque!</p>
            <button className="btn btn-primary">Explore Recipes</button>
          </div>
        </div>
      </div>
    );
};

export default Banner;