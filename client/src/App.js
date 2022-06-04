import { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Login from "./components/Login";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import ContactUs from "./components/ContactUs";
import SignUp from "./components/SignUp";
import PostFeed from "./components/PostFeed";
import CreatePost from "./components/CreatePost";
import Profile from "./components/Profile";
import ChatPage from "./components/ChatPage";

import "./App.css";


function App({ cableApp }) {
  // const [messageNotifications, setMessageNotifications] = useState({});
  const [currentUser, setCurrentUser] = useState();
  // const {receiver_id} = useParams() || null;
  // const [channel, setChannel] = useState();
  
  // console.log(currentUser);

  useEffect(() => {
    fetch("/me")
      .then((res) => res.json())
      .then((data) => {
        if (data.errors) {
          console.log(data.errors);
        } else {
          setCurrentUser(data);
        }
      });
  }, []);


  return (
    <div className="App">
      <NavBar setCurrentUser={setCurrentUser} currentUser={currentUser} />
      <Switch>
        <Route path="/Home">
          <Home />
        </Route>

        <div className="login-grid">
          <Route path="/Login">
            <Login setCurrentUser={setCurrentUser} currentUser={currentUser} />
          </Route>
          <Route path="/SignUp">
            <SignUp currentUser={currentUser} setCurrentUser={setCurrentUser} />
          </Route>
        </div>
      </Switch>

      <Route path="/Feed">
        <PostFeed currentUser={currentUser} />
      </Route>
      <Route path="/Profile">
        <Profile setCurrentUser={setCurrentUser} currentUser={currentUser} />
      </Route>
      <Route path='/messages/:receiver_id'>
            <ChatPage currentUser={currentUser} 
            />
          </Route>
      <ContactUs />
      {/* { (currentUser && messageNotifications) && 
      <div className='chat-notification-bar'>
        {renderMessageNotifications}
      </div>
      } */}
    </div>
  );
}

export default App;
