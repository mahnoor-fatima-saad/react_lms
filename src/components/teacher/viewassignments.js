import React from 'react';
import './viewassignments.css';
import { Link } from 'react-router-dom';
import { Table } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
const API = 'http://localhost:3000/teacher/assignments'

class ViewAssignments extends React.Component{
    constructor(props){
        super(props); 
        this.state = {
            assignments : [],
        };
    }

    componentDidMount(){
        fetch(API)
        .then(response => response.json())
        .then(data => this.setState({assignments:data}));
    }

    render(){
        const {assignments} = this.state; 
        return(
            <div>
              <div class="topnav">
    <Link to="/">Home</Link>
    <Link to="/teacher/viewassignments">View Assignments</Link>
    <Link to = "/teacher/addassignment">Add Assignment</Link>
</div>
            <table class="table table-striped">
                <thead class="thead-light">
                    <tr>
                        <td>Title</td>
                        <td>Question</td>
                    </tr>
                </thead>
                <tbody>
                    {assignments.map(asg =>
                        <tr>
                        <td>{asg.title}</td>
                        <td>{asg.question}</td>
                    </tr>
                        )}
                </tbody>
            </table>
        </div>

            );
    }
}



        export default ViewAssignments;