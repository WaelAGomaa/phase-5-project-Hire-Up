import { useState } from "react";
import { Switch, Route } from "react-router-dom";
import Login from "./Login";
import NavBar from "./NavBar";
import Home from "./Home";
import ContactUs from "./ContactUs";
import SignUp from "./SignUp";
import Feed from "./Feed";
import Profile from "./Profile";
import "../App.css";

function App() {
  const [currentUser, setCurrentUser] = useState();

  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route path="/Home">
          <Home />
        </Route>

        <div className="login-grid">
          <Route path="/Login" setCurrentUser={setCurrentUser}>
            <Login />
          </Route>
          <Route path="/SignUp" setCurrentUser={setCurrentUser}>
            <SignUp />
          </Route>
        </div>
      </Switch>
      {/* <div className="feed-grid"> */}
      <Route path="/Feed">
        <Feed />
      </Route>
      <Route path="/Profile">
        <Profile />
      </Route>
      {/* </div> */}
      <ContactUs />
    </div>
  );
}

export default App;
