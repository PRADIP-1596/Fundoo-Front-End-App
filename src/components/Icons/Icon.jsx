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
import UserService from '../../Service/UserService'
import ColorPalletPopper from '../colorpopper/colorpopper';
import AddCollaborator from '../Collabarotors/Collabrator';
import ArchievedNote from '../ArchieveNotes/ArchievedNotes';
import { Colorize } from '@material-ui/icons';




export default function Icon(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  
  const handleClick = event => {
    setAnchorEl(event.currentTarget);
};

 
  
  const handleClickGetColor = (e, color) => { 
    console.log("color",color);
    props.getcolorfromicon(color);
  }
  const handleClickArchive = (e,value) => { 
  console.log("detailsarchieveelements",value);
  props. getarchieveicon(value)
    
  }
  return (
    <div className="icons-group">
       
        <div className="icons-group">
          <IconButton aria-label="Remind me">
            <AddAlertOutlinedIcon fontSize="small" />
          </IconButton>
          <IconButton aria-label="Add colaborators">
            {/* <PersonAddOutlinedIcon fontSize="small" /> */}
            <AddCollaborator handleClick={handleClick} />
          </IconButton>

          <div className="color-pallet-wrapper">
            {/* <IconButton aria-label="Add colour" onClick={handleToggle}>
              <PaletteOutlinedIcon fontSize="small" />
            </IconButton>
            <SimplePopper
              open={open}
              handleClose={handleClose}
              handleClickGetColor={handleClickGetColor}
            /> */}
            <ColorPalletPopper handleClickGetColor={handleClickGetColor}  />
          </div>

          <IconButton aria-label="Add image">
            <CropOriginalRoundedIcon fontSize="small" />
          </IconButton>

          <IconButton aria-label="Archive">
        

          <IconButton aria-label="Archive" onClick={handleClickArchive}>
              <ArchiveOutlinedIcon fontSize="small" />
            </IconButton>
            {/* <ArchiveOutlinedIcon noteArchived={noteArchived}/> */}
            {/* <ArchievedNote data={props.data}  newData = {props.getnotes}/> */}
          </IconButton>
        </div>
    </div>
  )
}


