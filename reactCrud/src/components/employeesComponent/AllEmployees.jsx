import React from 'react'
import { EmployeeContextApi } from './../../contextApi/EmployeeContext';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import axiosInstance from '../../services/Axiosinstance';
import { toast } from 'react-toastify';


const AllEmployees = () => {
  let { employees, loading } = useContext(EmployeeContextApi);
  let removeEmp = async id => {
    try {
      await axiosInstance.delete(`/employees/${id}`);
      toast.success("employee deleted");
      window.location.assign("/");
    } catch (error) {
      toast.error(error)
    }
  };
  console.log(employees)
  return (
    <section id="empTableBlock">
      <article>
        <h1>List of Employees</h1>
        <table>
          <thead>
            <tr>
              <th>id</th>
              <th>name</th>
              <th>salary</th>
              <th>designation</th>
              <th>gender</th>
              <th>details</th>
              <th>edit</th>
              <th>delete</th>
            </tr>
          </thead>
          <tbody>
            {loading === true ? "loading" : employees?.map(emp => {
              return (
                <tr key={emp.id}>
                  <td>{emp.id}</td>
                  <td>{emp.emp_name}</td>
                  <td>
                    <span>&#x20b9;</span>
                    {emp.emp_salary}
                  </td>
                  <td>{emp.emp_designation}</td>
                  <td>{emp.gender}</td>
                  <td className="view_more">
                    <Link to={`/view-emp/${emp.id}`}>View more</Link>
                  </td>
                  <td className="edit_block">
                    <Link to={`/edit-emp/${emp.id}`}>Edit</Link>
                  </td>
                  <td className="delete_block">
                    <Link to="/delete-emp" onClick={() =>removeEmp(emp.id) }>Delete</Link>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </article>
    </section>
  );
}

export default AllEmployees


