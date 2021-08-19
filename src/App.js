// import logo from './logo.svg';
import './App.css';
// import ForgotPassword from './Pages/ForgotPassword/ForgotPassword';
import Login from './Pages/Login/Login';
// import Login from './Pages/Login/Login';
import Registration from './Pages/Regisration/Registration';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ForgotPassword from "./Pages/ForgotPassword/ForgotPassword";
import { Resetpassword } from "./Pages/ResetPassword/Resetpassword";
 import Dashboard from './Pages/Dashboard/DashBoard';
// import CreateNote from './Component/CreateNote/CreateNote';
// import Notes from './Component/Notes';


function App() {
  return (
    
     <div className="App">
      <Router>
      
          <Switch>
             <Route exact path="/" component={Login}></Route>  
          <Route exact path="/Registration" component={Registration}></Route>
          <Route exact path="/Resetpassword" component={Resetpassword}></Route>
          <Route exact path="/ForgotPassword" component={ForgotPassword}></Route>  
     <Dashboard/> 
     {/* <CreateNote/> */}

     {/* <Notes/> */}
          {/* <Route
            exact
            path="/forgotpassword"
            component={ForgotPassword}
          ></Route> */}
          {/* <Route path="/resetpassword" component={ResetPassword}></Route>
          <Route path="/fundooKeep" component={NotesContainer} /> */}
        </Switch>
      </Router>
    </div>
  
  );
}

export default App;
