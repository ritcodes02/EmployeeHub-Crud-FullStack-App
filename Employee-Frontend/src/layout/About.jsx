import React from 'react'
import "../layout/About.css"

function About() {
  return (
    <div className="container my-5">
      <h1 className="text-center mb-4">About Employee Hub</h1>
      <p className="lead text-center">
        Employee Hub is a comprehensive Employee Management System designed to streamline workforce management 
        and enhance organizational productivity.
      </p>
      <div className="row mt-5">
        <div className="col-md-6">
          <h3>Our Mission</h3>
          <p>
            Our mission is to provide businesses with an easy-to-use tool that simplifies employee data 
            management, supports informed decision-making, and ensures seamless HR operations.
          </p>
        </div>
        <div className="col-md-6">
          <h3>Key Features</h3>
          <ul>
            <li>Manage employee records efficiently</li>
            <li>Track employee performance and attendance</li>
            <li>Generate insightful reports</li>
            <li>Streamline hiring processes</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default About;
