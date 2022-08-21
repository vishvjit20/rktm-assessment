import React, { useState } from "react";
import "./leftSideBar.css";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ChatIcon from "@mui/icons-material/Chat";
import { useSelector } from "react-redux";

const LeftSideBar = () => {
  const [toggleState, setToggleState] = useState(false);
  const prefixImgUrl = "https://avatars.dicebear.com/v2/avataaars/";
  const suffixImgUrl = ".svg?options[mood][]=happy";
  const { users } = useSelector((state) => state.users);

  const handleToggle = () => {
    setToggleState(!toggleState);
  };

  return (
    <div className="left-side-bar">
      <div className="left-side-top-header">
        <ChatIcon />
        <h1>Quick Chat</h1>
      </div>
      <div className="left-side-bar-user">
        <img
          src={`${prefixImgUrl}${users[0]?.username}${suffixImgUrl}`}
          alt={users[0]?.username}
        />
        <div className="name">{users[0]?.name}</div>
        <div className="designation">{users[0]?.company?.catchPhrase}</div>
      </div>
      <div className="left-side-bar-active">
        <div className="left-active-header">
          <div>Active Conversations</div>
          <span>4</span>
          {toggleState ? (
            <ArrowDropUpIcon onClick={handleToggle} />
          ) : (
            <ArrowDropDownIcon onClick={handleToggle} />
          )}
        </div>
        <div className="left-active-user">
          {!toggleState &&
            users?.slice(1, 5)?.map((user, index) => (
              <div>
                <img
                  src={`${prefixImgUrl}${
                    users[index + 1]?.username
                  }${suffixImgUrl}`}
                  alt={users[0]?.username}
                />
                <div key={index}>{user?.name}</div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default LeftSideBar;
