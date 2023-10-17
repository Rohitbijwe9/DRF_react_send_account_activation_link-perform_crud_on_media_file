import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Navbar from './Component/Navbar';
import Signup from './Component/Signup';
import Login from './Component/Login';
import Logout from './Component/Logout';
import { useState } from 'react';
import Home from './Component/Home';
import Show from './Component/data/Show';
import Employee from './Component/data/Employee';
import Update from './Component/data/Update';
import Delete from './Component/data/Delete';

function App() {
  const[isLoggedIn,setLoggedIn]=useState('')
  console.log(isLoggedIn)
  return (
    <>
    <BrowserRouter>
    <Navbar isLoggedIn={isLoggedIn}/>
    <Routes>
      
      <Route path='/navbar' element={<Navbar/>}/>

      <Route path='/signup' element={<Signup/>}/>
      <Route path='/login' element={<Login setLoggedIn={setLoggedIn}/>}/>
      <Route path='/logout' element={<Logout setLoggedIn={setLoggedIn}/>}/>
      <Route path='/home' element={<Home/>}/>


     <Route path='/show' element={<Show/>}/>
     <Route path='/add' element={<Employee/>}/>
     <Route path='/update/:pk' element={<Update/>}/>
     <Route path='/delete/:pk' element={<Delete/>}/>


    </Routes>
    </BrowserRouter>

    </>
  );
}

export default App;