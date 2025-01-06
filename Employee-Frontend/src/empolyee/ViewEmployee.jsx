import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

function ViewEmployee() {
   
  const [employee,setEmployee]=useState({
    username:"",
    email:"",
    mobileno:"",
    department:""
  })

  const {id}=useParams();

  useEffect(()=>{
    loadEmployee();
  },[]);

  const loadEmployee=async ()=>{
    const result =await axios.get(`http://localhost:8080/employeemanagement/${id}`)
    setEmployee(result.data)
  }

  return (
    
        <div className="container" >
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
      <h2 className='text-center m-4'>Employee Details</h2>

     <div className="card" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center',}}>
      <div className="card-header">
        Details of employee id:{employee.id}
        <ul className='list-group list-group-flush' >
          <li className='list-group-item'>
            <b>Employee Name:{employee.username}</b>
          </li>
          <li className='list-group-item'>
          <b>Email:{employee.email}</b>

          </li>
          <li className='list-group-item'>
          <b>Mobile no:{employee.mobileno}</b>

          </li>
          <li className='list-group-item'>
          <b>Department:{employee.department}</b>

          </li>
        </ul>
      </div>
     </div>
     <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center',}}>
     <Link className='btn btn-primary my-2' to={'/'}>
     Back to Home</Link>
     </div>
      
    </div>
    </div>
    </div>
  )
}

export default ViewEmployee