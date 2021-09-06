import "./col.css";
import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Popper from "@material-ui/core/Popper";
import Paper from "@material-ui/core/Paper";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import TextField from "@material-ui/core/TextField";
import PersonAddOutlinedIcon from "@material-ui/icons/PersonAddOutlined";
import { useEffect } from "react";


export default function Collabartorsdetails(props) {
  const firstName = localStorage.getItem("firstName");
  const lastName = localStorage.getItem("lastName");
  const email = localStorage.getItem("email");
  const [open, setOpen] = React.useState(false);
  const [usersList, setUsersList] = React.useState([]);
  const [collaborator, setCollaborator] = React.useState("");
  const [anchorEl, setAnchorEl] = React.useState(null);
  

  let popperopendetails = Boolean(anchorEl);

  const handleClickOpen = () => {
    setOpen(true);
  };


  const  Popperevents= () => {
   
  };

  const [collabUsers, setCollabUsers] = React.useState([]);

  const handleAddUser = () => {
  
  };


  const detailsdeclaredofthecollabarators = () => {
    setCollaborator(collabUsers);
  };


  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    detailsdeclaredofthecollabarators();
  }, [collabUsers]);

  return (
    <div>
      <IconButton aria-label="Add colaborators" onClick={handleClickOpen}>
        <PersonAddOutlinedIcon fontSize="small" />
      </IconButton>
      <Dialog
        fullWidth={true}
        open={open}
        onClose={handleClose}
      >
        <DialogTitle ><b>Collabarators</b></DialogTitle>
    
        <DialogContent >
          <div >
            <div>
              <Avatar className="nameofthepassion">P</Avatar>
            </div>
            <div >
              <p>
                {firstName} {lastName}
              </p>
              <p>
                {email}
              </p>
            </div>
          </div>

          {collabUsers.map((userdefine, index) => (
            <div
              key={index}
            >
              <div>
                <image className="image">P</image>
              </div>
              <div>
                <p>
                  {userdefine.firstName} {userdefine.LastName}
                </p>
                <p>
                  {userdefine.email}
                </p>
              </div>
          
            </div>
          ))}

          <div>
            <div>
              <Avatar className="iconsprops">
                <PersonAddOutlinedIcon fontSize="small" />
              </Avatar>
            </div>
            <div className="">
              <TextField
               placeholder="Person Mo No Or Email-Id"
               type="email"
               onChange={Popperevents}
               fullWidth
                id="email"
              
              
              />
              <Popper
                open={popperopendetails}
                anchorEl={anchorEl}
                placement="bottom-start"
              >
                <Paper>
                  {usersList.map((userdefine, index) => (
                    <p
                      key={index}
                    
                      onClick={(e) => {
                        handleAddUser(userdefine, e);
                      }}
                    >
                      {userdefine.email}
                    </p>
                  ))}
                </Paper>
              </Popper>
            </div>
          </div>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>
            Cancel
          </Button>
          <Button  color="primary blue">
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}