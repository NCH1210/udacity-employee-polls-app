import { createSlice } from "@reduxjs/toolkit";

const usersSlice = createSlice({
    name: "users",
    initialState: {},
    reducers: {
        setUsers: (state, action) => {
            return action.payload;
        },
        updateUserAnswers: (state, action) => {
            const { authedUser, qid, answer } = action.payload;
            state[authedUser].answers[qid] = answer;
        },
        updateUserQuestions: (state, action) => {
            const { authedUser, qid } = action.payload;
            state[authedUser].questions.push(qid);
        },
    },
});

export const { setUsers, updateUserAnswers, updateUserQuestions } =
    usersSlice.actions;
export default usersSlice.reducer;
