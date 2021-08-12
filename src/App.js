import logo from './logo.svg';
import './App.css';
// import ForgotPassword from './Pages/ForgotPassword/ForgotPassword';
import Login from './Pages/Login/Login';
// import Login from './Pages/Login/Login';
import Registration from './Pages/Regisration/Registration';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ForgotPassword from "./Pages/ForgotPassword/ForgotPassword";
import { Resetpassword } from "./Pages/ResetPassword/Resetpassword";


function App() {
  return (
    
     <div className="App">
      <Router>
      <Route exact path="/" component={Login}></Route>
        <Switch>
          <Route exact path="/Registration" component={Registration}></Route>
          <Route exact path="/Resetpassword" component={Resetpassword}></Route>
          <Route exact path="/ForgotPassword" component={ForgotPassword}></Route>
    
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
