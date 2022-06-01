import { useState } from "react";
import { Link } from "react-router-dom";
// import CreatePost from "./CreatePost";
import Home from "./Home";

function Login({ setCurrentUser, currentUser }) {
  const [errorMessage, setErrorMessage] = useState("");
  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  function handleSubmit(e) {
    e.preventDefault(e);
    fetch("/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.errors) {
          console.log(data.errors);
          setErrorMessage("Invalid username or password");
        } else {
          setCurrentUser(data);
        }
      });
  }

  return (
    <>
      {currentUser ? (
        <Home />
      ) : (
        <div className="card">
          <h4 className="title">Log In!</h4>
          <form onSubmit={(e) => handleSubmit(e)}>
            {errorMessage && <p style={{ color: "#ce3030" }}>{errorMessage}</p>}
            <div className="field">
              <input
                autoComplete="off"
                id="logemail"
                placeholder="Username"
                className="input-field"
                name="logemail"
                type="text"
                onChange={(e) => setUser({ ...user, username: e.target.value })}
                value={user.username}
              />
            </div>
            <div className="field">
              <input
                autoComplete="off"
                id="logpass"
                placeholder="Password"
                className="input-field"
                name="logpass"
                type="password"
                onChange={(e) => setUser({ ...user, password: e.target.value })}
                value={user.password_digest}
              />
            </div>
            <input className="btn" type="submit" value="Login!" />
            <Link className="btn-link" to="/SignUp">
              Sign up!
            </Link>
          </form>
        </div>
      )}
    </>
  );
}

export default Login;

// const [user, setUser] = useState({
//   username: "",
//   password_digest: "",
//   email: "",
//   first_name: "",
//   last_name: "",
//   industry: "",
//   company: "",
//   pronouns: "",
//   talent: "",
//   instagram: "",
//   picture: "",
//   bio: "",
//   age: "",
//   phone_number: "",
// });
// action="https://google.com"
