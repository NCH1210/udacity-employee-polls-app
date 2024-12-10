import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../store/authSlice";

export default function Nav() {
    const { user } = useSelector((state) => state.auth);
    const dispatch = useDispatch();

    if (!user) return null;

    return (
        <nav className="border-b pb-4 mb-8">
            <div className="container mx-auto flex items-center justify-between">
                <div className="flex gap-8">
                    <Link to="/" className="text-gray-600 hover:text-gray-900">
                        Home
                    </Link>
                    <Link
                        to="/leaderboard"
                        className="text-gray-600 hover:text-gray-900"
                    >
                        Leaderboard
                    </Link>
                    <Link
                        to="/new"
                        className="text-gray-600 hover:text-gray-900"
                    >
                        New
                    </Link>
                </div>
                <div className="flex items-center gap-4">
                    <span>{user.id}</span>
                    <button
                        onClick={() => dispatch(logout())}
                        className="text-gray-600 hover:text-gray-900"
                    >
                        Logout
                    </button>
                </div>
            </div>
        </nav>
    );
}
