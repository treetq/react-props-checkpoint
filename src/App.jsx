import { useState } from "react";
import "./App.css";
import Profile from "./Profile/Profile";
import photoProfile from "../src/assets/zinitsu.jpg";

function App() {
  const profilePhoto = {
    width: "100px",
    height: "100px",

    borderRadius: "50%",
    objectFit: "cover",
    boxShadow: " 0px 0px 18px #eee",
  };
  const handleName = (name) => {
    alert(`my username: ${name}`);
  };

  return (
    <div className="app">
      <Profile
        fullName="Tarek Khireddine"
        bio="FullStack MERN"
        profession="Engineer"
        handleName={handleName}
      >
        {/* pass the image as a children using props on the profile component */}
        <img
          src={photoProfile}
          alt="Zinistsu from DemonSLayer ^^ Image"
          style={profilePhoto}
        />
      </Profile>
    </div>
  );
}

export default App;
