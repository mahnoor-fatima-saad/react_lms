import React, { useState } from 'react';
import './addteachers.css';
import { Link } from 'react-router-dom';
const API = 'http://localhost:3000/admin/addteacher';

class AddTeachers extends React.Component {
    constructor(props) {
        super(props);
        this.addteachers = this.addteachers.bind(this);
        this.refresh = this.refresh.bind(this);
        this.state = {
            name: '',
            desig: ''
        };
    }

    refresh = () => {
        this.setState();
    }
    addteachers(t) {
        t.preventDefault();
        let name = this.refs.name.value;
        let designation = this.refs.desig.value;
        let data = {
            name, designation
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
                    <Link to="/admin/teacherplatform/viewteachers">View Teachers</Link>
                    <Link to="/admin/teacherplatform/addteachers">Add Teachers</Link>
                </div>

                <h3>Add Teacher</h3>
                <div>
                    <form action="#">
                        <label for="name">Teacher Name</label>
                        <input type="text" id="name" ref="name" placeholder="Teacher Name" />
                        <label for="desig">Designation</label>
                        <input type="text" id="designation" ref="desig" placeholder="Designaton" />
                        <input onClick={this.addteachers} type="submit" value="Submit" />
                    </form>
                </div>
            </div>

        );
    }
}


export default AddTeachers;

