import {type ChangeEvent, useState, type SubmitEvent} from "react";
import type {InfoMutation} from "../../interfaces.ts";
import {Button, Stack, TextField} from "@mui/material";

interface Props {
    onSubmit: (info: InfoMutation) => void | Promise<void>;
}

const MessageForm = ({onSubmit}: Props) => {
    const [state, setState] = useState<InfoMutation>({
        author:"",
        message:"",
    });

    const changeHandler = (e : ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;

         setState(prev => ({...prev, [name]: value}));
    }

    const submitHandler = (e : SubmitEvent) => {
        e.preventDefault();

        onSubmit(state)

    }

    return (
        <form onSubmit={submitHandler}>
          <Stack spacing={2} sx={{maxWidth: 500}}>
              <TextField
                  id="author"
                  label="Author"
                  value={state.author}
                  name="author"
                  onChange={changeHandler}
              />
              <TextField
                  id="message"
                  label="Message"
                  value={state.message}
                  name="message"
                  onChange={changeHandler}
              />
              <Button type="submit" color="primary" variant="contained">Create</Button>
          </Stack>
        </form>
    );
};

export default MessageForm;