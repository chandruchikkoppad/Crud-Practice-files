import React,{useState,useEffect} from "react";
import { useParams } from "react-router-dom";
import axiosInstance from './../../services/Axiosinstance';
import {faker} from "@faker-js/faker"

const Employee = () => {
    const randomPhoto = faker.image.avatar();
    let [emp, setEmp] = useState("");
    let { id } = useParams();
  useEffect(() => {
      try {
        let fetchData = async () => {
          let { data } = await axiosInstance.get(`/emp/:${id}`);
          setEmp(data);
          console.log("hi");
        };
        fetchData();
      } catch (error) {
        console.log(error)
      }
    }, [id]);
    return (
      <section className="emp_block">
        <article>
          <aside className="sidebar">
            <figure>
              <img src={randomPhoto} alt={emp.emp_name} />
            </figure>
          </aside>
          <aside className="mainbar">
            <h1>{emp.emp_name}</h1>
            <p>Employee id : {emp.emp_id}</p>
            <p>Employee name : {emp.emp_email}</p>
            <p>Employee email : { emp.emp_email}</p>
            <p>Employee Ph Num : {emp.emp_phone}</p>
            <p>Employee Exp : {emp.emp_exp}</p>
            <p>Employee Edu : {emp.emp_edu}</p>
            <p>Employee designation : {emp.emp_designation}</p>
            <p>Employee gender : {emp.emp_gender}</p>
            <p>Employee Salary : { emp.emp_salary}</p>
            <p>Employee Skills : {emp.emp_skills}</p>
          </aside>
        </article>
      </section>
    );
};

export default Employee;
