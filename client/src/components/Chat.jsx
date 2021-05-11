/* eslint-disable */
import React, { useState, useContext } from "react";
import { makeStyles, Button, TextField } from "@material-ui/core";
import { SocketContext } from "../Context";

const Chat = () => {
  const { sendMessage, messages } = useContext(SocketContext);
  const [currentMessage, setCurrentMessage] = useState("");

  const handleSend = () => {
    if (!currentMessage) return;
    messages.push({ sender: "You", text: currentMessage });
    sendMessage(currentMessage);
    setCurrentMessage("");
  };

  return (
    <div className="chatContainer">
      <div className="messageContainer">
        {messages.map((message, i) => (
          <div key={i}>
            {message.sender}: {message.text}
          </div>
        ))}
      </div>
      <div className="textForm">
        <TextField
          placeholder="Text message"
          value={currentMessage}
          onChange={(e) => setCurrentMessage(e.target.value)}
          fullWidth
        />
        <Button
          variant="contained"
          color="secondary"
          fullWidth
          onClick={handleSend}
        >
          Send
        </Button>
      </div>
    </div>
  );
};

export default Chat;
/* eslint-enable */
