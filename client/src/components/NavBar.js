import { Link } from "react-router-dom";
// import { FaHome } from "react-icons/fa";
function NavBar({ setCurrentUser, currentUser }) {


  console.log(currentUser);

  const logout = () => {
    fetch("/logout", {
      method: "DELETE",
    }).then(() => {

      setCurrentUser(null);
    });
  };
  return (
    <>
      {currentUser ? (
    <>
        <div className="navbar">
        {/* <Link className="active" to="/Home">
          Home 
          <FaHome />
        </Link> */}
        <Link className="active" to="/Feed">
          Feed
        </Link>
        <button className="logoutlink" onClick={logout}>Logout</button>
        {/* <Link className="loginlink" to="/Logout">
          Logout
        </Link> */}
        <Link className="loginlink" to="/Profile">
          Profile
        </Link>
      </div>
    
      </>
      ) : (
        <>
    <div className="navbar">
           <Link className="active" to="/Home">
          Home
        </Link>
        <Link className="loginlink" to="/Login">
          Login
        </Link>
      </div>
    </>
      )}
    </>
  );
}

export default NavBar;
