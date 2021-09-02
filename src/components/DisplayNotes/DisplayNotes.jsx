import React from 'react';
import Icons from '../Icons/Icon'
import InputBase from '@material-ui/core/InputBase';
import Dialog from '@material-ui/core/Dialog';


import UserService from "../../Service/UserService";

const service = new UserService();

export default class DisplayNotes extends React.Component {
    constructor(props) {
        super(props)
        this.state = ({
            title: "",
            description: "",
            open: false,
            noteId: '',
            // color:null,
        })
    }

    handleTitle = (e) => {
        this.setState({ title: e.target.value })
        this.setState({ description: e.target.value })
    }

    handleClickOpen = (e, value) => {
        e.stopPropagation();
        this.setState({
            open: true,
            noteId: value.id,
            title: value.title,
            description: value.description
        })
    };

    handleClose = () => {
        console.log("im working");
        this.setState({ open: !this.state.open })
        console.log(this.state.open);
    };

    render() {
        return (
            <>
                <div className="notess">
                    {this.props.NotesArray.filter((data) => data.isDeleted === false).filter((data) => data.isArchived === false).reverse().map((value, index) => {
                        var style={backgroundColor:value.color}
                        return (<div className="notebox" style={style}>
                            <div onClick={(e) => this.handleClickOpen(e, value)}>
                              <div className="inline1">  <h4 style={{width:'90%'}}>{value.title}</h4>
                                {/* <img src={Pin} alt=""/> */}
                                </div>
                                <p>{value.description}</p></div>
                            <Icons Notes={value} SetColor={this.setColor} />                         
                        </div>)
                    })}

                </div>
                <Dialog open={this.state.open} onClose={this.handleClose} aria-labelledby="form-dialog-title">
                    <div className="dialogbox">
                        <InputBase
                            defaultValue=""
                            multiline
                            className="inputbas"
                            placeholder="  Title"
                            fullWidth
                            onChange={this.handleTitle}
                            defaultValue={this.state.title}
                            inputProps={{ 'aria-label': 'Title ' }}
                        />

                        <InputBase
                            defaultValue=""
                            multiline
                            fullWidth
                            className="inputbas"
                            placeholder="  Title"
                            onChange={this.handleTitle}
                            defaultValue={this.state.description}
                            inputProps={{ 'aria-label': 'Title ' }}
                        />
                         <div className="enclose">
                                < Icons />
                                <div class="inp">
                                    <input type="button" onClick={(e) => this.displayNote(e)} value="Close" />
                                </div>
                            </div>
                    </div>

                    
                </Dialog>
            </>
        )
    }
} 