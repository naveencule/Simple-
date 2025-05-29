import React,{useContext} from 'react';
import {Link,useNavigate} from 'react-router-dom'
import './Navbar.css'
import {userContext} from '../App'
import axios from 'axios';

function Navbar(props) {
    // const  user = useContext(userContext)
    const navigate = useNavigate();

    const handlelogout = ()=>{
       axios.get('https://simple-backend-3-i484.onrender.com/logout')
        .then(res =>{
                if(res.data === "cookie cleared")
            navigate('/login')
        })
        .catch(err => console.log(err))

    }
    return (
        <div className='main'>
            <div className="logo">
                <h2>Simply post</h2>
            </div>
            <div className="links">
              <a href="">  <Link to="https://simple-backend-3-i484.onrender.com/home">Home</Link></a>
                <a href=""><Link to="https://simple-backend-3-i484.onrender.com/addpost">Add Post</Link></a>
                <a href=""><Link to="/" onClick={handlelogout}>Logout</Link></a>

            </div>

            
        </div>
    );
}

export default Navbar;