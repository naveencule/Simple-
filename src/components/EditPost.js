import axios from 'axios';
import React,{useState, useEffect}from 'react';
import './Navbar.css'
import { useNavigate, useParams } from 'react-router-dom';

function EditPost(props) {
    const [title,setTitle]=useState()
    const [description,setDescription]=useState()
    const {id} = useParams()

    const navigate = useNavigate()
    
    const handleSubmit =(e)=>{
        e.preventDefault()
    
        axios.put('http://localhost:3001/editpost/'+id, {title, description})
        .then(result =>{ console.log(result)
                alert('post updated')
                navigate('/home')})
       .catch(err => console.log(err))

    }
    useEffect(()=>{
        axios.get('http://localhost:3001/viewpost/'+id)
        .then(result =>{ setTitle(result.data.title)
            setDescription(result.data.description)})
        .catch(err => console.log(err))
    },[])

    return (
        <div className='mainpost'>
           <div className="headpost"> <h3>Update Post</h3></div>
            <div className='post'>
                <form action="">
                    <input type="text"
                     name="" id="" placeholder='title'
                     value={title}
                     onChange={(e)=>setTitle(e.target.value)}/>
                    <textarea name="desc"
                     id="desc" cols="30" rows="15" 
                     placeholder='description'
                     value={description}
                     onChange={(e)=>setDescription(e.target.value)} ></textarea>
                   
                    <button id='addpost-btn' onClick={handleSubmit}>update</button>
                </form>
            </div>
           
        </div>
    );
}

export default EditPost;