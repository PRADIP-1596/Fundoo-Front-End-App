import React from 'react'
import IconButton from "@material-ui/core/IconButton";
import AddAlertOutlinedIcon from "@material-ui/icons/AddAlertOutlined";
import PersonAddOutlinedIcon from "@material-ui/icons/PersonAddOutlined";
import PaletteOutlinedIcon from "@material-ui/icons/PaletteOutlined";
import CropOriginalRoundedIcon from "@material-ui/icons/CropOriginalRounded";
import ArchiveOutlinedIcon from "@material-ui/icons/ArchiveOutlined";
import UnarchiveOutlinedIcon from "@material-ui/icons/UnarchiveOutlined";
import RestoreFromTrashRoundedIcon from "@material-ui/icons/RestoreFromTrashRounded";
import DeleteForeverRoundedIcon from "@material-ui/icons/DeleteForeverRounded";
import MoreVertRoundedIcon from "@material-ui/icons/MoreVertRounded";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import DeleteOutlineRoundedIcon from "@material-ui/icons/DeleteOutlineRounded";
import './Icon.css'

import Trash from '../Trash/Trash'
import UserService from '../../Service/UserService'
import ColorPalletPopper from '../colorpopper/colorpopper';
import Collaborator from '../Collabarotors/Collabrator';
import ArchievedNote from '../ArchieveNotes/ArchievedNotes';
import { Colorize } from '@material-ui/icons';
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined';

import ArchieveNotes from '../ArchieveNotes/ArchievedNotes';
import  Alert from  '../Alert/Alert'
import DeleteIcon from '@material-ui/icons/Delete';



export default function Icon(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [anchorE2, setAnchorE2] = React.useState(null);
  const [snackbarMsg, setSnackbarMsg] = React.useState("");

  
  const handleClickarchieveopen = event => {
    setAnchorEl(event.currentTarget);
};
const handleClick = event => {
  setAnchorEl(event.currentTarget);
};
const handleClick2 = event => {
  setAnchorE2(event.currentTarget);
};
const noteTrash = event => {
  setAnchorE2(event.currentTarget);
};
  const handleClickGetColor = (e, color) => { 
    console.log("color",color);
    props.getcolorfromicon(color);
  }
  // Collaborator
  const handleClickOpen = (e) => { 
    // console.log("color",color);
    props.getcollabarators(e);
  }
  const handleClickArchive = (e,value) => { 
  console.log("detailsarchieveelements",value);
  // props. getarchieveicon(value)
    
  }
  return (
    <div className="icons-group">
       
        <div className="icons-group">
          <IconButton aria-label="Remind me">
            {/* <AddAlertOutlinedIcon fontSize="small" /> */}
            {/* <AddCollaborator handleClick={handleClick} /> */}
            <Alert  function={handleClick2} />
          </IconButton>
          <IconButton aria-label="Add colaborators">
            {/* <PersonAddOutlinedIcon fontSize="small" /> */}
            <Collaborator handleClickOpen={handleClickOpen} />
          </IconButton>
          <IconButton aria-label="Archive">
            {/* <PersonAddOutlinedIcon fontSize="small" /> */}
            <ArchieveNotes  handleClick={handleClick} />
          </IconButton>
          <IconButton aria-label="DeleteOutlinedIcon">
           <DeleteOutlinedIcon  handleclick={noteTrash}/>             
          </IconButton>

          <div className="color-pallet-wrapper">
          
            <ColorPalletPopper handleClickGetColor={handleClickGetColor}  />
          </div>

          <IconButton aria-label="Add image">
            <CropOriginalRoundedIcon fontSize="small" />
          </IconButton>

          <IconButton aria-label="Archive">
          </IconButton>
        </div>
    </div>
  )
}


