function Profile() {
  return (
    <div className="profile">
      <form>
        <h2>Hello username</h2>
        <input type="file" className="input-field" />
        <input
          type="text"
          className="input-field"
          placeholder="Tell us about yourself"
        />
        <input type="text" className="input-field" placeholder="First Name" />
        <input type="text" className="input-field" placeholder="Last Name" />
        <input type="text" className="input-field" placeholder="Age" />
        <input type="text" className="input-field" placeholder="pronouns" />
        <input type="text" className="input-field" placeholder="talent" />
        <input type="text" className="input-field" placeholder="company" />
        <input type="text" className="input-field" placeholder="industry" />
        <input type="text" className="input-field" placeholder="email" />
        <input type="url" className="input-field" placeholder="Instagram" />
        <input type="number" className="input-field" placeholder="Phone no." />
        <input type="submit" className="btn" value="Save" />
      </form>
    </div>
  );
}

export default Profile;
