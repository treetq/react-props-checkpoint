import React from "react";
import PropTypes from "prop-types";

const Profile = ({ fullName, bio, profession, children, handleName }) => {
  //the inline style

  const profileAllDetails = {
    padding: "10px",
    marginTop: "10px",
  };

  const handleClick = () => {
    const name = fullName; // Accessing the fullName prop
    handleName(name); // Calling the prop function with the name parameter
  };

  return (
    <div className="profile">
      <div className="profile-image">{children}</div>
      <div className="profile-details" style={profileAllDetails}>
        <h2>{fullName}</h2>
        <p>{bio}</p>
        <p>{profession}</p>
      </div>
      <button onClick={handleClick}>Show Name</button>
    </div>
  );
};

Profile.defaultProps = {
  fullName: "First & last name",
  bio: "Your profile title",
  profession: "job",
  handleName: () => {
    // just alert message to show it to the user if there are no props
    alert("check your informations, because ain't no informations");
  },
};

Profile.propTypes = {
  fullName: PropTypes.string.isRequired,
  bio: PropTypes.string.isRequired,
  profession: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
  handleName: PropTypes.func.isRequired,
};

export default Profile;
