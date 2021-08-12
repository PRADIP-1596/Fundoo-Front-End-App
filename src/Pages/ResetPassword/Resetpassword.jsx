import React, { Component } from 'react'
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

import './Resetpassword.css';
import {  Router, Route, Switch } from "react-router-dom";
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
          <div className="fundoo">
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
          <br></br><br></br><br></br>

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
