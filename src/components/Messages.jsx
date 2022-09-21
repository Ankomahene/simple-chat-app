import React from "react";
import "../styles/MessageCard.css";
import Avatar from "@mui/material/Avatar";
import PersonIcon from "@mui/icons-material/Person";

const mockMessages = [
  {
    id: "123",
    message: "Hello World",
    userName: "Cleo",
    userId: "cleo123",
  },
  {
    id: "456",
    message: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
    userName: "Edem",
    userId: "edem123",
  },
  {
    id: "789",
    message: "Hello World",
    userName: "John Doe",
    userId: "john123",
  },
  {
    id: "987",
    message: "Lorem ipsum dolor",
    userName: "Edem",
    userId: "edem123",
  },
];

export const Messages = () => {
  return (
    <div className="messages-card">
      {mockMessages.map((message) => (
        <Message key={message.id} messageItem={message} />
      ))}
    </div>
  );
};

const Message = ({ messageItem }) => {
  const currentUserId = "edem123";
  const date = new Date();

  return (
    <>
      <div
        className={`message-box ${
          messageItem.userId === currentUserId
            ? "message-box-right"
            : "message-box-left"
        }`}
      >
        <Avatar
          sx={{ width: 24, height: 24, margin: "10px 3px" }}
          aria-label="current-user"
        >
          <PersonIcon />
        </Avatar>
        <div>
          <div className="username">{messageItem.userName}</div>
          <div className="message">
            <div className="message-text">{messageItem.message}</div>
            <div className="message-time">
              {date.getHours()}:{date.getMinutes()}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
