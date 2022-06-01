import { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import Login from "./Login";
import NavBar from "./NavBar";
import Home from "./Home";
import ContactUs from "./ContactUs";
import SignUp from "./SignUp";
import PostFeed from "./PostFeed";
import CreatePost from "./CreatePost";
import Profile from "./Profile";
import Inbox from "./Inbox";
import "../App.css";

function App() {
  const [currentUser, setCurrentUser] = useState();
console.log(currentUser)

useEffect(() => {
  fetch('/me')
    .then(res => res.json())
    .then(data => {
      if(data.errors){
        console.log(data.errors)
      }else{
        setCurrentUser(data)
      }
    })
}, [])


  return (
    <div className="App">
      <NavBar  setCurrentUser={setCurrentUser} currentUser={currentUser} />
      <Switch>
        <Route path="/Home">
          <Home />
        </Route>
        {/* <Route path="/">
          <Home />
        </Route> */}
        <div className="login-grid">
          <Route path="/Login" >
            <Login setCurrentUser={setCurrentUser} currentUser={currentUser} />
          </Route>
          <Route path="/SignUp" setCurrentUser={setCurrentUser}>
            <SignUp  currentUser={currentUser} />
          </Route>
        </div>
      </Switch>
      {/* <div className="feed-grid"> */}
      <Route path="/Feed">
        <PostFeed currentUser={currentUser}/>
      </Route>
      <Route path="/Profile">
        <Profile setCurrentUser={setCurrentUser} currentUser={currentUser}  />
      </Route>
      <Route path="/Inbox">
          <Inbox currentUser={currentUser}/>
        </Route>
      {/* </div> */}
      <ContactUs />
    </div>
  );
}

export default App;
