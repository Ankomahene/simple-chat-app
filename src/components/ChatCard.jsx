import * as React from "react";
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

const bgGradient = {
  background: `linear-gradient(to right, ${green[400]}, ${blue[300]})`,
  color: grey[100],
};

export const ChatCard = () => {
  return (
    <Card sx={{ width: "25rem" }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: blue[500] }} aria-label="current-user">
            <PersonIcon />
          </Avatar>
        }
        title="John Doe"
        style={bgGradient}
      />
      <CardContent
        style={{ background: blue[50], height: 400, overflowY: "auto" }}
      >
        <Messages />
      </CardContent>
      <CardActions disableSpacing style={{ background: grey[50] }}>
        <TextField
          hiddenLabel
          id="filled-hidden-label-small"
          variant="filled"
          size="small"
          sx={{ width: "20rem" }}
          placeholder="Message"
        />
        <Button aria-label="send-message">
          <SendIcon />
        </Button>
      </CardActions>
    </Card>
  );
};
