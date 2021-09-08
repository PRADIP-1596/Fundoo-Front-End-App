import React, { useEffect } from "react";

import UserService from "../../Service/UserService";

const service = new UserService();

export default function Trash() {
  const [notes, setNotes] = React.useState([]);

  const displayNote = () => {
    const token = localStorage.getItem("token");
    service.TrashNotes(token)
      .then((noteData) => {
        let data = noteData.data.data.data;
        //filter data
        let newArray = data.filter(function (e) {
          return e.isArchived == false && e.isDeleted == true;
        });
        setNotes(newArray);
      })
      .catch((error) => {
        console.log("Data fetch error in trash: ", error);
      });
  };
  useEffect(() => {
    displayNote();
  }, []);
  return (
    <div className="dashboard-notes-container">
      <div className="display-note-container">
        {/* <DisplayNotes notes={notes} displayNote={displayNote} /> */}
      </div>
    </div>
  );
}