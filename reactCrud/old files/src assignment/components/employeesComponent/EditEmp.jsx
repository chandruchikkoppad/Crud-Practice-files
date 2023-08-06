import React, { useState, useEffect, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axiosInstance from "./../../services/Axiosinstance";
import { toast } from "react-toastify";

const EditEmp = () => {
  let navigate = useNavigate();
  let { id } = useParams();
  let [updateEmp, setUpdateEmp] = useState({
    emp_id: "",
    emp_name: "",
    emp_email: "",
    emp_phone: "",
    emp_exp: "",
    emp_edu: "",
    emp_designation: "",
    emp_gender: "",
    emp_city: "",
    emp_salary: "",
    emp_skills: "",
  });
  let {
    emp_id,
    emp_name,
    emp_email,
    emp_phone,
    emp_exp,
    emp_edu,
    emp_designation,
    emp_gender,
    emp_city,
    emp_salary,
    emp_skills,
  } = updateEmp;

  let handleChange = e => {
    let { name, value } = e.target;
    setUpdateEmp({ ...updateEmp, [name]: value });
  };
  useEffect(() => {
    try {
      let fetchData = async () => {
        let { data } = await axiosInstance.get(`/emp/${id}`);
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
      let payload = {
        emp_id,
        emp_name,
        emp_email,
        emp_phone,
        emp_exp,
        emp_edu,
        emp_designation,
        emp_gender,
        emp_city,
        emp_salary,
        emp_skills,
      };
      await axiosInstance.put(`/emp/${id}`, payload);
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
        <h2>Add Employee</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="emp_id">Employee id</label>
            <input
              type="text"
              className="form-control"
              name="emp_id"
              value={emp_id}
              required
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="emp_name">Employee name</label>
            <input
              type="text"
              className="form-control"
              name="emp_name"
              value={emp_name}
              required
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="emp_email">Employee email</label>
            <input
              type="text"
              className="form-control"
              name="emp_email"
              value={emp_email}
              required
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="emp_phone">Employee Phone Number</label>
            <input
              type="text"
              className="form-control"
              name="emp_phone"
              value={emp_phone}
              required
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="emp_exp">Employee experience</label>
            <input
              type="text"
              className="form-control"
              name="emp_exp"
              value={emp_exp}
              required
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="emp_edu">Employee education</label>
            <input
              type="text"
              className="form-control"
              name="emp_edu"
              value={emp_edu}
              required
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="emp_designation">Employee designation</label>
            <select
              name="emp_designation"
              value={emp_designation}
              onChange={handleChange}
            >
              <option value="java_dev">Java Developer</option>
              <option value="node_dev">Nodejs Developer</option>
              <option value="frontend_dev">Frontend Developer</option>
              <option value="api_dev">Api Developer</option>
            </select>
          </div>
          <div
            className="form-group"
            name="emp_gender"
            value={emp_gender}
            onChange={handleChange}
          >
            <label htmlFor="gender">Employee Gender</label>
            <input type="radio" name="emp_gender" value="male" />
            Male
            <input type="radio" name="emp_gender" value="female" />
            FeMale
            <input type="radio" name="emp_gender" value="others" />
            Others
          </div>
          <div className="form-group">
            <label htmlFor="emp_city">Employee city</label>
            <select name="emp_city" value={emp_city} onChange={handleChange}>
              <option value="Mandya">Mandya</option>
              <option value="Bangalore">Bangalore</option>
              <option value="Mysore">Mysore</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="emp_salary">Employee salary</label>
            <input
              type="text"
              className="form-control"
              name="emp_salary"
              value={emp_salary}
              required
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="emp_skills">Employee skills</label>
            <input type="checkbox" value={emp_skills} onChange={handleChange} />
            HTML
            <input type="checkbox" value={emp_skills} onChange={handleChange} />
            CSS
            <input type="checkbox" value={emp_skills} onChange={handleChange} />
            JS
          </div>

          <div className="form-group">
            <button>Add Employee</button>
          </div>
        </form>
      </article>
    </section>
  );
};

export default EditEmp;
