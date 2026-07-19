import {Button, Stack, Typography} from "@mui/material";
import {Link} from "react-router-dom";
import {useEffect} from "react";
import {useAppDispatch, useAppSelector} from "../../app/hooks.ts";
import {getMessages} from "./messagesThunks.ts";
import {messages} from "./messageSlice.ts";
import MessageItem from "./MessageItem.tsx";

const Messages = () => {

    const dispatch = useAppDispatch();
    const items = useAppSelector(messages);

    useEffect(() => {
      dispatch(getMessages());
    },[dispatch])


    return (
        <Stack spacing={2}>
          <Stack direction={"row"} sx={{justifyContent: "space-between", alignItems: "center"}}>
              <Typography variant="h4" component="div">Messages</Typography>
              <Button variant="contained" color="primary" component={Link} to={'/messages/new'}>New messages</Button>
          </Stack>
            <Stack spacing={2}>
                {items.map((item) => (
                <MessageItem
                    key={item.id}
                    author={item.author}
                    message={item.message}
                    datetime={item.datetime}
                    id={item.id}
                />
                ))}
            </Stack>
        </Stack>
    );
};

export default Messages;