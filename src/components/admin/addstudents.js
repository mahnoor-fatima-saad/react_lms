import React, { useState } from 'react';
import './addstudents.css';
import { Link } from 'react-router-dom';
const API = 'http://localhost:3000/admin/addstudent';

class AddStudents extends React.Component {
    constructor(props) {
        super(props);
        this.addstudents = this.addstudents.bind(this);
        this.refresh = this.refresh.bind(this);
        this.state = {
            name: '',
            rollno: ''
        };
    }

    refresh = () => {
        this.setState();
    }
    addstudents(s) {
        s.preventDefault();
        let name = this.refs.name.value;
        let rollno = this.refs.rollno.value;
        let data = {
            name, rollno
        };
        fetch(API, {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json"

            }
        }).then(function (response) {
            if (response.ok) {
                alert("Record Added")
            } else {
                var error = new Error(response.statusText)
                error.response = response
                throw error
            }
        })
        this.refresh();
    }
    render() {
        return (

            <div>
                <div class="topnav">
                    <Link to="/admin">Back</Link>
                    <Link to="/admin/studentplatform/viewstudents">View Students</Link>
                    <Link to="/admin/studentplatform/addstudents">Add Students</Link>
                </div>

                <h3>Add Student</h3>
                <div>
                    <form action="#">
                        <label for="name">Student Name</label>
                        <input type="text" id="name" ref="name" placeholder="Student Name" />
                        <label for="rollno">Roll Number</label>
                        <input type="text" id="rollno" ref="rollno" placeholder="Roll Number" />
                        <input onClick={this.addstudents} type="submit" value="Submit" />
                    </form>
                </div>
            </div>


        );
    }
}


export default AddStudents;