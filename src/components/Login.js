import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../store/authSlice";
import { handleInitialData } from "../store/actions";

export default function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const users = useSelector((state) => state.users);

    useEffect(() => {
        dispatch(handleInitialData());
    }, [dispatch]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const user = users[username];

        if (!user) {
            setError("User not found");
            return;
        }

        if (user.password !== password) {
            setError("Invalid password");
            return;
        }

        dispatch(login(user));
        navigate("/");
    };

    return (
        <div className="flex min-h-screen items-center justify-center">
            <form
                onSubmit={handleSubmit}
                className="p-6 rounded shadow-lg max-w-sm w-full"
            >
                <h1 className="text-2xl mb-4">Employee Polls</h1>
                {error && <p className="text-red-500 mb-4">{error}</p>}
                <div className="mb-4">
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        placeholder="Username"
                        className="w-full p-2 border rounded"
                    />
                </div>
                <div className="mb-4">
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Password"
                        className="w-full p-2 border rounded"
                    />
                </div>
                <button
                    type="submit"
                    className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
                >
                    Login
                </button>
            </form>
        </div>
    );
}
