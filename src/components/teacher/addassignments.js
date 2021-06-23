import React, { useState } from 'react';
import './addassignments.css';
import { Link } from 'react-router-dom';
const API = 'http://localhost:3000/teacher/addAssignment';

class AddAssignment extends React.Component {
    constructor(props) {
        super(props);
        this.addassignment = this.addassignment.bind(this);
        this.refresh = this.refresh.bind(this);
        this.state = {
            title: '',
            question: '',
            answer: ''
        };
    }

    refresh = () => {
        this.setState();
    }
    addassignment(a) {
        a.preventDefault();
        let title = this.refs.title.value;
        let question = this.refs.question.value;
        let answer = '';
        let data = {
            title,question, answer
        };
        fetch(API, {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json"

            }
        }).then(function (response) {
            if (response.ok) {
                alert("Assignment Added")
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
    <Link to="/">Back</Link>
    <Link to="/teacher/viewassignments">View Assignments</Link>
    <Link to = "/teacher/addassignments">Add Assignment</Link>
</div>

                <h3>Add Assignment</h3>
                <div>
                    <form action="#">
                        <label for="title">Title</label>
                        <input type="text" id="title" ref="title" placeholder="Assignment title" />
                        <label for="ques">Question</label>
                        <input type="text" id="question" ref="question" placeholder="Question" />
                        <input onClick={this.addassignment} type="submit" value="Submit" />
                    </form>
                </div>
            </div>


        );
    }
}


export default AddAssignment;