import React, { useEffect } from 'react'
import { Popover, Button, Card,  Avatar,  ListItemIcon, Tooltip, ListItemAvatar, ListItem, ListItemText,  TextField, Snackbar } from '@material-ui/core';
 import PersonAddIcon from '@material-ui/icons/PersonAdd';
// import { collaborate, getCollaboratorList } from '../Service/Service';
import PersonIcon from '@material-ui/icons/Person';
import AddIcon from '@material-ui/icons/Add';
import { makeStyles } from '@material-ui/core/styles';
// import UserService from '../../Service/UserService'


const useStyles = makeStyles((theme) => ({
 
  
}));

export default function AddCollaborator(props) {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  
  const [collaboaratorlist, setCollaboratorlist] = React.useState([]);
  

  useEffect(() => {
    collaboratorList();

  }, [])


  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const collaboratorList = () => {
   
  }

  const addCollaborator = (noteid) => {
 
  }

  const open = Boolean(anchorEl);
  return (
    <div>
      <ListItemIcon><Tooltip title="Collaborator"><PersonAddIcon onClick={handleClick} /></Tooltip></ListItemIcon>
      <Popover
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'right',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
      >
        <Card style={{ width: "620px" }} onClick={() => collaboratorList()}>
          <div>
            <h4 style={{ fontFamily: "arial", padding: "10px", fontSize: "16px" }}> Collaborators</h4>
          </div>
          {collaboaratorlist.map(o =>
            <div>
              <ListItem  >
                <ListItemAvatar>
                  <Avatar >
                    <PersonIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText> {o.collabEmail}</ListItemText>
              </ListItem>
            </div>
          )}
          <ListItem>
            <ListItemAvatar>
              <Avatar>
                <AddIcon />
              </Avatar>
            </ListItemAvatar>
            <TextField name="colaborateEmailId" placeholder="enter emailId" name="collaborator" ></TextField>
          </ListItem>
        </Card>
        <Card style={{ backgroundColor: "", height: "50px" }}>
          <div className="collab" style={{ marginLeft: "380px", marginTop: "10px" }}>
            <Button size="small" >cancel</Button>
            <Button size="small">Save</Button>
           
          </div>
        </Card>
      </Popover>
    </div>
  )
}