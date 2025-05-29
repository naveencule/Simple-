import {createContext,useEffect, useState} from 'react'
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Signup from './components/Signup';
import Login from './components/Login';
import Navbar from './components/Navbar';
import Home from './components/Home';
import axios from 'axios';
import Addpost from './components/Addpost';
import ViewPost from './components/ViewPost';
import EditPost from './components/EditPost';

// export const userContext = createContext()



function App() {
  // const [user,setUser]=useState();
  // axios.defaults.withCredentials=true;
  // useEffect(() => {
  //   axios.get('http://localhost:3001/home')
  //     .then(user => {
  //       console.log(user);
  //       setUser(user.data)
  //     })
  //     .catch(err => console.log(err))
  // });
  return (
    <div>
      {/* <userContext.Provider value={user}> */}
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path='/' element={<Signup/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/home' element={<Home/>}></Route>
        <Route path='/addpost' element={<Addpost/>}></Route>
        <Route path='/viewpost/:id' element={<ViewPost/>}></Route>
        <Route path='/editpost/:id' element={<EditPost/>}></Route>
        {/* <Route path='/signup' element={<Signup/>}></Route> */}
      </Routes>
    </BrowserRouter>
      
    {/* </userContext.Provider> */}
    </div>
  );
}

export default App;
