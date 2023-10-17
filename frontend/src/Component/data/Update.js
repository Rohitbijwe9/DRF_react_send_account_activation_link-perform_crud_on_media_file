import axios from 'axios';
import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom'

export default function Update() {

    const{pk}=useParams();

    const redirect=useNavigate();

    const{register,handleSubmit,setValue}=useForm({});

   async function fetchuser()
    {
        const result=await axios.get(`http://127.0.0.1:8000/data/${pk}/`)
        setValue('eid',result.data.eid)
        setValue('ename',result.data.ename)
        setValue('phone',result.data.phone)
        setValue('mail',result.data.mail)
        setValue('add',result.data.add)
        setValue('photo',result.data.photo)


    }

    function savedata(data)
    {
        data.photo= data.photo[0]
        axios.put(`http://127.0.0.1:8000/data/${pk}/`,data,{headers:{'Content-Type':'multipart/form-data'}})
        redirect('/show')


    }

    useEffect(()=>{fetchuser()},[])



  return (
   <>
    <form onSubmit={handleSubmit(savedata)} encType='multipart/form-data' className='container'>
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
