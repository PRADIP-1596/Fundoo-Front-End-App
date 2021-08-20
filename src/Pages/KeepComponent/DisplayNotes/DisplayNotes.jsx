import React, { Component } from 'react';
// import Icons from '../Icons/Icons';
import "./DisplayNotes.css"
// import pin from '../../assests/pin.svg';
// import service from '../../services/userService';
import Dialog from '@material-ui/core/Dialog';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';
import Tooltip from '@material-ui/core/Tooltip';
import Avatar from '@material-ui/core/Avatar';

const styles = {
    underline: {
        "& .MuiInput-underline:before": {
            position: 'fixed'
        },
        "& .MuiInput-underline:after": {
            position: 'fixed'
        }
    }
};

class Displaynotes extends Component {
    constructor(props) {
        super(props)

        this.state = {
            openStatus: false,
            title: '',
            description: ''
        }

    }

    onDelete = () => {
        let Data = {
            noteIdList: [this.props.value.id],
            isDeleted: true,
        };
    
        console.log("delete", Data);
    }

    onArchive = () => {
        let Data = {
            noteIdList: [this.props.value.id],
            isArchived: true,
        };
        
    
      
      
    }

    
  
    

    handleInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        }, () => { console.log(this.state); })
    }

    render() {
        const { classes } = this.props;
        
        const collaboratorDetails = this.props.value.collaborators.map((data)=>{
        let name = data.firstName
        const chars = name.split('');
        return (
            <Tooltip title={name}>
            <div style={{
                backgroundColor: this.props.value.color,
                marginLeft:'5px',
                marginRight:'4px'
            }}>
            <Avatar alt={chars[0]} src={chars[0]} />
            </div>
            </Tooltip>
            );
        });
        return (
                <div className="note" style={{
                    backgroundColor: this.props.value.color
                    }}>
                    <div className="title-pinn"
                        onClick={() => {
                            this.setState({
                                openStatus: !this.state.openStatus,
                                title: this.props.value.title,
                                description: this.props.value.description
                            })
                        }}>
                        <div className="title-note">
                            <div className='title-frame'>
                                {this.props.value.title}
                            </div>
                            <img className="pin-inp"
                                // src={pin} alt="" 
                                />
                        </div>

                        <div className="description-note">
                            {this.props.value.description}
                        </div>
                    </div>
                    <div className="collab-align">
                          {collaboratorDetails}                  
                    </div>
                    <div className="icon-frame">
                        <div className="disp-icn">
                           
                        </div>
                    </div>
                <Dialog
                    open={this.state.openStatus}>
                    <div
                        className="dialog-body"
                        style={{
                            width: "570px",
                            minHeight: "160px",
                            padding: "15px",
                            backgroundColor: this.props.value.color,
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "flex-start"
                        }}>
                        <TextField
                            className={classes.underline}
                            name="title"
                            defaultValue={this.props.value.title}
                            multiline
                            onChange={this.handleInput}
                        />
                        <TextField
                            className={classes.underline}
                            name="description"
                            defaultValue={this.props.value.description}
                            multiline
                            onChange={this.handleInput}
                        />
                    </div>
                    <div className="collab-align" style={{
                            backgroundColor: this.props.value.color,
                            marginRight: '4px'
                        }}>
                            {collaboratorDetails}                        
                    </div>
                    <div
                        style={{
                            padding: "10px",
                            backgroundColor: this.props.value.color,
                            display: "flex",
                            justifyContent: "space-between"
                        }}>
                        <div className="dialog-icon">
                          
                        </div>
                        <div className="dialog-close"
                            onClick={() => {
                                this.onUpdate();
                                this.props.get();
                                this.setState({
                                    openStatus: !this.state.openStatus
                                });
                            }}>
                            Close
                    </div>
                </div>
                </Dialog>
            </div>

        );
    }
}

export default withStyles(styles)(Displaynotes);