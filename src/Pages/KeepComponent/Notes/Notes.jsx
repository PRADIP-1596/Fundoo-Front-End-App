import React, { Component } from "react";
//  import { connect } from "react-redux";
import CreateNote from "../CreateNote/CreateNote.jsx";
import DisplayNotes from "../DisplayNotes/DisplayNotes";
import DashBoard from "../../Dashboard/DashBoard.jsx";
import { BrowserRouter as Router, Redirect } from "react-router-dom";
import { Route, Switch, useHistory } from "react-router";
// import ProtectedRouter from "../ProtectedRoute/ProtectedRoute";
import IconButton from "../IconButton/IconButton";

// import UserService from "../../Service/UserService";

// const service = new UserService();

class Notes extends Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: [],
    };
  }

  componentDidMount() {
    this.getANote();
  }

  getANote = () => {
   
  };

  render() {
    let filteredNotes = this.state.notes;
    if (this.props.searchData) {
      filteredNotes = this.state.notes.filter((i) =>
        i.title.toLowerCase().includes(this.props.searchData.toLowerCase())
      );
    }
    return (
      <>
        <CreateNote get={this.getANote} notes={this.state.notes} />
      </>
    );
  }
}

export default Notes;