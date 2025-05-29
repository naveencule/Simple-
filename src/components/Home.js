import React, { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import './Navbar.css';

function Home(props) {
  const navigate = useNavigate();
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // First, verify if the user is logged in
    axios.get('https://simple-backend-3-i484.onrender.com/home', { withCredentials: true })
      .then(res => {
        if (res.data === "token is not available" || res.data === "wrong token") {
          navigate('/login');  // redirect to login if not authenticated
        } else {
          // Now fetch posts if the user is authenticated
          axios.get('https://simple-backend-3-i484.onrender.com/getposts')
            .then(result => {
              setPosts(result.data);
            })
            .catch(err => console.log(err));
        }
      })
      .catch(err => {
        console.log(err);
        navigate('/login');  // redirect on error too
      });
  }, [navigate]);

  return (
    <div className='home-main'>
      {posts.map((post) => (
        <Link to={`/viewpost/${post._id}`} className="postlink" key={post._id}>
          <div className="post-display">
            <img src={`https://simple-backend-3-i484.onrender.com/Images/${post.file}`} alt="" />
            <div className="post-dis-text">
              <h2>{post.title}</h2>
              <p>{post.description}</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default Home;
