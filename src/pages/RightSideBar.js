import React from "react";
import "./rightSideBar.css";
import MailOutlineOutlinedIcon from "@mui/icons-material/MailOutlineOutlined";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import InsertLinkIcon from "@mui/icons-material/InsertLink";

const RightSideBar = () => {
  return (
    <div className="right-side-bar">
      <div className="right-side-bar-user">
        <div className="logo">HB</div>
        <div className="email">
          <MailOutlineOutlinedIcon />
          <div>henryboyd@gmail.com</div>
        </div>
        <div className="name">
          <EmojiEmotionsIcon />
          <div>Henry Boyd</div>
        </div>
        <button className="archieve">Achieve</button>
      </div>
      <div className="right-side-bar-user">
        <div className="onboard">
          <div>OnBoard Clients</div>
        </div>
        <div className="client-text">
          <div>Share the link with prospects and discuss all stuffs</div>
        </div>
        <button className="link">
          <div>Copy Link</div>
          <InsertLinkIcon />
        </button>
      </div>
    </div>
  );
};

export default RightSideBar;
