import React, { useState } from "react";
import ChatUser from "../components/ChatUser";
import SendMsg from "../components/SendMsg";
import "./chat.css";
import { useSelector } from "react-redux";

const Chat = () => {
  const { users } = useSelector((state) => state.users);
  const [chat, setChat] = useState([]);
  return (
    <div className="chat-box">
      <ChatUser username={users[0]?.username} message="Hello" parity={0} />
      <ChatUser
        username={users[0]?.username}
        message="How are you"
        parity={0}
      />
      <ChatUser username={users[1]?.username} message="I am good" parity={1} />
      <ChatUser
        username={users[0]?.username}
        message="Good to see you back"
        parity={0}
      />
      <ChatUser
        username={users[1]?.username}
        message="Have a nice day"
        parity={1}
      />
      <ChatUser username={users[0]?.username} message="Bye" parity={0} />
      {chat?.map((msg) => (
        <ChatUser username={users[1]?.username} message={msg} parity={1} />
      ))}
      <div className="bottom-chats">
        <SendMsg chat={chat} setChat={setChat} />
      </div>
    </div>
  );
};

export default Chat;
