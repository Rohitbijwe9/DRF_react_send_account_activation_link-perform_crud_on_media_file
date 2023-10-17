import React from 'react'
import { useForm } from 'react-hook-form'
import axios from 'axios'
import { NavLink, useNavigate,} from 'react-router-dom'




export default function Employee() {

    const redirect = useNavigate()

    const{register,handleSubmit}=useForm();

    function save(data)
    {
      data.photo= data.photo[0]
      axios.post('http://127.0.0.1:8000/data/',data,{headers:{'Content-Type':'multipart/form-data'}})

      redirect('/show/')

        

    }
  return (
    <>
    <form onSubmit={handleSubmit(save)} encType='multipart/form-data' className='container'>
        <label>ENTER EMPLOYEE ID:</label>
        <input type='number' placeholder='enter employee id' className='form-control'
        {...register('eid')}/><br/><br/>

        <label>ENTER EMPLOYEE NAME:</label>
        <input type='text' placeholder='enter employee name' className='form-control'
        {...register('ename')}/><br/><br/>

        <label>ENTER EMPLOYEE NUMBER:</label>
        <input type='phone' placeholder='enter employee phone' className='form-control'
        {...register('phone')}/><br/><br/>

        <label>ENTER EMPLOYEE MAIL:</label>
        <input type='email' placeholder='enter employee mail' className='form-control'
        {...register('mail')}/><br/><br/>

        <label>ENTER EMPLOYEE ADDRESS:</label>
        <input type='text' placeholder='enter employee address' className='form-control'
        {...register('add')}/><br/><br/>

        <label>UPLOAD EMPLOYEE PHOTO:</label>
        <input type='file'  className='form-control'

        {...register('photo')}/><br/><br/>




        <input type='submit' value={'ADD DATA'} className='btn btn-outline-success col-6'/>
        <input type='reset' value={'RESET'} className='btn btn-outline-warning col-6'/>

        




    </form>
    </>
  )
}
