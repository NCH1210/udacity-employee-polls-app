import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { answerPoll } from "../store/pollsSlice";

export default function PollDetail() {
    const { id } = useParams();
    const dispatch = useDispatch();
    const poll = useSelector((state) => state.polls.items[id]);

    return (
        <div>
            <h2>Would you rather...</h2>
            {poll && (
                <>
                    <button
                        onClick={() =>
                            dispatch(answerPoll({ id, choice: "optionOne" }))
                        }
                    >
                        {poll.optionOne.text}
                    </button>
                    <button
                        onClick={() =>
                            dispatch(answerPoll({ id, choice: "optionTwo" }))
                        }
                    >
                        {poll.optionTwo.text}
                    </button>
                </>
            )}
        </div>
    );
}
