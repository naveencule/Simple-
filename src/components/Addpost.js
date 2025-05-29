import axios from 'axios';
import React, { useState } from 'react';
import './Navbar.css';
import { useNavigate } from 'react-router-dom';

function Addpost() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [file, setFile] = useState(null);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('title', title);
    formData.append('description', description);
    if (file) {
      formData.append('file', file);
    }

    axios.post('https://simple-backend-3-i484.onrender.com/addpost', formData)
      .then(result => {
        console.log(result.data);
        if (result.data === 'post added success') {
          navigate('/home');
        } else {
          alert('Failed to add post');
        }
      })
      .catch(err => {
        console.error(err);
        alert('Error while adding post');
      });
  };

  return (
    <div className='mainpost'>
      <div className="headpost"><h3>Create Post</h3></div>
      <div className='post'>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Title"
            onChange={(e) => setTitle(e.target.value)}
          />
          <textarea
            cols="30"
            rows="15"
            placeholder="Description"
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
          <input
            type="file"
            onChange={(e) => setFile(e.target.files[0])}
          />
          <button id='addpost-btn' type="submit">Add Post</button>
        </form>
      </div>
    </div>
  );
}

export default Addpost;
