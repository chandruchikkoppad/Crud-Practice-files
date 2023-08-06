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
      await axiosInstance.delete(`/emp/${id}`);
      toast.success("employee deleted");
      window.location.assign("/");
    } catch (error) {
      toast.error(error)
    }
  };
  // console.log(employees)
  return (
    <section id="empTableBlock">
      <article>
        <h1>List of Employees</h1>
        <table>
          <thead>
            <tr>
              <th>id</th>
              <th>name</th>
              <th>email</th>
              <th>phone</th>
              <th>exp</th>
              <th>edu</th>
              <th>designation</th>
              <th>gender</th>
              <th>city</th>
              <th>salary</th>
              <th>skills</th>
              <th>details</th>
              <th>edit</th>
              <th>delete</th>
            </tr>
          </thead>
          <tbody>
            {loading === true
              ? "loading"
              : employees?.map(emp => {
                  return (
                    <tr key={emp._id}>
                      <td>{emp.emp_id}</td>
                      <td>{emp.emp_name}</td>
                      <td>{emp.emp_email}</td>
                      <td>{emp.emp_phone}</td>
                      <td>{emp.emp_exp}</td>
                      <td>{emp.emp_edu}</td>
                      <td>{emp.emp_designation}</td>
                      <td>{emp.emp_gender}</td>
                      <td>{emp.emp_city}</td>
                      <td>
                        <span>&#x20b9;</span>
                        {emp.emp_salary}
                      </td>
                      <td>{emp.emp_skills}</td>

                      <td className="view_more">
                        <Link to={`/view-emp/${emp.emp_id}`}>ViewEmp</Link>
                      </td>
                      <td className="edit_block">
                        <Link to={`/edit-emp/${emp.emp_id}`}>Edit</Link>
                      </td>
                      <td className="delete_block">
                        <Link
                          to="/delete-emp"
                          onClick={() => removeEmp(emp.emp_id)}
                        >
                          Delete
                        </Link>
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


