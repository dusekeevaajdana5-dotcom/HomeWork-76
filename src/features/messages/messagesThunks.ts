import {createAsyncThunk} from "@reduxjs/toolkit";
import type { Info } from "../../interfaces";
import axiosApi from "../../axiosApi.ts";

export const getMessages = createAsyncThunk<Info[]>(
    "messages/getMessages",
    async () => {
        const { data: messages } = await axiosApi("/messages");
        return messages;
    }
)