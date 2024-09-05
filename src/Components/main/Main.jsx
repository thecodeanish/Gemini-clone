import React from "react";
import "./Main.css";
import { icons } from "../../assets/icons";

const Main = () => {
  return (
    <div>
      <div className="main">
        <div className="navbar">
          <p>Gemini</p>
          <img src={icons.avatar_boy} />
        </div>
        <div className="main-container">
          <div className="greet">
            <p>
              <span>Hello, Anish</span>
            </p>
            <p>How can I help you today?</p>
          </div>
          <div className="cards">
            <div className="single-card">
              <p>Road trip drive time and kid entertainment ideas</p>
            </div>
            <div className="single-card">
              <p>Road trip drive time and kid entertainment ideas</p>
            </div>
            <div className="single-card">
              <p>Road trip drive time and kid entertainment ideas</p>
            </div>
            <div className="single-card">
              <p>Road trip drive time and kid entertainment ideas</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
