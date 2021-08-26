import React  from 'react'
// import UserService from "../../service/Userservice";
import CreateNote from '../CreateNotes/CreateNote'
import DisplayNotes from '../DisplayNotes/DisplayNotes'

// const service = new UserService()
import UserService from "../../Service/UserService";

const service = new UserService();

export default class getNote extends React.Component {
    constructor(props){
        super(props)
        this.state={
            notes:[]
        }
    }
    componentDidMount(){
        this.GetNote();
    }

    GetNote = () => {
        console.log('called');
        service.displayNote()
        .then((res)=>{
            console.log(res);
            this.setState({notes:res.data.data.data})
        })
        .catch((err)=>{
            console.log(err);
        })
    }


    render(){
        return (
            <div>            
                <CreateNote updateData={this.getNote} /> 
                <DisplayNotes updateNote={this.props.getNote} 
                          NotesArray={this.state.notes} /> 
            </div>
        )
    }
} 