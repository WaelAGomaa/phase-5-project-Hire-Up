import { useState } from "react";
import { FaPhone, FaEnvelope, FaInstagram  } from "react-icons/fa";
import Home from "./Home";

function Profile({ setCurrentUser, currentUser }) {
  const [isShow, setShow] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    if (currentUser) {
      fetch(`/users/${currentUser.id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(currentUser),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.errors) {
            console.log(data.errors);
          } else {
            console.log("update success!:", data);
          }
        });
    }
  }
  const deleteAccount = () => {
    fetch(`/users/${currentUser.id}`, {
      method: "DELETE",
    }).then(() => {
      setCurrentUser(null);
    });
  };

  function toggleShow() {
    setShow(!isShow);
  }
  // const handleFileInput = () => {}
  return (
    <>
      {currentUser ? (
        <>
          <div className="profile">
            <div>
              <h3>Hello {currentUser.username}</h3>
              {isShow ? (
                <form onClick={handleSubmit}>
                  <input
                    type="file"
                    id="picture"
                    accept="image/png, image/gif, image/jpeg"
                    multiple
                    // value={currentUser.picture}
                    // onChange={handleFileInput}
                    onChange={(e) => {
                      setCurrentUser((currentUser) => ({
                        ...currentUser,
                        picture: e.target.files[0],
                      }));
                    }}
                    className="input-field-profile"
                    style={{ border: "none" }}
                  />
                  {/* <input type="submit"></input> */}
                  <input
                    type="text"
                    className="input-field-profile"
                    placeholder="Tell us about yourself"
                    onChange={(e) =>
                      setCurrentUser({ ...currentUser, bio: e.target.value })
                    }
                  />
                  <input
                    type="text"
                    className="input-field-profile"
                    placeholder="First Name"
                    onChange={(e) =>
                      setCurrentUser({
                        ...currentUser,
                        first_name: e.target.value,
                      })
                    }
                  />
                  <input
                    type="text"
                    className="input-field-profile"
                    placeholder="Last Name"
                    onChange={(e) =>
                      setCurrentUser({
                        ...currentUser,
                        last_name: e.target.value,
                      })
                    }
                  />
                  <input
                    type="text"
                    className="input-field-profile"
                    placeholder="Age"
                    onChange={(e) =>
                      setCurrentUser({ ...currentUser, age: e.target.value })
                    }
                  />
                  <select
                    type="text"
                    className="input-field-profile"
                    onChange={(e) =>
                      setCurrentUser({
                        ...currentUser,
                        pronouns: e.target.value,
                      })
                    }
                    placeholder="pronouns"
                  >
                    <option value="" disabled selected hidden>
                      Pronouns...
                    </option>
                    <option value="He/Him">He/Him</option>
                    <option value="She/Her">She/Her</option>
                    <option value="They/Them">They/Them</option>
                    <option value="Prefer Not to say">Prefer Not to say</option>
                  </select>
                  <input
                    type="text"
                    className="input-field-profile"
                    placeholder="talent"
                    onChange={(e) =>
                      setCurrentUser({ ...currentUser, talent: e.target.value })
                    }
                  />
                  <input
                    type="text"
                    className="input-field-profile"
                    placeholder="industry"
                    onChange={(e) =>
                      setCurrentUser({
                        ...currentUser,
                        industry: e.target.value,
                      })
                    }
                  />
                  <input
                    type="text"
                    className="input-field-profile"
                    placeholder="email"
                    onChange={(e) =>
                      setCurrentUser({ ...currentUser, email: e.target.value })
                    }
                  />
                  <input
                    type="url"
                    className="input-field-profile"
                    placeholder="Instagram"
                    onChange={(e) =>
                      setCurrentUser({
                        ...currentUser,
                        instagram: e.target.value,
                      })
                    }
                  />

                  <input
                    type="tel"
                    className="input-field-profile"
                    placeholder="Phone no."
                    onChange={(e) =>
                      setCurrentUser({
                        ...currentUser,
                        phone_number: e.target.value,
                      })
                    }
                  />
                  <input type="submit" className="btn" value="Save" />
                </form>
              ) : (
                <button
                  style={{ marginBottom: "160%" }}
                  className="btn"
                  onClick={toggleShow}
                >
                  Edit Profile
                </button>
              )}
              {/* <input type="button" className="btn" value="Edit" onclick={toggleShow}/> */}
            </div>
            <div className="Images">
              <img
                src={currentUser.picture}
                style={{ width: "20%", margin: "0 auto" }}
              />
              <img
                src={currentUser.picture}
                style={{ width: "20%", margin: "0 auto" }}
              />
              <img src="http://placehold.it/" />
              <img src="http://placehold.it/" />
              <img
                style={{ width: "10%", margin: "0 auto", borderradius: "30px" }}
                src="http://www.transparentpng.com/thumb/logo-instagram/YfpFOL-logo-instagram-free-transparent.png"
              />
            </div>
            <div>
              <h3>{currentUser.bio}</h3>
              <h3>
                {currentUser.first_name} {currentUser.last_name}
              </h3>
              <h3>{currentUser.age}</h3> <h3>{currentUser.pronouns}</h3>
              <h3>{currentUser.talent}</h3> <h3>{currentUser.industry}</h3>
            </div>
            <div>
              <h5>
                <FaEnvelope /> {currentUser.email}
              </h5>
              <h3>
                <FaInstagram /> {currentUser.instagram}
              </h3>
              <h3>
                <FaPhone /> {currentUser.phone_number}
              </h3>
            </div>
            <div>
              <button className="delBtn" onClick={deleteAccount}>
                Delete Account
              </button>
            </div>
          </div>
        </>
      ) : (
        <Home />
      )}
    </>
  );
}

export default Profile;
