import React, { useEffect } from 'react'
import { Popover, Button, Card,  Avatar,  ListItemIcon, Tooltip, ListItemAvatar, ListItem, ListItemText,  TextField, Snackbar } from '@material-ui/core';
 import PersonAddIcon from '@material-ui/icons/PersonAdd';
// import { collaborate, getCollaboratorList } from '../Service/Service';
import PersonIcon from '@material-ui/icons/Person';
import AddIcon from '@material-ui/icons/Add';
import { makeStyles } from '@material-ui/core/styles';
// import UserService from '../../Service/UserService'
// import './col.css';
import ArchiveOutlinedIcon from "@material-ui/icons/ArchiveOutlined";
import  './ArchieveNotes.css';

// import  './ArchievedNotes.css';


const useStyles = makeStyles((theme) => ({
 
  
}));

export default function ArchieveNotes(props) {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  
  const [collaboaratorlist, setCollaboratorlist] = React.useState([]);
  

  useEffect(() => {
    collaboratorList();

  }, [])


  const handleClickarchieveopen = event => {
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
      <ListItemIcon><Tooltip title="Collaborator"><ArchiveOutlinedIcon onClick={handleClickarchieveopen} /></Tooltip></ListItemIcon>
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
        <Card style={{backgroundColor: "whitesmoke", width: "620px" }} onClick={() => collaboratorList()}>
          <div>
            <h4 style={{ fontFamily: "arial", padding: "10px", fontSize: "16px" }}>ArchieveNotesPart</h4>
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
                {/* <AddIcon /> */}
              </Avatar>
            </ListItemAvatar>
            <h5>NoteArchieved</h5>
            <div class="retailsname">
            <h3>Undo</h3>
            </div>
            {/* <h6 style="margin-left:25px">Undo</h6> */}
            {/* <TextField name="colaborateEmailId" placeholder="enter emailId" name="AechieveNotesPart" ></TextField> */}
          </ListItem>
        </Card>
        <Card style={{ backgroundColor: "black", height: "50px" }}>
          <div className="collab" style={{ marginLeft: "380px", marginTop: "10px" }}>
            <Button size="small" >cancel</Button>
            <Button size="small">Save</Button>
           
          </div>
        </Card>
      </Popover>
    </div>
  )
}