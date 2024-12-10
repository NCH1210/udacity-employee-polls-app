import { setUsers } from "./usersSlice";
import { setPolls, addPoll, answerPoll } from "./pollsSlice";
import * as api from "../services/api";

export const handleInitialData = () => async (dispatch) => {
    const { users, questions } = await api.getInitialData();
    dispatch(setUsers(users));
    dispatch(setPolls(questions));
};

export const handleAddPoll =
    (optionOneText, optionTwoText) => async (dispatch, getState) => {
        const { auth } = getState();
        const poll = await api.saveQuestion({
            optionOneText,
            optionTwoText,
            author: auth.user.id,
        });
        dispatch(addPoll(poll));
    };

export const handleAnswerPoll = (qid, answer) => async (dispatch, getState) => {
    const { auth } = getState();
    await api.saveQuestionAnswer({
        authedUser: auth.user.id,
        qid,
        answer,
    });
    dispatch(answerPoll({ qid, answer, authedUser: auth.user.id }));
};
