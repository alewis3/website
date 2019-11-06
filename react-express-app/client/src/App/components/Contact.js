import React, { Component } from 'react';
import './CSS/Contact.css';
import axios from 'axios';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Button from '@material-ui/core/Button';
import TextField from 'material-ui/TextField';

class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            fname: '',
            lname: '',
            subject: '',
            msg: ''
        }
    }

    handleEmailChange = (event) => {
        const inputEmail = event.target.value;
        this.setState(prev => ({email: inputEmail }));
    }

    handleFirstNameChange = (event) => {
        const inputFName = event.target.value;
        this.setState(prev => ({fname: inputFName }));
    }

    handleLastNameChange = (event) => {
        const inputLName = event.target.value;
        this.setState(prev => ({lname: inputLName }));
    }

    handleSubjectChange = (event) => {
        const inputSubject = event.target.value;
        this.setState(prev => ({subject: inputSubject }));
    }

    handleMsgChange = (event) => {
        const inputMsg = event.target.value;
        this.setState(prev => ({msg: inputMsg }));
    }

    submitButton(event) {
    
        console.log("values", this.state.fname, 
                                this.state.lname, 
                                this.state.email, 
                                this.state.subject, 
                                this.state.msg);
        
        if (this.state.fname === "" || 
            this.state.lname === "" || 
            this.state.email === "" || 
            this.state.subject === "" || 
            this.state.msg === "") {
            alert("Fill in all fields!");
            console.log("Missing fields");
        }
        else {
            // trim fields whitespace
            let firstNameTrimmed = this.state.fname.trim();
            let lastNameTrimmed = this.state.lname.trim();
            let emailTrimmed = this.state.email.trim();
            let subjectTrimmed = this.state.subject.trim();
            let msgTrimmed = this.state.msg.trim();
        
            var payload = {
                "first": firstNameTrimmed,
                "last": lastNameTrimmed,
                "email": emailTrimmed,
                "subject": subjectTrimmed,
                "msg": msgTrimmed
            }
        
            axios.post('/sendEmail', payload).then(function(response) {
                console.log(response);
                if (response.status === 200) {
                    console.log("Test email sent!");
                    alert("Test email sent!")
                } else if (response.status === 401) {
                    console.log("Test email could not be sent!");
                    alert("Test email could not be sent!");
                }
            }).catch(function (error) {
                console.log(error);
            });
        }
    }
    render() {
        const style = {
            margin: 12,
        };
        return <div className="contact" id="contact">
            <h1>Contact</h1>
            <MuiThemeProvider>
                <div>
                <TextField hintText="First name" fullWidth={true} onChange={this.handleFirstNameChange} /> <br />
                <TextField hintText="Last name" fullWidth={true} onChange={this.handleLastNameChange} /> <br />
                <TextField hintText="Email" fullWidth={true} onChange={this.handleEmailChange} /> <br />
                <TextField hintText="Subject" fullWidth={true} onChange={this.handleSubjectChange} /> <br />
                <TextField hintText="Your message" fullWidth={true} multiline="true" onChange={this.handleMsgChange}/> <br />
                <Button 
                variant="contained"
                color="default"
                style={style}
                onClick={(event) => this.submitButton(event)}
                >Submit</Button>
                </div>
            </MuiThemeProvider>
        </div>

    }
}

export default Contact;