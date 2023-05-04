import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaBeer, FaEye, FaEyeSlash, FaGithub, FaGoogle } from 'react-icons/fa';
import { AuthContext } from '../provider/AuthProvider';

const Login = () => {
    const [error, setError] = useState();
    const [show, setShow] = useState();
    const navigate = useNavigate();
    const location = useLocation();
    console.log(location)
    const from = location.state?.from?.pathname || '/';
    const {signIn, handleLoginWithGoogle, handleLoginWithGithub} = useContext(AuthContext)
    const handleLogIn = event =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)
        setError();
        signIn(email, password)
        .then(result =>{
          const createdUser = result.user;
          console.log(createdUser)
          navigate(from, {replace:true})
    })
    .catch((error) => {
      setError(error.message);
    });
    };
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
  <div className="hero-content">
    <form onSubmit={handleLogIn} className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <div className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name='email' placeholder="email" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
        <div className='flex relative'>
        <input type={show? 'text':'password'}  name='password' placeholder="password" className="input input-bordered" /> 
          <span className='absolute right-0 pt-4 pe-2' onClick={()=>setShow(!show)}>{
                show? <FaEyeSlash></FaEyeSlash>:<FaEye></FaEye>
            }</span>
        </div>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
        <p>Not a member? <Link to='/register'>Register</Link></p>
        <p className='text-red-500'>{error}</p>

        <p className='text-center'><hr /> Or <hr /></p>
        <button className="btn btn-outline btn-primary" onClick={handleLoginWithGoogle}><FaGoogle className='pe-1'></FaGoogle><span>LogIN with Google</span></button>
        <button className="btn btn-outline" onClick={handleLoginWithGithub}><FaGithub className='pe-1'></FaGithub><span>LogIN with GitHub</span></button>

      </div>


    </form>
  </div>
</div>
        </div>
    );
};

export default Login;