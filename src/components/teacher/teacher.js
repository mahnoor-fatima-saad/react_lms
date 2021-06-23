import React from 'react'; 
import './teacher.css'; 
import {Link} from 'react-router-dom';

const Teacher = () => (
    <div class="topnav">
    <Link to="/">Back</Link>
    <Link to="/teacher/viewassignments">View Assignments</Link>
    <Link to = "/teacher/addassignments">Add Assignment</Link>
</div>
); 

export default Teacher; 