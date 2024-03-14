import React from "react";
import "./Homepage.css";
import FileUpload from "./FileUpload";

function Homepage() {
  return (
    <div className="wrapper">
      <div className="content-container">
        <div className="nav-bar">
          <button className="button-18">New Upload</button>
          <button className="button-28">Recent</button>
        </div>

        <div className="body">
          <FileUpload />
        </div>
      </div>
    </div>
  );
}

export default Homepage;
