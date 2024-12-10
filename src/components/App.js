import { Routes, Route } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import Login from "./Login";
import Dashboard from "./Dashboard";
import NewPoll from "./NewPoll";
import PollDetail from "./PollDetail";
import Leaderboard from "./Leaderboard";
import Nav from "./Nav";

function App() {
    return (
        <div>
            <Nav />
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route
                    path="/"
                    element={
                        <PrivateRoute>
                            <Dashboard />
                        </PrivateRoute>
                    }
                />
                <Route
                    path="/new"
                    element={
                        <PrivateRoute>
                            <NewPoll />
                        </PrivateRoute>
                    }
                />
                <Route
                    path="/questions/:id"
                    element={
                        <PrivateRoute>
                            <PollDetail />
                        </PrivateRoute>
                    }
                />
                <Route
                    path="/leaderboard"
                    element={
                        <PrivateRoute>
                            <Leaderboard />
                        </PrivateRoute>
                    }
                />
            </Routes>
            ;
        </div>
    );
}

export default App;
