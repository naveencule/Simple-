import React, { useState } from 'react';
import './Signup.css';
import { Link } from 'react-router-dom';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

const Signup = () => {
    const [name,setName]=useState()
    const [email,setEmail]=useState()
    const [password,setPassword]=useState()
    const navigate = useNavigate()

    const signsubmit=(e)=>{
        e.preventDefault()
        axios.post('http://localhost:3001/',{name,email,password})
        .then(result => {console.log(result)
            navigate('/home')})
        .catch(err => console.log(err))
    }
    return (
        <div className='main'>
        <div className="container">
          <div className="Head">
              <h2>Signup</h2>
              </div>
              <form action="">
                
                 <div className="input-sec">
                 <input type="text" 
                  name="" id="" 
                  placeholder='Enter username'
                  onChange={(e)=>setName(e.target.value)}/>

                  <input type="text" 
                  name="" id="" 
                  placeholder='Enter email'
                  onChange={(e)=>setEmail(e.target.value)}/>

                  <input type="password" 
                  name="" id="" 
                  placeholder='Enter password'
                  onChange={(e)=>setPassword(e.target.value)}/>
                  </div>
                  <Link to="/home" id='log-btn' type="submit" onClick={signsubmit}> Signup</Link>
                  </form>
                  <p> Already have an account
                      <Link to="/login"
                      id='sign-btn'  type="submit">Login</Link>
                  </p>
              
         
      </div>
      
  </div>
    );
};

export default Signup;