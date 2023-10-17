import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function Logout({setLoggedIn}) {
    const redirect=useNavigate()

    const[user,setuser]=useState([]);


    function logconf()
    {
        axios.get('http://127.0.0.1:8000/logout/')
        setLoggedIn('')
        redirect('/login')
        
        
    }
  return (
    <>
    <div>
        <center>
        <h4>ARE YOU WANT LOGOUT??</h4><br/><br/>
        <button className='btn btn-outline-success' onClick={()=>logconf()}>YES</button>
        <button className='btn btn-outline-warning'>NO</button>
        </center>

    </div>
    </>
  )
}