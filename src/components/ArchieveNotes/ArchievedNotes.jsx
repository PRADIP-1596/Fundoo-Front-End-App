import React, { useEffect } from "react";
// import "./archiveStyles.scss";
// import DisplayNotes from "../displayNote/displayNote";
// import NoteService from "../../services/noteService";
import DisplayNotes from "../DisplayNotes/DisplayNotes";
import ArchievedNote from "./ArchieveNotes.css";
import UserService from "../../Service/UserService";
const service = new UserService();

// const Service = new NoteService();

export default function Trash(props) {
  const [notes, setNotes] = React.useState([]);

  const handleClickArchive  = (e,value) => {
    props.handleClickArchive (e, value);
  }

  const displayNote = () => {
    const token = localStorage.getItem("token");
    service.archiveNotes(token)
      .then((noteData) => {
        let data = noteData.data.data.data;
        //filter data
        let newArray = data.filter(function (e) {
          return e.isArchived == true && e.isDeleted == false;
        });
        setNotes(newArray);
      })
      .catch((error) => {
        console.log("Data fetch error in archives: ", error);
      });
  };
  useEffect(() => {
    displayNote();
  }, []);
  return (
    <div className="dashboard-notes-container">
      <div className="display-note-container">
        <DisplayNotes notes={notes} displayNote={displayNote} />
      </div>
    </div>
  );
}