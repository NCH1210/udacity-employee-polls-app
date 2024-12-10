import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { handleAddPoll } from "../store/actions";
export default function NewPoll() {
    const [optionOne, setOptionOne] = useState("");
    const [optionTwo, setOptionTwo] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(handleAddPoll(optionOne, optionTwo));
        navigate("/");
    };

    return (
        <div className="container mx-auto max-w-2xl">
            <h2 className="text-2xl text-center mb-2">Would You Rather</h2>
            <p className="text-center text-gray-600 mb-8">
                Create Your Own Poll
            </p>
            <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                    <label className="block text-gray-700 mb-2">
                        First Option
                    </label>
                    <input
                        type="text"
                        value={optionOne}
                        onChange={(e) => setOptionOne(e.target.value)}
                        className="w-full p-2 border rounded"
                        required
                    />
                </div>
                <div>
                    <label className="block text-gray-700 mb-2">
                        Second Option
                    </label>
                    <input
                        type="text"
                        value={optionTwo}
                        onChange={(e) => setOptionTwo(e.target.value)}
                        className="w-full p-2 border rounded"
                        required
                    />
                </div>
                <button
                    type="submit"
                    className="w-full py-2 px-4 bg-gray-100 text-gray-700 rounded hover:bg-gray-200"
                >
                    Submit
                </button>
            </form>
        </div>
    );
}
