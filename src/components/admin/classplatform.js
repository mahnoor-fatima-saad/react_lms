import React from 'react'; 
import './classplatform.css'; 
import {Link} from 'react-router-dom';

const ClassPlatform = () => (
    <div class="topnav">
     <Link to="/admin">Back</Link>
    <Link to="/admin/classplatform/viewclasses">View Classes</Link>
</div>
); 

export default ClassPlatform; 