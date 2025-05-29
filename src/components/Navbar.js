import React,{useContext} from 'react';
import {Link,useNavigate} from 'react-router-dom'
import './Navbar.css'
import {userContext} from '../App'
import axios from 'axios';

function Navbar(props) {
    // const  user = useContext(userContext)
    const navigate = useNavigate();

    const handlelogout = ()=>{
       axios.get('http://localhost:3001/logout')
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
              <a href="">  <Link to="/home">Home</Link></a>
                <a href=""><Link to="/addpost">Add Post</Link></a>
                <a href=""><Link to="/" onClick={handlelogout}>Logout</Link></a>

            </div>

            
        </div>
    );
}

export default Navbar;