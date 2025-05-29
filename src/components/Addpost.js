import axios from 'axios';
import React, { useState, useEffect } from 'react';
import './Navbar.css';
import { useNavigate } from 'react-router-dom';

function Addpost() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [file, setFile] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    // Check if the user is logged in using verifyuser
    axios.get('https://simple-backend-3-i484.onrender.com/home', { withCredentials: true })
      .then(res => {
        if (res.data.email) {
          setIsAuthenticated(true);  // User is logged in
        } else {
          alert('Please login to upload a post');
          navigate('/login');
        }
      })
      .catch(err => {
        console.log(err);
        alert('Please login to upload a post');
        navigate('/login');
      });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!isAuthenticated) {
      alert("You must be logged in to submit a post.");
      navigate('/login');
      return;
    }

    const formData = new FormData();
    formData.append('title', title);
    formData.append('description', description);
    formData.append('file', file);

    axios.post('https://simple-backend-3-i484.onrender.com/addpost', formData, {
      withCredentials: true
    })
      .then(result => {
        console.log(result.data);
        if (result.data === 'post added success') {
          navigate('/home');
        }
      })
      .catch(err => console.log(err));
  };

  return (
    <div className='mainpost'>
      <div className="headpost"><h3>Create Post</h3></div>
      <div className='post'>
        <form onSubmit={handleSubmit}>
          <input type="text"
            placeholder='title'
            onChange={(e) => setTitle(e.target.value)} />

          <textarea
            cols="30"
            rows="15"
            placeholder='description'
            onChange={(e) => setDescription(e.target.value)} ></textarea>

          <input type="file"
            onChange={(e) => setFile(e.target.files[0])} />

          <button id='addpost-btn' type='submit'>Add Post</button>
        </form>
      </div>
    </div>
  );
}

export default Addpost;
