import React from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Login from './auth/Login'
import Register from './auth/Register'
import Anil from './dashboard/Anil'
import Dashboard from './dashboard/Dashboard'
import Madu from './dashboard/Madu'
import Home from './Home'

import Navbar from './navbar/Navbar'

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/dashboard" element={<Dashboard/>}>
                  <Route path='anil' element={<Anil/>} />
                  <Route path='Madu' element={<Madu/> } />
              </Route>
      </Routes>
    </Router>
  );
}

export default App
