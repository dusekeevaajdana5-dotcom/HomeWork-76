import type { Info } from "../../interfaces.ts";
import { createSlice } from "@reduxjs/toolkit";
import { getMessages } from "./messagesThunks.ts";

interface State {
    items: Info[];
    fetchLoading: boolean;
}

const initialState: State = {
    items: [],
    fetchLoading: false,
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
    },
    selectors: {
        messages: (state) => state.items,
        fetchLoading: (state) => state.fetchLoading,
    },
});

export const messageReducer = messageSlice.reducer;
export const { messages, fetchLoading } = messageSlice.selectors;