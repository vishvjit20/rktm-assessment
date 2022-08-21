import React from "react";
import "./chatuser.css";

const ChatUser = ({ username, message, parity }) => {
  const prefixImgUrl = "https://avatars.dicebear.com/v2/avataaars/";
  const suffixImgUrl = ".svg?options[mood][]=happy";

  return (
    <div className={`chat-user`}>
      <div className={`${parity === 1 ? "chat-right" : "chat-left"}`}>
        <img src={`${prefixImgUrl}${username}${suffixImgUrl}`} alt="" />
        <div className={`chat-user-msg`}>{message}</div>
      </div>
    </div>
  );
};

export default ChatUser;
