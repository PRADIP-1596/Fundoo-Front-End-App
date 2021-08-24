import React, { useState, useEffect } from 'react';
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Grow from "@material-ui/core/Grow";
import Popper from "@material-ui/core/Popper";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";

export default function ColorPalletMenu(props) {
  const colors = [
    '#d7aefb', '#a7ffeb', '#e8eaed', '#aecbfa', '#e6c9a8', '#fdcfe8', '#f28b82', '#aecbfa',
  ];
  const handleClickGetColorCode = (e, color) => {
    props.handleClickGetColor(e, color);
  };
  const handleClickMenuClose = () => {
    props.handleClose();
  };
  return (
    <Popper
      open={props.open}
      role={undefined}
      className=""
      anchorOrigin={{
        vertical: "top",
        horizontal: "left",
      }}
      transformOrigin={{
        vertical: "bottom",
        horizontal: "left",
      }}
      transition
      disablePortal
    >
      {({ TransitionProps, placement }) => (
        <Grow
          {...TransitionProps}
          style={{
            transformOrigin:
              placement === "top" ? "center bottom" : "center top",
          }}
        >
          <div className="">
              <MenuList
                autoFocusItem={props.cpOpen}
                id="menu-list-grow"
              >
                {colors.map((color, index) => (
                  <MenuItem
                    key={index}
                    className=""
                    style={{ backgroundColor: color }}
                    onClick={(e) => handleClickGetColorCode(e, color)}
                  ></MenuItem>
                ))}
              </MenuList>
          </div>
        </Grow>
      )}
    </Popper>
  );
}