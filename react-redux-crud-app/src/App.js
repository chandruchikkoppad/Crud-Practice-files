import React from "react";
import Navbar from "./components/navbar/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/pages/HomePage";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import { ToastContainer } from "react-toastify";
import Todolist from "./TodoPage/Todolist";

const App = () => {
  return (
    <Router>
      <Navbar />
      <ToastContainer theme="dark" />
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/todolist" element={<Todolist/>}></Route>
      </Routes>
    </Router>
  );
};

export default App;
