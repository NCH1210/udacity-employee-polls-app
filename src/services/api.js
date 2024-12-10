import {
    _getUsers,
    _getQuestions,
    _saveQuestion,
    _saveQuestionAnswer,
} from "../_DATA.js";

export const getInitialData = async () => {
    const [users, questions] = await Promise.all([
        _getUsers(),
        _getQuestions(),
    ]);
    return { users, questions };
};

export const saveQuestion = async (question) => {
    return _saveQuestion(question);
};

export const saveQuestionAnswer = async (data) => {
    return _saveQuestionAnswer(data);
};
