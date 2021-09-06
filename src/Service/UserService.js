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
    addNote = (data) => {
        return axiosservice.postMethod(`${baseUrl}/notes/addNotes`,data,config);
    };
    displayNote = () => {
        return axiosservice.getMethod(`${baseUrl}/notes/getNotesList`,config);
    };
    SearchUserList = (data, token) => {
        return axiosservice.postMethod(`${baseUrl}/user/searchUserList`, data, token, config);
    };
    archiveNotes = (data) => {
        return axiosservice.postMethod(`${baseUrl}/notes/archiveNotes`, data, config);
    };
    UpdatesNotes = (data) => {
        return axiosservice.postMethod(`${baseUrl}/notes/addUpdateReminderNotes`, data, config);
    };
    TrashNotes = (data) => {
        return axiosservice.postMethod(`${baseUrl}/notes/trashNotes`, data, config);
    };
    ArchiveNote = (data) => {
        return axiosservice.postMethod(`${baseUrl}notes/archiveNotes`, data, config);
      }
      GetArchiveNotesList = () => {
        return axiosservice.getMethod(`${baseUrl}notes/getArchiveNotesList`,config);
      };

    //  = (data) => {
    //     return axiosservice.postMethod(`${baseUrl}/notes/archiveNotes`, data, config);
    // }
    // archiveNotes = (data, token) => {
    //     return axios.postMethod(`${this.baseURL}notes/archiveNotes`, data, { headers: {"Authorization" : token} });
    // }
}



export default UserService
