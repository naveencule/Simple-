import React, { useState } from 'react';
import './Login.css';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

// Set this globally once, outside the component or in your main app entry point
axios.defaults.withCredentials = true;

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const logsubmit = (e) => {
    e.preventDefault();

    axios.post('http://localhost:3001/login', { email, password })
      .then(result => {
        console.log(result.data);

        if (result.data.Status === 'login success') {
          // Navigate after login success
          navigate('/home');
        } else {
          alert(result.data.msg || 'Login failed');
        }
      })
      .catch(err => {
        console.error(err);
        alert('An error occurred while logging in');
      });
  };

  return (
    <div className='main'>
      <div className="container">
        <div className="Head">
          <h2>Login</h2>
        </div>
        <form onSubmit={logsubmit}>
          <div className="input-sec">
            <input
              type="text"
              placeholder='Enter email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder='Enter password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          {/* Use a button of type submit, not Link */}
          <button id='log-btn' type='submit'>Login</button>
        </form>
        <p>
          New user? <br />
          Click here to create an account{' '}
          <Link to="/" id='sign-btn'>Signup</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
