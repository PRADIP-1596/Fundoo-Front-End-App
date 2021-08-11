

import React, { Component } from 'react'
import TextField from "@material-ui/core/TextField";
// import Checkbox from "@material-ui/core/Checkbox";
import Button from "@material-ui/core/Button"
import './Login.css';
//  import { Link } from "react-router-dom";
 

export class Login extends Component {

   
  constructor(props) {
    super(props)
   

    this.state = {
        email: '',
        passsword: '',
        emailError: false,
        passwordError: false
    }
}

validation = () => {
    let isError = false;
    const errors= this.state;
    errors.emailError= this.state.email === '' ? true : false;
    errors.passwordError= this.state.password === '' ? true : false;

    this.setState({
        ...errors,
    })
    
    return isError =errors.emailError || errors.passwordError
      

}

Next = () => {
    var isValidated = this.validation();
    if(!isValidated){
        console.log("validation successfull");
    }
}
showPassword = () => {
  console.log("showpassword");
  if (this.state.textType === "password") {
    this.setState({
      textType: "text",
    });
  } else {
    this.setState({
      textType: "password",
    });
  }
};

change = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

    
    render() {
        return (
           <div>

<div className="first-container">
        <div className="signin-container">
          <div className="fundoo fundoo-sign">
            <span className="letterF">F</span>
            <span className="letteru">u</span>
            <span className="lettern">n</span>
            <span className="letterd">d</span>
            <span className="letterO">o</span>
            <span className="lettero">o</span>
          </div>
          <h1 className="heading-sign">Sign in </h1>
            <h1 className="heading-account"> Use your Fundoo Account </h1>
          <div className="form">
            <div className="sign-email1">
            <TextField 
                    error = {this.state.emailError}
                    label="Email"
                    type="text"
                    name="email"
                    variant="outlined"
                    fullWidth
                    onChange={e => this.change(e)}
                    helperText={this.state.emailError ? "Enter Your Email Id" : ''}/>
              <br></br>
              <br></br>
            </div>
            <div className="forgotemail-link">
              <a className="forgot-email" href="#outlined-basic4">
                Forgot email?
              </a>
            </div>
            <div className="sign-email1">

            <TextField 
                    error = {this.state.passwordError}
                    label="Password"
                    type="text"
                    name="passsword"
                    variant="outlined"
                    fullWidth
                    onChange={e => this.change(e)}
                    helperText={this.state.passwordError? "Enter Valid Password" : ''}/>
                    <div>
              <br></br>
              <br></br>
            </div>

            <div className="forgotemail-link">
              <a className="forgot-email" href="#outlined-basic4">
                Forgot password?
              </a>
            </div>
            {/* <div className="forgotemail-link">
              <Link className="forgot-email" to="/forgotpassword">
                Forgot password?
              </Link>
            </div> */}
            <div className="notcomp">
              <span>
                Not your computer? Use Guest mode to sign in privately.
              </span>

              <div className="text-link">
                <a
                  className="mailinstead"
                  href="https://support.google.com/chrome/answer/6130773?hl=en"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
            
            <div className="lastsec">
            <div className="signin-link">
              <div className="signininstead" to="/">
                Create account
              </div>
            </div>
            </div>
            <div class="next">
              <Button
                variant="contained"
                className="next"
                color="primary"
                onClick={this.Next}
              >
                Next
              </Button>
            </div>
         
          </div>
        </div>
      </div>
               
            </div>
            
        )
    }
}

export default Login
