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
          
            username: '',
            usernameError: false,
             
           }
       }
   
       validation = () => {
           let isError = false;
           const errors= this.state;
           errors.usernameError= this.state.username=== '' ? true : false;
           
   
           this.setState({
               ...errors,
           })
           return isError = errors.usernameError
   
       }
       Send = () => {
        var isValidated = this.validation();
        if(!isValidated){
            console.log("validation successfull");
            let data = {
          
              // "firstName": this.state.fName,
              // "lastName": this.state.lName,
              // "email":  this.state.email,
              "service": "advance",
              "password":this.state.username,
            //   "password":this.state.confirm,
            };
    
            service
            .ForgetPassword(data)
            .then((res) => {
              console.log(res);
              localStorage.setItem("token",res.data);
              console.log(res.data);
              this.props.history.push("/Login");
            })
            .catch((err) => {
              console.log(err);
            });
        }
      }
    
       change = e => {
           this.setState({
             [e.target.name]: e.target.value
           });
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
                    onChange={e => this.change(e)}
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
