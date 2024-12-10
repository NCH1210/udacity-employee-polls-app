import { useState } from "react";
import { useDispatch } from "react-redux";
import { addPoll } from "../store/pollsSlice";

export default function NewPoll() {
    const [optionOne, setOptionOne] = useState("");
    const [optionTwo, setOptionTwo] = useState("");
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(
            addPoll({
                optionOneText: optionOne,
                optionTwoText: optionTwo,
            })
        );
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Would You Rather</h2>
            <input
                value={optionOne}
                onChange={(e) => setOptionOne(e.target.value)}
                placeholder="Option One"
            />
            <input
                value={optionTwo}
                onChange={(e) => setOptionTwo(e.target.value)}
                placeholder="Option Two"
            />
            <button type="submit">Submit</button>
        </form>
    );
}
