import React from 'react'
import { Link } from 'react-router-dom'
import "./Navbar.css"
const Navbar = () => {
  return (
    <div className="navbar">
         <h1>Construction Management System</h1>
    <div className="navbar-item"><Link className='links' to = "/create-user">Create User</Link></div> 
    <div className="navbar-item"><Link className='links' to = "/create-project">Create Project</Link></div>
    <div className="navbar-item"><Link className='links' to = "/assign-users">Assign Users</Link> </div>
    <div className="navbar-item"><Link className='links' to = "/projects">Projects</Link></div>
    <div className="navbar-item"><Link className='links' to = "/user/:userId">User</Link></div>
    <button className="login-button"><Link Link className='links' to = "/login">Login</Link></button>
  </div>
  )
}

export default Navbar