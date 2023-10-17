import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { NavLink, useNavigate,} from 'react-router-dom'

export default function Show() {
    const[users,setuser]=useState([])

    const redirect = useNavigate()

    async function fetchdata()
    {
        const result=await axios.get('http://127.0.0.1:8000/data/')
        setuser(result.data)
    }

    useEffect(()=>{fetchdata()},[])
  return (
    <>

    <table className='table table-stiped'>
        <thead>
            <tr>
                <th>IMAGE</th>
                <th>EID</th>
                <th>ENAME</th>
                <th>NUMBER</th>
                <th>MAIL</th>
                <th>ADD</th>
                <th>ACTION</th>

            </tr>
        </thead>
        <tbody>
           {
            users.map(obj=>{return(
                <tr>
                    <td><img src={obj.photo} width="100px" height="100px"/></td>
                    <td>{obj.eid}</td>
                    <td>{obj.ename}</td>
                    <td>{obj.phone}</td>
                    <td>{obj.mail}</td>
                    <td>{obj.add}</td>
                    <td>
                        <NavLink to={`/update/${obj.id}`}><button className='btn btn-warning'>UPDATE</button></NavLink>
                        <NavLink to={`/delete/${obj.id}`}><button className='btn btn-danger'>DELETE</button></NavLink>

                    
                    </td>
                </tr>
            )})
           }
        </tbody>
    </table>

    </>
  )
}
