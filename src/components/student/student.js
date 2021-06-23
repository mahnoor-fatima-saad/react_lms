import React from 'react'; 
import './student.css'; 
import {Link} from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";

const Student = () => (
    <div class="topnav">
    <Link to="/">Back</Link>
    <Link to="/student/viewassignments">View Assignments</Link>
</div>
); 

export default Student; 