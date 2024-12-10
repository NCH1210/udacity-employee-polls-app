import { Link } from "react-router-dom";

export default function Poll({ poll }) {
    return (
        <Link to={`/questions/${poll.id}`}>
            <div>
                <h3>Would you rather...</h3>
                <p>
                    {poll.optionOne.text} or {poll.optionTwo.text}
                </p>
            </div>
        </Link>
    );
}
