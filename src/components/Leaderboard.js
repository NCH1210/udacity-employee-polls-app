import { useSelector } from "react-redux";

export default function Leaderboard() {
    const users = useSelector((state) => state.users);

    return (
        <div>
            <h2>Leaderboard</h2>
            {Object.values(users).map((user) => (
                <div key={user.id}>
                    <h3>{user.name}</h3>
                    <p>Questions asked: {user.questions.length}</p>
                    <p>
                        Questions answered: {Object.keys(user.answers).length}
                    </p>
                </div>
            ))}
        </div>
    );
}
