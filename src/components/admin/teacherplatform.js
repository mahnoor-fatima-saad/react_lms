import React from 'react'; 
import './teacherplatform.css'; 
import {Link} from 'react-router-dom'; 

const TeacherPlatform = () => (
    <div>
      <h1>Teacher Management</h1>
      <form class = "login">
        <button><Link to = "/admin/teacherplatform/viewteachers">View Teachers</Link></button>
        <br></br>
        <button><Link to = "/admin/teacherplatform/addteachers">Add Teachers</Link></button>
        <br></br>
        <button><Link to = "/admin">Back</Link></button>
        <br></br>
        <button><a href = "/">Logout</a></button>
      </form>
    </div>
); 

export default TeacherPlatform; 