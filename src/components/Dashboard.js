import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function Dashboard() {
    const [showAnswered, setShowAnswered] = useState(false);
    const polls = useSelector((state) => state.polls.items);
    const { user } = useSelector((state) => state.auth);

    const getFilteredPolls = () => {
        if (!polls) return [];
        return Object.values(polls)
            .sort((a, b) => b.timestamp - a.timestamp)
            .filter((poll) => {
                const hasAnswered =
                    poll.optionOne.votes.includes(user.id) ||
                    poll.optionTwo.votes.includes(user.id);
                return showAnswered ? hasAnswered : !hasAnswered;
            });
    };

    return (
        <div className="container mx-auto">
            <h2 className="text-2xl font-bold mb-6">
                {showAnswered ? "Done" : "New Questions"}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {getFilteredPolls().map((poll) => (
                    <div key={poll.id} className="border rounded-lg p-4">
                        <h3 className="font-medium mb-2">{poll.author}</h3>
                        <p className="text-gray-500 text-sm mb-4">
                            {new Date(poll.timestamp).toLocaleString()}
                        </p>
                        <Link
                            to={`/questions/${poll.id}`}
                            className="block text-center py-2 px-4 bg-green-100 text-green-700 rounded hover:bg-green-200"
                        >
                            Show
                        </Link>
                    </div>
                ))}
            </div>
            <button
                onClick={() => setShowAnswered(!showAnswered)}
                className="mt-6 text-blue-600 hover:text-blue-800"
            >
                Show {showAnswered ? "unanswered" : "answered"} polls
            </button>
        </div>
    );
}
