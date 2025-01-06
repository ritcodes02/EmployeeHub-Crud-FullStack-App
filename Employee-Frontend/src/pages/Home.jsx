import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link, useParams } from 'react-router-dom';
import Swal from 'sweetalert2';

function Home() {
    const [employees,setEmployees]= useState([]);

    const {id} = useParams ();
    
    useEffect(()=>{
        loadEmployees();
    
    },[]); 

    //[] this is empty error we give this when page loads it will load if we not give it will load multipletimes or again and again
    const loadEmployees=async()=>{
        const result=await axios.get("http://localhost:8080/employees")
         setEmployees(result.data);
    };
      
    const deleteEmployee = async (id)=>{
      await axios.delete(`http://localhost:8080/employeemanagement/${id}`)
      loadEmployees()
      Swal.fire({
        title: "Employee details has been deleted!",
        icon: "success",
        draggable: true
      });

    } 
    
  return (
    <div className="container">
        <div className="table">
        <table className="table border shadow">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Employee Name</th>
      <th scope="col">Email</th>
      <th scope="col">Mobile no</th>
      <th scope="col">Department</th>
      <th scope="col"> Action</th>


    </tr>
  </thead>
  <tbody>
    {
        employees.map((employee, index)=> (
      <tr key={employee.id}> 
      <th scope="row" key={index}>{index+1}</th>
      <td>{employee.username}</td>
      <td>{employee.email}</td>
      <td>{employee.mobileno}</td>
      <td>{employee.department}</td>
      <td>
      <Link className='btn btn-primary mx-2' to={`/view-employee/${employee.id}`}>
        View
      </Link>
        <Link className='btn btn-outline-primary mx-2'
        to={`/editemployee/${employee.id}`}
        > 
        Edit</Link>
        <button className='btn btn-danger mx-2'
        onClick={()=>deleteEmployee(employee.id)}
        > Delete</button>
      </td>

    </tr>
        ))
    }
    
   
  </tbody>
</table>
        </div>
    </div>
  )
}

export default Home