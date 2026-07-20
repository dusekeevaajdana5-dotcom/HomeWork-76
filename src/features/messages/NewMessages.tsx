import {Typography} from "@mui/material";
import MessageForm from "./MessageForm.tsx";
import {useDispatch} from "react-redux";
import type {InfoMutation} from "../../interfaces.ts";
import {createMessage} from "./messagesThunks.ts";
import {useNavigate} from "react-router-dom";

const NewMessages = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const onSubmit = async (message: InfoMutation)=> {
        await dispatch(createMessage(message))
        navigate("/")

    }

    return (
        <>
            <Typography variant="h4" color="textSecondary" gutterBottom>New messages</Typography>
            <MessageForm onSubmit={onSubmit}/>
        </>
    );
};

export default NewMessages;