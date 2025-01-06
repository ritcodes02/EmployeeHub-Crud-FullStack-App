import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';

function EditEmployee() {
   
  let navigate=useNavigate();

  const { id } = useParams();


  const [employee, setEmployee] = useState({
    username:"",
    email:"",
    mobileno:"",
    department:""   
  })
  const {username,email,mobileno,department}=employee;
  
  const onInputChange=(e)=>{
    console.log(employee); 
    setEmployee({...employee, [e.target.name]:e.target.value});

  };
  
  useEffect(()=>{
    loadEmployee()
  }, []);

  const onSubmit=async(e)=>{
    e.preventDefault();
    console.log("Submitting employee:", employee);
    await axios.put(`http://localhost:8080/employeemanagement/${id}`,employee)
    navigate('/')
  }

  const loadEmployee =async ()=>{
    const result =await axios.get(`http://localhost:8080/employeemanagement/${id}`)
    setEmployee(result.data)  
}


  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow" >
      <h2 className='text-center m-4'>Edit Employee</h2>

            <form onSubmit={(e)=>onSubmit(e)} >
               
            <div className="mb-3" >
              <label  className='form-label'>
                Employee Name</label>
              <input type="text" 
              className='form-control'
              placeholder='Enter your name'
              name='username' 
              value={username}
              onChange={(e)=>onInputChange(e)}/>
            </div>
            <div className="mb-3">
              <label  className='form-label'>Email</label>
              <input type="email" className='form-control'
              placeholder='Enter your email'
              name='email' 
              value={email}
              onChange={(e)=>onInputChange(e)}/>
            </div>
            <div className="mb-3">
              <label  className='form-label'>Mobile no</label>
              <input type="text" className='form-control'
              placeholder='Enter your mobile no'
              name='mobileno'
              value={mobileno}
              onChange={(e)=>onInputChange(e)} />
            </div>
            <div className="mb-3">
              <label  className='form-label'>Department</label>
              <input type="text" className='form-control'
              placeholder='Enter your department'
              name='department' 
              value={department}
              onChange={(e)=>onInputChange(e)}/>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center',}}>
            <button type='submit' className='btn btn-outline-primary'> 
              Submit
            </button>
            <Link  className='btn btn-outline-danger mx-2' to='/'> 
              Cancel
            </Link>
            </div>
            
            
            </form>
        </div>
            
      </div>
    </div>
  )
}

export default EditEmployee