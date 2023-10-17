import React from 'react'
import {useForm} from 'react-hook-form'
import {useNavigate} from 'react-router-dom';
import axios from 'axios';










export default function Signup() {

  const{register,handleSubmit}=useForm();
  const redirect=useNavigate()

  function add(data)
{

    axios.post('http://127.0.0.1:8000/auth_app/signup/',data)
    redirect('/login')
    
}

  return (
   <>
   <form onSubmit={handleSubmit(add)}>
    <label>ENTER USERNAME:</label><br/><br/>
    <input type='text' placeholder='enter username' className='form-control'
    {...register('username')}/><br/><br/>

    <label>ENTER EMAIL:</label><br/><br/>
    <input type='email' placeholder='enter email' className='form-control'
    {...register('email')}/><br/><br/>

    <label>ENTER PASSWORD:</label><br/><br/>
    <input type='password' placeholder='enter password' className='form-control'
    {...register('password')}/><br/><br/>

    <input type='submit' value={'SignUp'} className='btn btn-outline-success'/>



    <br></br>
   </form>
   </>
  )
}
