package com.employeebackend.employee_backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.employeebackend.employee_backend.model.Employee;


public interface EmployeeRepository extends JpaRepository<Employee, Long> {

}
