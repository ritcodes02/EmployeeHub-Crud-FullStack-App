package com.employeebackend.employee_backend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.employeebackend.employee_backend.exception.EmployeeNotFoundException;
import com.employeebackend.employee_backend.model.Employee;
import com.employeebackend.employee_backend.repository.EmployeeRepository;

@RestController
@CrossOrigin("http://localhost:5173")
public class Controller {
	
	@Autowired
	private EmployeeRepository repository;
	
	@PostMapping("/employeemanagement")
	public Employee newEmployee(@RequestBody Employee newEmployee) {
		return repository.save(newEmployee);
		
	}
	@GetMapping("/employees")
	List<Employee> getAllEmployees(){
		return repository.findAll();
		
	}
	@GetMapping("/employeemanagement/{id}")
	public Employee getEmployeeById(@PathVariable Long id) {
     return repository.findById(id)
    		 .orElseThrow(()->new EmployeeNotFoundException(id));
    		 }
	@PutMapping("/employeemanagement/{id}")
	Employee updateEmployee(@RequestBody Employee newEmployee,@PathVariable Long id) {
		return repository.findById(id)
				.map(employee->{
					employee.setUsername(newEmployee.getUsername());
					employee.setEmail(newEmployee.getEmail());
					employee.setMobileno(newEmployee.getMobileno());
					employee.setDepartment(newEmployee.getDepartment());
					return repository.save(employee);
				}).orElseThrow(()->new EmployeeNotFoundException(id));
	}
	
	@DeleteMapping("/employeemanagement/{id}")
	String deleteEmployee(@PathVariable Long id) {
		if(!repository.existsById(id)) {
			throw new EmployeeNotFoundException(id); 
		}
		repository.deleteById(id);
		return "Employee with id" + id + "has been deleted success.";
	}
}
