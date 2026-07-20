import {createAsyncThunk} from "@reduxjs/toolkit";
import type {Info, InfoMutation} from "../../interfaces";
import axiosApi from "../../axiosApi.ts";

export const getMessages = createAsyncThunk<Info[]>(
    "messages/getMessages",
    async () => {
        const { data: messages } = await axiosApi("/messages");
        return messages;
    }
)

export const createMessage = createAsyncThunk<void, InfoMutation>(
    "messages/createMessage",
    async (message) => {
        await axiosApi.post("/messages", message);
    }
)