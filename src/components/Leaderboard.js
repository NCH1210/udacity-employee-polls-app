import { useSelector } from "react-redux";
export default function Leaderboard() {
    const users = useSelector((state) => state.users);

    const sortedUsers = Object.values(users).sort((a, b) => {
        const aTotal = Object.keys(a.answers).length + a.questions.length;
        const bTotal = Object.keys(b.answers).length + b.questions.length;
        return bTotal - aTotal;
    });

    return (
        <div className="container mx-auto max-w-4xl">
            <table className="w-full">
                <thead>
                    <tr className="border-b">
                        <th className="text-left py-4">Users</th>
                        <th className="text-center py-4">Answered</th>
                        <th className="text-center py-4">Created</th>
                    </tr>
                </thead>
                <tbody>
                    {sortedUsers.map((user) => (
                        <tr key={user.id} className="border-b">
                            <td className="py-4">
                                <div className="flex items-center gap-4">
                                    <img
                                        src={
                                            user.avatarURL ||
                                            "/placeholder-avatar.png"
                                        }
                                        alt={user.name}
                                        className="w-10 h-10 rounded-full"
                                    />
                                    <div>
                                        <div className="font-medium">
                                            {user.name}
                                        </div>
                                        <div className="text-gray-500">
                                            {user.id}
                                        </div>
                                    </div>
                                </div>
                            </td>
                            <td className="text-center py-4">
                                {Object.keys(user.answers).length}
                            </td>
                            <td className="text-center py-4">
                                {user.questions.length}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
