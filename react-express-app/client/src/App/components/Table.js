import React, { Component } from 'react';
import './Table.css';
import axios from 'axios';

class Table extends Component {
    constructor(props) {
        super(props);
        this.state = {data: []};
        this.componentDidMount = this.componentDidMount.bind(this);
    }

    componentDidMount = () => {
        let comp = this;
        axios.get('/getCourses').then(function(response) {
            if (response.status === 200) {
               comp.setState({data: response.data.query});
            } else {
               console.log("Could not grab courses");
            }
        }).catch(function (error) {
            console.log(error);
        });
    }

    render() {
        const Rows = this.state.data.map((row, key) =>
            <tr key={key}><td>{row.courseNumber}</td><td>{row.courseName}</td><td>{row.semesterTaken}</td></tr>
        );
        return (
            <div className="tableDiv">
                <h1>Courses Taken</h1>
            <table>
                <thead><tr><th>Course Number</th><th>Course Name</th><th>Semester Taken</th></tr></thead>
                <tbody>
                {Rows}
                </tbody>
            </table>
            </div>
        )
    }
}

export default Table;