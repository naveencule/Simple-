import React, { useState } from 'react';
import './Login.css';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

// ✅ Important: Allow cookies in Axios
axios.defaults.withCredentials = true;

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const logsubmit = (e) => {
    e.preventDefault();

    axios.post('https://simple-backend-3-i484.onrender.com/login', { email, password })
      .then(result => {
        console.log(result.data);
        if (result.data.Status === 'login success') {
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
