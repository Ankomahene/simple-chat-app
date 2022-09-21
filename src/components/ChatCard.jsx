import { useState } from "react";
import {
  Avatar,
  Button,
  TextField,
  CardActions,
  CardContent,
  CardHeader,
  Card,
} from "@mui/material";
import { blue, green, grey } from "@mui/material/colors";
import PersonIcon from "@mui/icons-material/Person";
import SendIcon from "@mui/icons-material/Send";
import { Messages } from "./Messages";
import { v4 as uid } from "uuid";
import { useAppDispatch } from "../store/hooks";
import { addMessage } from "../store/messagesSlice";

const bgGradient = {
  background: `linear-gradient(to right, ${green[400]}, ${blue[300]})`,
  color: grey[100],
};

export const ChatCard = ({ user }) => {
  const dispatch = useAppDispatch();
  const [message, setMessage] = useState("");

  const postMessage = () => {
    if (message.trim() !== "") {
      const date = new Date();
      const newMessage = {
        id: uid(),
        message: message.trim(),
        userId: user.id,
        userName: user.name,
        time: `${date.getHours()}:${date.getMinutes()}`,
      };
      dispatch(addMessage(newMessage));
    }
    setMessage("");
  };

  return (
    <Card sx={{ width: "25rem" }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: blue[500] }} aria-label="current-user">
            <PersonIcon />
          </Avatar>
        }
        title={user.name}
        style={bgGradient}
      />
      <CardContent
        style={{ background: blue[50], height: 400, overflowY: "auto" }}
      >
        <Messages userId={user.id} />
      </CardContent>
      <CardActions disableSpacing style={{ background: grey[50] }}>
        <TextField
          hiddenLabel
          id="filled-hidden-label-small"
          variant="filled"
          size="small"
          sx={{ width: "20rem" }}
          placeholder="Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <Button aria-label="send-message" onClick={postMessage}>
          <SendIcon />
        </Button>
      </CardActions>
    </Card>
  );
};
