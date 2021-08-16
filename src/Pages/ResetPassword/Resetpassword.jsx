import React, { Component } from 'react'
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

import './Resetpassword.css';
// import {  Router, Route, Switch } from "react-router-dom";

import UserService from "../../Service/UserService";

const service = new UserService();
export class Resetpassword extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          password: "",
          confirm: "",
          passwordError: false,
          confirmError: false,
        //   showPassword: false,
        //   showPassword1: false,
        };
      }
    
      validation = () => {
        let isError = false;
        const errors= this.state;
        errors.passwordError= this.state.password === '' ? true : false;
        errors.confirmError= this.state.confirm === '' ? true : false;

        this.setState({
            ...errors,
        })
        return isError = errors.confirmError || errors.passwordError

    }

    Reset = () => {
      var isValidated = this.validation();
      if(!isValidated){
          console.log("validation successfull");
          let data = {
        
            // "firstName": this.state.fName,
            // "lastName": this.state.lName,
            // "email":  this.state.email,
            "service": "advance",
            "password":this.state.password,
            "password":this.state.confirm,
          };
     
          service
          .ResetPassword(data)
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
        <div className="resetpassword-container">
        <div className="fundoosign">
            <span className="letterF">F</span>
            <span className="letteru">u</span>
            <span className="lettern">n</span>
            <span className="letterd">d</span>
            <span className="letterO">o</span>
            <span className="lettero">o</span>
          </div>
          <div class="topname">
          <h3 className="headingsign">Account reovery</h3>
          <h4 className="headingaccount">Recover your Fundoo Account</h4>
          </div>
          <div className="email1">
          <TextField 
                    error = {this.state.passwordError}
                    label="Password"
                    type="text"
                    name="password"
                    variant="outlined"
                    fullWidth
                    onChange={e => this.change(e)}
                    helperText={this.state.passwordError ? "Enter Valid Password" : ''}/>
            <br></br>
            <br></br>
          </div>
          <div className="email1">
           
            <TextField 
                    error = {this.state.confirmError}
                    label="Confirm"
                    type="text"
                    name="confirm"
                    fullWidth
                    variant="outlined"
                    onChange={e => this.change(e)}
                    helperText={this.state.confirmError ? "Confirmed Password" : ''} />
                    <div>
          </div>
          </div>
          

          
          <br></br><br></br>
          <div className="forgotemail-link">
              <a className="forgot-email" href="Registration">
                More ways to Signin
              </a>
            </div>


           <div className="buttonname">
            <Button
              variant="contained"
              className="next"
              color="primary"
              onClick={this.Reset}
            >
              Reset
            </Button>
          </div> 
      
      </div>
      );
  
  </div>
)
}
}

 

export default Resetpassword
