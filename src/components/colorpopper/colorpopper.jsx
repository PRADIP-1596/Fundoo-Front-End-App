import React from 'react';
import "./colorpopper.css"
import PaletteOutlinedIcon from "@material-ui/icons/PaletteOutlined";
import IconButton from "@material-ui/core/IconButton";
import Popper from '@material-ui/core/Popper';
import { makeStyles } from '@material-ui/core/styles';
import UserService from "../../Service/UserService";
const service = new UserService();

export default function ColorPalletPopper(props) {
  const [placement, setPlacement] = React.useState("top");
  const [anchorEl, setAnchorEl] = React.useState(null);

  const colors = [
    "#a7ffeb",
    "#cbf0f8",
    "#aecbfa",
    "#d7aefb",
    "#fdcfe8",
    "#e6c9a8",
    "#fff475",
    "#f28b82",
  ];

  const handleClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const handleClickGetColor = (e, color) => {
    props.handleClickGetColor(e, color);
  }

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popper' : undefined;

  return (
    <>
      <IconButton aria-label="Add colour" onClick={handleClick}>
        <PaletteOutlinedIcon fontSize="small" />
      </IconButton>
      <Popper id={id} open={open} anchorEl={anchorEl} placement={placement} disablePortal>
        <div className="color-icons-wrapper">
          {
            colors.map((color, index) => (
              <div className="color-icon" 
                key={index} 
                style={{ backgroundColor: color }} 
                onClick={(e) => handleClickGetColor(e, color)}
              > 
              </div>
            ))
          }
        </div>
      </Popper>
    </>
  );
}