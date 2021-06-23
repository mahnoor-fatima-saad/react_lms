
import React from 'react';
import './viewteachers.css';
import { Link } from 'react-router-dom';
import { Table } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
const API = 'http://localhost:3000/admin/teachers'

class ViewTeachers extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            teachers: [],
        };
    }

    componentDidMount() {
        fetch(API)
            .then(response => response.json())
            .then(data => this.setState({ teachers: data }));
    }

    render() {
        const { teachers } = this.state;
        return (
            <div>
                <div class="topnav">
                    <Link to="/admin">Back</Link>
                    <Link to="/admin/teacherplatform/viewteachers">View Teachers</Link>
                    <Link to="/admin/teacherplatform/addteachers">Add Teachers</Link>
                </div>

                <table class="table table-striped">
                    <thead class="thead-light">
                        <tr>
                            <td>Teacher Name</td>
                            <td>Designation</td>
                        </tr>
                    </thead>
                    <tbody>
                        {teachers.map(tch =>
                            <tr>
                                <td>{tch.name}</td>
                                <td>{tch.designation}</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>

        );
    }
}



export default ViewTeachers;