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
import Grow from "@material-ui/core/Grow";
import Popper from "@material-ui/core/Popper";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";
import DeleteOutlineRoundedIcon from "@material-ui/icons/DeleteOutlineRounded";
import './Icon.css'
import UserService from '../../Service/UserService'
import SimplePopper from '../colorpopper/colorpopper';
const service = new UserService();

export default function Icon() {
  // useState hook allows us to use states in functional coponents
  const [open, setOpen] = React.useState(false);

  const handleToggle = () => {
    // If the menu is open the it will close the menu
    // setOpen(true);
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    setOpen(false);
  };
  const handleClickGetColor = (e, color) => { 
    console.log(color);
  }
  return (
    <div className="icons-group">
      
        <div className="icons-group">
          <IconButton aria-label="Remind me">
            <AddAlertOutlinedIcon fontSize="small" />
          </IconButton>
          <IconButton aria-label="Add colaborators">
            <PersonAddOutlinedIcon fontSize="small" />
          </IconButton>

          <div className="color-pallet-wrapper">
            <IconButton aria-label="Add colour" onClick={handleToggle}>
              <PaletteOutlinedIcon fontSize="small" />
            </IconButton>
            <SimplePopper
              open={open}
              handleClose={handleClose}
              handleClickGetColor={handleClickGetColor}
            />
          </div>

          <IconButton aria-label="Add image">
            <CropOriginalRoundedIcon fontSize="small" />
          </IconButton>

          <IconButton aria-label="Archive">
            <ArchiveOutlinedIcon fontSize="small" />
          </IconButton>
        </div>
    </div>
  )
}


// export default class Icon extends React.Component{
//   constructor(props){
//     super(props);
//     this.state =({anchorEl:null,
//     show:false,

//     colorpopper:false,
    
//   color:""
// })
  
//   }
  
//     archieveNote = (value)=>{
//         console.log(value);
//         let data = {
//           noteIdList: [value.id],
//           isArchived: true,
//         };
//         // let token = localStorage.getItem("Token");
//         // console.log(data)
//         // service.archieveNote(data,token)
//         //   .then((data) => {
//         //     console.log(data);
//         //   })
//         //   .catch((err) => {
//         //     console.log("error = " + err);
//         //   });
//      }
//     handleClick = (event) => {
//       this.setState({anchorEl:event.currentTarget})
//     };
  
//      handleClose = () => {
//       this.setState({colorpopper:false})
//     };

//     changeShow =()=>{
      
//       this.setState({colorpopper:true})
//     }

//     deleteNote = (e,value) => {
//       let token = localStorage.getItem('Token');
//       console.log("hai object delete");
//       let data = {
//           isDeleted: true,
//           noteIdList: [value.id]
//       }
//     //   service.deleteNote(data, token).then((result) => {
//     //       this.handleClose();
//     //       window.location.reload();
//     //       console.log(result);
//     //   }).catch((err) => {
//     //       console.log(err);
//     //   })
//   }
//   updateNote = (e,colorValue,value) => {
//     let token = localStorage.getItem("Token");
//      let data = {
//      noteIdList:[value.id],
//      color:colorValue,
//    }

//         // service.colorChange(data, token).then((result) => {
//         //     console.log(data);
//         //     console.log(result);
//         // }).catch((err) => {
//         //     console.log(err);
//         // })
// }
// sendColor=(e,value)=>{
//   console.log("send color");
//   this.props.SetColor(value);
// }
// // changeShow=(e)=>{
// //    this.props.getcolorfromicon(e.target.value);
  
// // }
// //  handleClick = (event) => {
// //   setAnchorEl(anchorEl ? null : event.currentTarget);
// // };
//     render(){
//       const colors = [ ' #d7aefb', '#a7ffeb', '#e8eaed', 
//       '#aecbfa', '#e6c9a8', '#fdcfe8', '#f28b82', '#aecbfa'];
//         return(
//             <>
//         <div className="inlineicons">
//             <AddAlertOutlinedIcon />
//             < PersonAddOutlinedIcon />
//             <ColorLensOutlinedIcon onClick={this.changeShow}  />
//                <SimplePopper  openhandle={this.state.colorpopper}   handleClose={this.handleClose}/>
//             <AddPhotoAlternateOutlinedIcon />
//             < ArchiveOutlinedIcon   onClick={()=>this.archieveNote(this.props.Notes)} ></ ArchiveOutlinedIcon>
//            <MoreVertOutlinedIcon onClick={(e)=>this.handleClick(e)} />
//            { this.state.show ? <div className="colorbox" >
//                     {colors.map((value) => {
//                         return (<><div className="colorsmall" onClick={(e)=>this.updateNote(e,value,this.props.Notes)} style={{ backgroundColor: value }}></div></>)
//                     })}

//                 </div>:null}
                
//            <Menu
//         id="simple-menu"
//         anchorEl={this.state.anchorEl}
//         keepMounted
//         open={Boolean(this.state.anchorEl)}
//         onClose={this.handleClose}
//       >
//         <MenuItem onClick={(e)=>this.deleteNote(e,this.props.Notes)}>Delete Note</MenuItem>
//         <MenuItem onClick={this.handleClose}>Add Label</MenuItem>
//         <MenuItem onClick={this.handleClose}>Add drawing</MenuItem>
//         <MenuItem onClick={this.handleClose}>Make a copy</MenuItem>
//         <MenuItem onClick={this.handleClose}>Show checkboxes</MenuItem>
        

//       </Menu>
//         </div> 
//         </>
//       )
//     }
// }