import React, { useState, useEffect, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axiosInstance from "./../../services/Axiosinstance";
import { toast } from "react-toastify";

const EditEmp = () => {
  let navigate = useNavigate();
  let { id } = useParams();
  let [updateEmp, setUpdateEmp] = useState({
    emp_name: "",
    emp_salary: "",
    emp_designation: "",
    gender: "",
  });
  let { emp_name, emp_salary, emp_designation, gender } = updateEmp;

  let handleChange = e => {
    let { name, value } = e.target;
    setUpdateEmp({ ...updateEmp, [name]: value });
  };
  useEffect(() => {
    try {
      let fetchData = async () => {
        let { data } = await axiosInstance.get(`/employees/${id}`);
        setUpdateEmp(data);
      };
      fetchData();
    } catch (error) {
      toast.error(error);
    }
  }, [id]);

  let handleSubmit = async e => {
    e.preventDefault();
    try {
      let payload = { emp_name, emp_salary, emp_designation, gender };
      await axiosInstance.put(`/employees/${id}`, payload);
      //navigate("/")
      toast.success(`successfully ${updateEmp.emp_name} is updated`);
      window.location.assign("/");
    } catch (error) {
      toast.error(error);
    }
  };
  return (
    <section className="formBlock">
      <article>
        <h2>Update Employee</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="emp_name">Employee name</label>
            <input
              type="text"
              className="form-control"
              name="emp_name"
              value={emp_name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="emp_salary">Employee salary</label>
            <input
              type="text"
              className="form-control"
              name="emp_salary"
              value={emp_salary}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="emp_designation">Employee designation</label>
            <select
              name="emp_designation"
              value={emp_designation}
              onChange={handleChange}
            >
              <option value="java developer">Java Developer</option>
              <option value="node_dev">Nodejs Developer</option>
              <option value="frontend_dev">Frontend Developer</option>
              <option value="api_dev">Api Developer</option>
            </select>
          </div>
          <div
            className="form-group"
            name="gender"
            value={gender}
            onChange={handleChange}
          >
            <label htmlFor="gender">Employee Gender</label>
            <input type="radio" name="gender" value="male" />
            Male
            <input type="radio" name="gender" value="female" />
            FeMale
            <input type="radio" name="gender" value="others" />
            Others
          </div>
          <div className="form-group">
            <button>Update Employee</button>
          </div>
        </form>
      </article>
    </section>
  );
};

export default EditEmp;
