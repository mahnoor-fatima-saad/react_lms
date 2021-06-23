import React from 'react';
import './viewstudents.css';
import { Link } from 'react-router-dom';
import { Table } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
const API = 'http://localhost:3000/admin/students'

class ViewStudents extends React.Component{
    constructor(props){
        super(props); 
        this.state = {
            students : [],
        };
    }

    componentDidMount(){
        fetch(API)
        .then(response => response.json())
        .then(data => this.setState({students:data}));
    }

    render(){
        const {students} = this.state; 
        return(
            <div>
            <div class="topnav">
                <Link to="/admin">Back</Link>
                <Link to="/admin/studentplatform/viewstudents">View Students</Link>
                <Link to="/admin/studentplatform/addstudents">Add Students</Link>
            </div>

            <table class="table table-striped">
                <thead class="thead-light">
                    <tr>
                        <td>Student Name</td>
                        <td>Registration Number</td>
                    </tr>
                </thead>
                <tbody>
                    {students.map(std =>
                        <tr>
                        <td>{std.name}</td>
                        <td>{std.rollno}</td>
                    </tr>
                        )}
                </tbody>
            </table>
        </div>

            );
    }
}



        export default ViewStudents;