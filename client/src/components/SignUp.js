import { useState } from "react";
import Feed from "./Feed";

function SignUp({ setCurrentUser , currentUser}) {
  const [user, setUser] = useState({
    username: "",
    password: "",
    email: "",
    industry: "",
  });


  function handleSubmit(e) {
    e.preventDefault();

    fetch("/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: user.username,
        password: user.password,
        email: user.email,
        industry: user.industry,
      }),
    })
      .then((r) => r.json())
      .then((r) => setUser);

  }

  return (
    <>
    {currentUser ? (
        <Feed />
      ) : (
    <div className="card">
      <h4 className="title">Sign Up!</h4>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div className="field">
          <input
            autoComplete="off"
            placeholder="Username"
            className="input-field"
            type="text"
            onChange={(e) => setUser({ ...user, username: e.target.value })}
            value={user.username}
          />
        </div>
        <div className="field">
          <input
            autoComplete="off"
            placeholder="Password"
            className="input-field"
            type="password"
            onChange={(e) => setUser({ ...user, password: e.target.value })}
            value={user.password}
          />
        </div>
        <div className="field">
          <input
            autoComplete="off"
            placeholder="Email"
            className="input-field"
            type="email"
            onChange={(e) => setUser({ ...user, email: e.target.value })}
            value={user.email}
          />
        </div>
        <div className="field">
          <input
            autoComplete="off"
            id="logpass"
            placeholder="Industry"
            className="input-field"
            type="text"
            onChange={(e) => setUser({ ...user, industry: e.target.value })}
            value={user.industry}
          />
        </div>
        <input className="btn" type="submit" value="Sign Up!" />
      </form>
    </div>
  )}
  </>
  );
}
export default SignUp;
