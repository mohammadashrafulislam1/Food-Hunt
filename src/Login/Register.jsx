import React, { useContext, useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';
import { getAuth, updateProfile } from 'firebase/auth';
import app from '../../firebase.config';

const Register = () => {
    const {createUser} = useContext(AuthContext);
    const [error, setError] = useState();
    const [success, setSuccess] = useState();
    const [show, setShow] = useState();
    const handleRegister = event =>{
        event.preventDefault();
        // console.log(auth)
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        if(password.length < 6){
            setError('Please provide at least 6 character');
            return;
        }
        else if(password.length ===0 || email.length === 0 ){
            setError('Set Both Email and Password')
            return;
        }
        const name = form.name.value;
        const url = form.url.value;
        console.log(name, url);
        setError()
        createUser(email, password)
        .then(result =>{
            const createdUser = result.user;
            updateProfile(createdUser, {
              displayName: name,
              photoURL: url
            }).then(() => {
              setSuccess('User account created successfully');
            }).catch((error) => {
              setError(error.message);
            });
        })
        .catch(error =>{
            setError(error.message)
        });
       
        
    }
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
  <div >
    <form onSubmit={handleRegister} className="card shadow-2xl bg-base-100">
      <div className="card-body">
      <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" name='name' placeholder="name" className="input input-bordered" />
        </div>
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
        <div className="form-control">
          <label className="label">
            <span className="label-text">Photo Url</span>
          </label>
          <input type="text" name='url' placeholder="photo url" className="input input-bordered" />
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Register</button>
        </div>
        <p>Already a member? <Link to='/login'>Login</Link></p>
        <p className='text-red-500'>{error}</p>
        <p className='text-green-500'>{success}</p>
      </div>
    </form>
  </div>
</div>
        </div>
    );
};

export default Register;