import React from 'react';

const Blog = () => {
    return (
        <div className='lg:m-40 m-3'>
     <div className='border border-2 lg:p-16 p-3 mt-3'>
        <h1 className='text-3xl'>Tell us the differences between uncontrolled and controlled components.</h1><hr /> <br />
        <p>Controlled components have sate and behavior which is controlled by parent components, while Uncontrolled components manage their own state.</p>
    </div> 

    <div className='border border-2 lg:p-16 p-3 mt-3'>
        <h1 className='text-3xl'>How to validate React props using PropTypes.</h1><hr /> <br />
        <p>To validate React props using PropTypes:

   Import the PropTypes package from the "prop-types" library. Declare the expected props and their data types using the PropTypes object. Add the PropTypes validation to the component propTypes property.</p>
    </div> 

    <div className='border border-2 lg:p-16 p-3 mt-3'>
        <h1 className='text-3xl'>Tell us the difference between nodejs and express js.</h1><hr /> <br />
        <p>Node.js is a JavaScript runtime environment that allows developers to run JavaScript code outside of a web browser. Express.js, on the other hand, is a web application framework built on top of Node.js that simplifies the process of creating web applications and APIs by providing features such as routing, middleware, and template engines.</p>
    </div>

    <div className='border border-2 lg:p-16 p-3 mt-3'>
        <h1 className='text-3xl'>What is a custom hook, and why will you create a custom hook?</h1><hr /> <br />
        <p>A custom hook is a reusable function in React that can help manage state and logic across multiple components. WE create a custom hook to avoid repeating the same code in different components and make your code more organized and efficient.</p>
    </div>
        </div>
    );
};

export default Blog;