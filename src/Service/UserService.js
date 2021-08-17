import Axios from './axiosservice'
// import UserService from'./UserService'
const axiosservice = new Axios();
// const service = new UserService();
const baseUrl = 'http://fundoonotes.incubation.bridgelabz.com/api'
const config = {
    headers: {
        'Content-Type': 'application/json',
        'Authorization': localStorage.getItem('token')
    }
};
class UserService {
    Registration = (data) => {
        console.log("registration here");
        return axiosservice.postMethod(`${baseUrl}/user/userSignUp`, data )
    }
    Login = (data) => {
        return axiosservice.postMethod(`${baseUrl}/user/login`, data)
    }
    ForgetPassword = (data) => {
        return axiosservice.postMethod(`${baseUrl}/user/reset`,data,config)
    }
    ResetPassword = (data) => {
        return axiosservice.postMethod(`${baseUrl}/user/reset-password`,data,config)
    }
    AddNote = (data) => {
        let configFile = {
            headers: {
              "Content-Type": "multipart/form-data",
              Authorization: localStorage.getItem("token"),
            },
          };
        return axiosservice.postMethod(`${baseUrl}notes/addNotes`, data, configFile)
    }
    GetNote = () => {
        let config = {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': localStorage.getItem('token')
            }
        }
        return axiosservice.getMethod(`${baseUrl}notes/getNotesList`,  config)

    }
    ArchiveNote = (data) => {
        return axiosservice.postMethod(`${baseUrl}notes/archiveNotes`, data, config);
      }
    DeleteNote = (data) => {
        return axiosservice.postMethod(`${baseUrl}notes/trashNotes`, data, config);
    }
    ChangeColor = (data) => {
        return axiosservice.postMethod(`${baseUrl}notes/changesColorNotes`,data,config);
      };
    UpdateNotes = (data) => {
        return axiosservice.postMethod(`${baseUrl}notes/updateNotes`,data,config);
      };
    
    GetArchiveNotesList = () => {
        return axiosservice.getMethod(`${baseUrl}notes/getArchiveNotesList`,config);
      };
    
    GetTrashNotesList = () => {
        return axiosservice.getMethod(`${baseUrl}notes/getTrashNotesList`, config);
      };   
}   


export default UserService
