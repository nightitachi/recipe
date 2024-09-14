import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';  // Import Link from react-router-dom

function Registration() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();  
    axios.post('http://localhost:3001/auth/register', { username, password })
      .then(result => {
        navigate('/auth/Login')
        console.log(result.data)
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <div className='d-flex justify-content-center align-items-center vh-100'>
      <div className='p-3 border border-1'>
        <h3>Register</h3>
        <form onSubmit={handleSubmit}>
          <div className='mb-3'>
            <label htmlFor='username' className='form-label'>Username</label>
            <input
              type='text'
              id='username'
              className='form-control'
              placeholder='Enter username'
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className='mb-3'>
            <label htmlFor='password' className='form-label'>Password</label>
            <input
              type='password'
              id='password'
              className='form-control'
              placeholder='Enter password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type='submit' className='btn btn-success'>Submit</button>

           <Link to='/auth/login'>
            <button type='button' className='btn btn-default w-100 mt-2'>Login</button>
          </Link>
        </form>
      </div>
    </div>
  );
}

export default Registration;
