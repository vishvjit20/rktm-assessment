import React, { useState } from "react";
import "./sendMsg.css";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import SendIcon from "@mui/icons-material/Send";

const SendMsg = ({ chat, setChat }) => {
  const [msg, setMsg] = useState("");
  const handleClick = () => {
    setChat([...chat, msg]);
    setMsg("");
  };
  return (
    <div className="send-msg">
      <div>
        <label for="file-input">
          <AttachFileIcon />
        </label>
        <input id="file-input" type="file" />
      </div>
      <input
        type="text"
        className="text"
        value={msg}
        onChange={(e) => setMsg(e.target.value)}
      />
      <button className="send-btn" onClick={handleClick}>
        <div>Send</div>
        <SendIcon />
      </button>
    </div>
  );
};

export default SendMsg;
