import React, { Component } from 'react'
import './ForgotPassword.css';
import TextField from '@material-ui/core/TextField';
// import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';

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
                <div className="fundoo fundoo-sign">
                    <span className="letterF">F</span>
                    <span className="letteru">u</span><span className="lettern">n</span><span className="letterd">d</span><span className="letterO">o</span><span className="lettero">o</span>
                </div>
                <h3 className="heading-sign">Forgot Password </h3>
                <h4 className="heading-account"> Enter your Fundoo Account </h4>
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
                    <br></br><br></br>
                </div>
                <div className="sendbtn">
                    <Button variant="contained" className="next" color="primary" onClick={this.Send}>
                        Send
                    </Button>
                </div>
            </div>
        </div>
    )
}
}

export default ForgotPassword
