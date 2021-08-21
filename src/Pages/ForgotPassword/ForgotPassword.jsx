import React, { Component } from 'react'
import './ForgotPassword.css';
import TextField from '@material-ui/core/TextField';
// import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';
// import {  Router, Route, Switch } from "react-router-dom";
import UserService from "../../Service/UserService";

const service = new UserService();


export class ForgotPassword extends Component {

    constructor(props) {
        super(props)
        this.state = {
            username: "",
            password: "",
            "show": false,
            "snackmsg": ""
        }
    }

    Send = () => {
        this.setState({ snackmsg: "valid email" })
        this.setState({ show: true })
        let data = {
            "email": this.state.username,
        }
        service.ForgetPassword(data).then((result) => {
            console.log(result);
        }).catch((error) => {
            console.log(error);
        })
    }

    handleChange = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        this.setState({ [name]: value })
    }

    render() {
        return (
            <div className="first-container">
            <div className="forgotpassword-container">
                <div className="fundoosign">
                    <span className="letterF">F</span>
                    <span className="letteru">u</span><span className="lettern">n</span><span className="letterd">d</span><span className="letterO">o</span><span className="lettero">o</span>
                </div>
                <h3 className="headingsign">Forgot Password </h3>
                <h4 className="headingaccount"> Enter your Fundoo Account </h4>
                <div className="email1">
                   
                <TextField 
                    error = {this.state.usernameError}
                    label="username"
                    type="text"
                    name="username"
                    variant="outlined"
                    fullWidth
                    onChange={e => this. handleChange(e)}
                    helperText={this.state.usernameError? "Enter Username" : ''}/>
                   
                </div>
                <br></br><br></br>
                <div className="forgotemail-link">
              <a className="forgot-email" href="Registration">
                Try another way
              </a>
            </div>
                <div className="sendbtn">
                    <Button variant="contained" className="next" color="primary" onClick={this.Send}>
                        Next
                    </Button>
                </div>
            </div>
        </div>
    )
}
}

export default ForgotPassword
