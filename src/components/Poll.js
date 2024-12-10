import { Link } from "react-router-dom";

export default function Poll({ poll }) {
    if (!poll?.optionOne?.text || !poll?.optionTwo?.text) return null;

    return (
        <Link
            to={`/questions/${poll.id}`}
            className="block p-4 border rounded mb-4"
        >
            <h3>Would you rather...</h3>
            <p>
                {poll.optionOne.text} or {poll.optionTwo.text}
            </p>
        </Link>
    );
}
