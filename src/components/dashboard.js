import React from 'react'; 
import './dashboard.css'; 
import{Link} from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";


const Dashboard = () => (
    <div>
    <h1 className = "display-1">Learning Management System</h1>    
    <form className="login">
        <button><Link to = "/admin">Admin</Link></button>
        <br></br>
        <button><Link to = "/student">Student</Link></button>
        <br></br>
        <button><Link to = "/teacher">Teacher</Link></button>
        <br></br>
    </form>
    </div>

); 

export default Dashboard; 