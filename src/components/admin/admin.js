import React from 'react'; 
import './admin.css'; 
import {Link} from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";

const Admin = () => (
    <div>
      <h1 className= "display-4">Admin Portal</h1>
      <form class = "login">
        <button><Link to = "/admin/teacherplatform">Teacher Management</Link></button>
        <br></br>
        <button><Link to = "/admin/studentplatform">Student Management</Link></button>
        <br></br>
        <button><Link to = "/admin/classplatform">Class Management</Link></button>
        <br></br>
        <button><Link to = "/">Logout</Link></button>
        <br></br>
      </form>
    </div>
); 

export default Admin; 