import { Link } from "react-router-dom";

function NavBar() {

  return (
    <>
      <div className="navbar">
        <Link className="active" to="/Home">
          Home
        </Link>
        <Link className="loginlink" to="/Login">
          Login
        </Link>
      </div>
      <div className="navbar">
        <Link className="active" to="/Feed">
          Feed
        </Link>
        <Link className="loginlink" to="/Logout">
          Logout
        </Link>
        <Link className="loginlink" to="/Profile">
            Profile
        </Link>
      </div>
    </>
  );
}

export default NavBar;
