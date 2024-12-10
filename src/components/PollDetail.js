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
    const users = useSelector((state) => state.users);
    const handleVote = (answer) => {
        if (!hasVoted) {
            dispatch(handleAnswerPoll(id, answer));
        }
    };

    if (!poll) return <div>Poll not found</div>;

    return (
        <div className="container mx-auto max-w-2xl">
            <h2 className="text-2xl text-center mb-8">Poll by {poll.author}</h2>
            <div className="flex justify-center mb-6">
                <img
                    src={
                        users[poll.author]?.avatarURL ||
                        "/placeholder-avatar.png"
                    }
                    alt={poll.author}
                    className="w-32 h-32 rounded-full"
                />
            </div>
            <h3 className="text-xl text-center mb-6">Would You Rather</h3>
            <div className="grid grid-cols-2 gap-6">
                <button
                    onClick={() => handleVote("optionOne")}
                    className="p-4 border rounded text-center hover:bg-green-50"
                >
                    {poll.optionOne.text}
                </button>
                <button
                    onClick={() => handleVote("optionTwo")}
                    className="p-4 border rounded text-center hover:bg-green-50"
                >
                    {poll.optionTwo.text}
                </button>
            </div>
        </div>
    );
}
