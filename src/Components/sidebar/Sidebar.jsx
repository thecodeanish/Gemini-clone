import React, { useState } from "react";
import "./Sidebar.css";
import { icons } from "../../assets/icons";

const Sidebar = () => {
  const [extended, setExtended] = useState(false);

  return (
    <div className="sidebar">
      {/* Top items of Side bar */}
      <div className="top">
        <img
          onClick={() => setExtended((previous) => !previous)}
          className="menu"
          src={icons.menu_icon}
        />
        <div className="new-chat">
          <img src={icons.plus_icon} />
          {extended ? <p> New Chat</p> : null}
        </div>

        {extended ? (
          <div className="recent">
            <p className="recent-title">Recent</p>
            <div className="recent-entry">
              <img src={icons.message_icon} />
              <p> What is React.....</p>
            </div>
          </div>
        ) : null}
      </div>

      {/* Bottom items of side bar */}
      <div className="bottom">
        <div className="bottom-item recent-entry">
          <img src={icons.question_icon} />
          {extended ? <p>Help</p> : null}
        </div>
        <div className="bottom-item recent-entry">
          <img src={icons.history_icon} />
          {extended ? <p>Activity</p> : null}
        </div>
        <div className="bottom-item recent-entry">
          <img src={icons.settings_icon} />
          {extended ? <p>Settings</p> : null}
        </div>
      </div>
    </div>
  );
};
export default Sidebar;
