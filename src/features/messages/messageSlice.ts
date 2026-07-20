import type { Info } from "../../interfaces.ts";
import { createSlice } from "@reduxjs/toolkit";
import {createMessage, getMessages} from "./messagesThunks.ts";

interface State {
    items: Info[];
    fetchLoading: boolean;
    createLoading: boolean;
}

const initialState: State = {
    items: [],
    fetchLoading: false,
    createLoading: false,
};

const messageSlice = createSlice({
    name: "messages",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getMessages.pending, (state) => {
                state.fetchLoading = true;
            })
            .addCase(getMessages.fulfilled, (state, { payload }) => {
                state.fetchLoading = false;
                state.items = payload;
            })
            .addCase(getMessages.rejected, (state) => {
                state.fetchLoading = false;
            });

        builder
            .addCase(createMessage.pending, (state) => {
                state.createLoading = true;
            })
            .addCase(createMessage.fulfilled, (state, { payload }) => {
                state.createLoading = false;
            })
            .addCase(createMessage.rejected, (state) => {
                state.createLoading = false;
            });
    },
    selectors: {
        messages: (state) => state.items,
        fetchLoading: (state) => state.fetchLoading,
        createLoading: (state) => state.createLoading
    },
});

export const messageReducer = messageSlice.reducer;
export const { messages, fetchLoading, createLoading} = messageSlice.selectors;