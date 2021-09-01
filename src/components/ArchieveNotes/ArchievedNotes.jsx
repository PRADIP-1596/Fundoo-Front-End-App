import React from 'react'
import { ListItemIcon, Tooltip, Snackbar } from '@material-ui/core'
import ArchiveIcon from '@material-ui/icons/Archive';
// import { archived } from '../Service/Service'
import { makeStyles } from '@material-ui/core/styles';

import UserService from "../../Service/UserService"; //import the service from service folder 
const service = new UserService();               //to create an object as userservice part

const useStyles = makeStyles((theme) => ({
  snackbar: {
    [theme.breakpoints.down('xs')]: {
      bottom: 90,
    },
  },
}));
//declared the archievenote functions 
export default function ArchievedNote(props) {
    const classes = useStyles();
    const [snackbar, setSnackbar] = React.useState(false);
    const [snackbarMsg, setSnackbarMsg] = React.useState("");     //set the react hooks 

    const snackbarClose = () => {
        setSnackbar(false);
      }

    const noteArchived = () => {
       
        service.Archievedatadetails()    //declared the service parts 
            .then(response => {
                setSnackbar(true);
                setSnackbarMsg(response.data.message);
                props.newData();
            }).catch(error => {
                console.log( error) //handled the error msg 
            })
    }

    return (
        <ListItemIcon>
            <Tooltip title="Archive">
                <ArchiveIcon onClick={() => noteArchived(props.data)}></ArchiveIcon></Tooltip>
                <Snackbar
              open={snackbar}
              autoHideDuration={4000}
              onClose={snackbarClose}
              message={snackbarMsg}
            //   className={classes.snackbar}
            />
        </ListItemIcon>
        
    )
}