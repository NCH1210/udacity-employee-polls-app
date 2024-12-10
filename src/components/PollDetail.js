import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { handleAnswerPoll } from "../store/actions";

export default function PollDetail() {
    const { id } = useParams();
    const dispatch = useDispatch();
    const poll = useSelector((state) => state.polls.items[id]);
    const user = useSelector((state) => state.auth.user);

    const hasVoted =
        poll?.optionOne.votes.includes(user.id) ||
        poll?.optionTwo.votes.includes(user.id);

    const getVotePercentage = (option) => {
        const totalVotes =
            (poll?.optionOne.votes.length || 0) +
            (poll?.optionTwo.votes.length || 0);
        return totalVotes === 0
            ? 0
            : Math.round((poll[option].votes.length / totalVotes) * 100);
    };

    const answerPoll = (answer) => {
        if (!hasVoted) {
            dispatch(handleAnswerPoll(id, answer));
        }
    };

    if (!poll) return <div>Poll not found</div>;

    return (
        <div className="p-4">
            <h2>Would you rather...</h2>
            <div className="flex gap-4">
                <button
                    onClick={() => answerPoll("optionOne")}
                    className={`p-2 border ${
                        hasVoted ? "cursor-not-allowed" : ""
                    }`}
                    disabled={hasVoted}
                >
                    <p>{poll.optionOne.text}</p>
                    {hasVoted && (
                        <p>
                            Votes: {poll.optionOne.votes.length} (
                            {getVotePercentage("optionOne")}%)
                        </p>
                    )}
                </button>
                <button
                    onClick={() => answerPoll("optionTwo")}
                    className={`p-2 border ${
                        hasVoted ? "cursor-not-allowed" : ""
                    }`}
                    disabled={hasVoted}
                >
                    <p>{poll.optionTwo.text}</p>
                    {hasVoted && (
                        <p>
                            Votes: {poll.optionTwo.votes.length} (
                            {getVotePercentage("optionTwo")}%)
                        </p>
                    )}
                </button>
            </div>
        </div>
    );
}
