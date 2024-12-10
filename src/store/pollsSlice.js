import { createSlice } from "@reduxjs/toolkit";

const pollsSlice = createSlice({
    name: "polls",
    initialState: {
        items: {},
        loading: false,
        error: null,
    },
    reducers: {
        setPolls(state, action) {
            state.items = action.payload;
        },
        addPoll(state, action) {
            state.items[action.payload.id] = action.payload;
        },
        answerPoll(state, action) {
            const { qid, answer, authedUser } = action.payload;
            if (state.items[qid] && state.items[qid][answer]) {
                state.items[qid][answer].votes.push(authedUser);
            }
        },
    },
});

export const { setPolls, addPoll, answerPoll } = pollsSlice.actions;
export default pollsSlice.reducer;
