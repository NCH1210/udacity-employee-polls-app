import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Nav() {
    const { isAuthenticated } = useSelector((state) => state.auth);

    return isAuthenticated ? (
        <nav>
            <Link to="/">Home</Link>
            <Link to="/add">New Poll</Link>
            <Link to="/leaderboard">Leaderboard</Link>
        </nav>
    ) : null;
}
