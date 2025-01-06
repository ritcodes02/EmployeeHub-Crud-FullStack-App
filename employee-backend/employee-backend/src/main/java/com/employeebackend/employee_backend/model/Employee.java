package com.employeebackend.employee_backend.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;

@Entity
public class Employee {
    
	@Id
	@GeneratedValue
	private Long id;
	private String username;
	private String email;
	private String mobileno;
	private String department;
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getMobileno() {
		return mobileno;
	}
	public void setMobileno(String mobileno) {
		this.mobileno = mobileno;
	}
	public String getDepartment() {
		return department;
	}
	public void setDepartment(String department) {
		this.department = department;
	}
	
}
