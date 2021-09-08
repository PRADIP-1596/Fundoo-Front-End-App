import React from 'react';
import CheckBoxOutlinedIcon from '@material-ui/icons/CheckBoxOutlined';
import BrushIcon from '@material-ui/icons/Brush';
import ImageOutlinedIcon from '@material-ui/icons/ImageOutlined';
import InputBase from '@material-ui/core/InputBase';
import Icons from '../Icons/Icon';
import  '../CreateNotes/CreateNote.css'
// import UserService from "../../service/Userservice"

// const service = new UserService();

import {
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    Divider,
    Popper,
    Paper,
    List,
  } from "@material-ui/core";

import UserService from "../../Service/UserService";

const service = new UserService();


export default class Notes extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            open: true,
            title: "",
            description: "",
            color:"",
            collabarator:"",
            isArchived: false,
          
        }
    }
    click = () => {
        this.setState({ open: !this.state.open })
    }
    handleTitle = (e) => {
        this.setState({ title: e.target.value })
        console.log(e.target.value);
    }
    handleDescription = (e) => {
        this.setState({ description: e.target.value })
    }

    getcolor=(data)=>{
      this.setState({color:data})

    }
    
    getcollab=(data)=>{
      this.setState({collabarator:data})

    }
    archievenotes=(data)=>{
     this.setState({value:data})
    }

    close = () => {
        let data = {
            "title": this.state.title,
            "description": this.state.description,
            "color":this.state.color,
            " archievenotes":this.state. archievenotes,

        }
        this.click();
        if (data.title === "" || data.description === "") {

        }
        if (this.state.isArchived !== "") {
          data.append("isArchived", this.state.isArchived);
        } 
        else {
            let token = localStorage.getItem('Token');
            service.addNote(data, token).then((data,) => {
            // this.props.updateData();
            
        console.log(data);
        this.props.get();
        this.setState({
          color: "#ffffff",
          showContent: false,
          title: "",
          description: "",
          isArchived: false,
          isDeleted: false,
         
        });
      
            }).catch((error) => {
                    console.log(error)
            })
        }
    }
    handleArchive = () => {
      this.setState({
        isArchived: true,
      });
    }
    // collaboratorDialog = () => {
    //     this.setState({
    //       collabOpen: true,
    //       openPopper:false
    //     });
    //   };
    // //   onSave = () => {
    //     this.setState({
    //       openPopper:false,
    //       collabOpen: false,
    //     });
    //     this.handleOnClose();
    //   };
    
    //   onCancel = () => {
    //     this.setState({
    //       openPopper:false,
    //       collabOpen: false,
    //     });
    //   };
    //   addUser = (val) => {
    //     collab = val;
    //     this.setState({
    //       openPopper:false,
    //     });
    
    //   };
    
    //   handleSearchChange = (e) => {
    //     this.setState({
    //       openPopper: true,
    //       anchorEl: e.currentTarget,
    //     });
    //     let data = {
    //       searchWord: e.target.value,
    //     };
    //     service
    //       .SearchUserList(data)
    //       .then((res) => {
    //         this.setState({
    //           usersList: res.data.data.details,
    //         });
    //       })
    //       .catch((err) => {
    //         console.log(err);
    //       });
    //   };
    //   searchingList = () => {
    //     const searchList = this.state.usersList.map((val, ind) => {
    //       return (
    //         <List key={ind} onClick={() => this.addUser(val)}>
    //           {val.email}
    //         </List>
    //       );
    //     });
    //     return searchList;
    //   };
    

    render() {
        return (
            <>
                { this.state.open ?
                    <div className="takenote ">
                        <input type="text" onClick={this.click} placeholder="Take a Note" />
                        < CheckBoxOutlinedIcon />
                        < BrushIcon />
                        <ImageOutlinedIcon />
                    </div> :
                    <div className="brieftakenote"  style={{backgroundColor:this.state.color}}>
                        <div className="inlinepin">
                            <InputBase
                                defaultValue=""
                                multiline
                                fullWidth
                                placeholder="  Title"
                                onChange={this.handleTitle}
                                inputProps={{ 'aria-label': 'Title ' }}
                            />
                        </div>
                        <InputBase
                        fullWidth
                        multiline
                            defaultValue=""
                            placeholder="  Take a Note "
                            onChange={this.handleDescription}
                            inputProps={{ 'aria-label': 'Take a note ' }}
                        />
                        <div>
                            <div className="enclose">
                                 < Icons
                                 getcolorfromicon={this.getcolor} 
                                 archive={this.handleArchive}    
                                 getcollabarators={this.getcollab}                       
                                 
                                 />
                                
                                <div class="inp">
                                    <input type="button" onClick={this.close} value="Close" />
                                </div>
                            </div>
                        </div>
                    </div>}
 {/*,<----------------------------------- collaborator ------------------------------------------> */}
        {/* <Dialog
          className="collab-dialog-box"
          open={this.state.collabOpen}
          fullWidth
          aria-labelledby="responsive-collab-dialog-title"
          style={{ backgroundColor: "none", zIndex: 2 }}
        >
          <DialogTitle>Collaborators</DialogTitle>
          <Divider light />
          <DialogContent>
            <div>
              <div className="first">
                <AccountIcon fontSize="large" className="owner-icon" />
                <div>
                  <div classname="oname">
                    <h3 className="owner-name">Pradip</h3>
                    <span>(Owner)</span>
                  </div>
                  <p className="owner-tag">pradip@gmail.com</p>
                </div>
              </div>
            </div>

            <div className="second">
              <div className="collab-add-icon">
                <PersonAddIcon />
              </div>
              <input
                type="email"
                className="collab-input"
                placeholder="Person or email to share with"
                onChange={this.handleSearchChange}
              />
            </div>
            <Popper
              open={this.state.openPopper}
              anchorEl={this.state.anchorEl}
              placement="bottom-start"
              transition
              style={{ zIndex: 20, marginTop: "450px", width: "250px" }}
            >
              <Paper
                className="collab-popper"
                style={{ padding: "10px", boxShadow: "1px 1px 5px #888" }}
              >
                {this.searchingList()}
              </Paper>
            </Popper>
          </DialogContent>
          <Divider light />
          <DialogActions
            className="cancelsave-btns"
            style={{ backgroundColor: "#ebebeb", height: "50px" }}
          >
            <div>
              <button className="action-btn" onClick={this.onCancel}>
                Cancel
              </button>
              <button className="action-btn" onClick={this.onSave}>
                Save
              </button>
            </div>
          </DialogActions>
        </Dialog>
     */}
    );
  
            </>)
    }
}