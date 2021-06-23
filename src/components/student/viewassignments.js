import React from 'react';
import './viewassignments.css';
import { Link } from 'react-router-dom';
import { Table } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
const API = 'http://localhost:3000/student/assignments'

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
    <Link to="/">Back</Link>
    <Link to="/student/viewassignments">View Assignments</Link>
</div>
            <table class="table table-striped">
                <thead class="thead-light">
                    <tr>
                        <td>Title</td>
                        <td>Question</td>
                        <td>Answer</td>
                    </tr>
                </thead>
                <tbody>
                    {assignments.map(asg =>
                        <tr>
                        <td>{asg.title}</td>
                        <td>{asg.question}</td>
                        <td>{asg.answer}</td>
                    </tr>
                        )}
                </tbody>
            </table>
        </div>

            );
    }
}



        export default ViewAssignments;