import { useState } from "react";
import { useSelector } from "react-redux";
import Poll from "./Poll";

export default function Dashboard() {
    const [showAnswered, setShowAnswered] = useState(false);
    const { user } = useSelector((state) => state.auth);
    const polls = useSelector((state) => state.polls.items);

    const getFilteredPolls = () => {
        if (!polls || Object.keys(polls).length === 0) return [];

        return Object.values(polls).filter((poll) => {
            if (!poll?.optionOne?.votes || !poll?.optionTwo?.votes)
                return false;
            return showAnswered
                ? poll.optionOne.votes.includes(user.id) ||
                      poll.optionTwo.votes.includes(user.id)
                : !poll.optionOne.votes.includes(user.id) &&
                      !poll.optionTwo.votes.includes(user.id);
        });
    };

    return (
        <div>
            <button onClick={() => setShowAnswered(!showAnswered)}>
                Show {showAnswered ? "Unanswered" : "Answered"} Polls
            </button>
            {getFilteredPolls().map((poll) => (
                <Poll key={poll.id} poll={poll} />
            ))}
        </div>
    );
}
