 import "./col.css";
import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import TextField from "@material-ui/core/TextField";
import PersonAddOutlinedIcon from "@material-ui/icons/PersonAddOutlined";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";

import Popper from "@material-ui/core/Popper";
import Paper from "@material-ui/core/Paper";
import UserService from "../../Service/UserService";
const service = new UserService();
export default function Collaborator(props) {
  const firstName = localStorage.getItem("firstName");
  const lastName = localStorage.getItem("lastName");
  const email = localStorage.getItem("email");
  const [userPopperOpen, setUserPopperOpen] = React.useState(false);
  const [collabUsers, setCollabUsers] = React.useState([]);
  const [usersList, setUsersList] = React.useState([]);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [open, setOpen] = React.useState(false);

const HandledChangePopperEvents = (e) => {
    if (e.target.value !== "") {
      setAnchorEl(anchorEl ? null : e.currentTarget);
      setUserPopperOpen(true);
      e.preventDefault();
  
      let data = {
        searchWord: e.target.value,
      };
      service.SearchUserList(data)
        .then((res) => {

          e.preventDefault();
          setUsersList(res.data.data.details);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      setAnchorEl(null);
      setUserPopperOpen(false);
    }
  };
  const handleSave = () => {
      setOpen(false);
  };
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div>
      <IconButton  onClick={handleClickOpen}>
        <PersonAddOutlinedIcon fontSize="small" />
      </IconButton>
      <Dialog
        fullWidth={true}
        open={open}
        onClose={handleClose}
      
      >
        <DialogTitle ><b>Collaborators</b></DialogTitle>
      
        <DialogContent>     
              <p>
                {firstName} {lastName}  {email}
              </p>
          {collabUsers.map((userdefine, index) => (
            <div
              key={index}
              >
              <div>
                <p>
                  {userdefine.firstName} {userdefine.lastName}
                </p>
                <p>
                  {userdefine.email}
                </p>
              </div>
            </div>
          ))}
          <div>
            <div>
              <Avatar>
                <PersonAddOutlinedIcon fontSize="small" />
              </Avatar>
            </div>
            <div >
              <TextField
                autoFocus
                id="email"
                placeholder="Person Details Or Mail Id "
                type="email"
                onChange={HandledChangePopperEvents}
                fullWidth
              />
              <Popper
                open={userPopperOpen}
                anchorEl={anchorEl}
                placement="bottom-start"
                transition
                className="user-list-popper-wrapper"
              >
                <Paper className="user-list-popper">
                  {usersList.map((userdefine, index) => (
                    <p
                      key={index}
                    >    {userdefine.email}
                    </p>
                  ))}
                </Paper>
              </Popper>
            </div>
          </div>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleSave} color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}