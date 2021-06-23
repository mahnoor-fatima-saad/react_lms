
import React from 'react';
import './viewclasses.css';
import { Link } from 'react-router-dom';
import { Table } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
const API = 'http://localhost:3000/admin/classes'

class ViewClasses extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            classes: [],
        };
    }

    componentDidMount() {
        fetch(API)
            .then(response => response.json())
            .then(data => this.setState({ classes: data }));
    }

    

    render() {
        
        const { classes } = this.state;
        console.log(classes); 
        return (
            <div>
                <div class="topnav">
                    <Link to="/admin">Back</Link>
                    <Link to="/admin/classplatform/viewclasses">View Classes</Link>
                </div>

                <table class="table table-striped">
                    <thead class="thead-light">
                        <tr>
                            <td>Class Name</td>
                            <td>Teacher</td>
                            <td>Registered Students</td>
                        </tr>
                    </thead>
                    <tbody>
                        {classes.map(cls =>
                            <tr>
                                <td>{cls.name}</td>
                                <td>{cls.teacher.name}</td>
                                {cls.students.map(std=>
                                    <td>{std.sid.rollno}</td>
                                    
                                )}

                            </tr>
                        )}
                    </tbody>
                </table>
            </div>

        );
    }
}



export default ViewClasses;