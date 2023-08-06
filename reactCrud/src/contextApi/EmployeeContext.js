import React, { createContext, useEffect, useState } from "react";
import axiosInstance from "../services/Axiosinstance";
import { toast } from "react-toastify";
export let EmployeeContextApi = createContext();

const EmployeeProvider = ({ children }) => {
    let [employees, setEmployees] = useState([]);
    let [loading, setLoading] = useState(false);
    useEffect(() => {
        let fetchData = async () => {
            try {
                let { data } = await axiosInstance.get("/employees");
                setLoading(true);
                console.log(data);
                setEmployees(data);
            } catch (error) {
                toast.error(error);
            };
            setLoading(false);
        };
        fetchData();
    }, []);
    return (
        <EmployeeContextApi.Provider value={{ employees, loading }}>
        {children}
      </EmployeeContextApi.Provider>
    );
}

export default EmployeeProvider;












