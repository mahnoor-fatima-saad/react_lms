import React from 'react'; 
import './studentplatform.css'; 
import {Link} from 'react-router-dom';

const StudentPlatform = () => (
    <div>
        <div> <h1>Student Management</h1></div>
     
      <form class = "login">
      <button><Link to = "/admin/studentplatform/viewstudents">View Students</Link></button>
        <br></br>
        <button><Link to = "/admin/studentplatform/addstudents">Add Students</Link></button>
        <br></br>
        <button><Link to = "/admin">Back</Link></button>
        <br></br>
        <button><a href = "/">Logout</a></button>
      </form>
    </div>
); 

export default StudentPlatform; 