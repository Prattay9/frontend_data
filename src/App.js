// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import CreateUser from './components/CreateUser';
import CreateProject from './components/CreateProject';
import AssignUsers from './components/AssignUsers';
import ProjectList from './components/ProjectList';
import UserDetails from './components/UserDetails';
import Login from './components/Login';
import Navbar from './components/Navbar';
import './App.css'

function App() {
  const currentUrl = window.location.href;
  let isLoginUrl = currentUrl.includes("/login")
  // console.log(isLoginUrl, "popo")
  return (
    <Router>
      <div>
        {/* If isLoginUrl true then it'll not show the navbar and its corrensponsding elements and vice versa then */}
        {isLoginUrl 
          ? <></>
          : <div style={{display:'flex',gap:'10px'}}>
              <Navbar/>           


        {/* Routes */}
        <Routes>
          <Route path="/create-user" element={<CreateUser />} />
          <Route path="/create-project" element={<CreateProject />} />
          <Route path="/assign-users" element={<AssignUsers />} />
          <Route path="/projects" element={<ProjectList />} />
          <Route path="/user/:userId" element={<UserDetails />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        </div>}

      </div>
    </Router>
  );
}

export default App;