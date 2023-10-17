import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';
import { useNavigate, useParams } from 'react-router-dom'


export default function Delete() {
    const{pk}=useParams();

    const redirect=useNavigate();

    const[user,setuser]=useState({});

    async function fetchuser()
    {
        const result=await axios.get(`http://localhost:8000/data/${pk}/`)
        console.log(result.data);
        setuser(result.data);
    }

    function deleconf()
    {
        axios.delete(`http://localhost:8000/data/${pk}/`)
        redirect ('/show/')
    }

    useEffect(()=>{fetchuser()},[])

  return (
    <>
    <center>
        <h1>DELETE CONFORMATION</h1>
        <h4>ARE YOU WANT TO DELETE THIS DATA?</h4>
        <button className='btn btn-danger' onClick={()=>(deleconf())}>YES</button>
        <NavLink to={'/show/'}><button className='btn btn-success'>NO</button></NavLink>

    </center>
    </>
  )
}
