import { render, screen, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../store/store";
import { BrowserRouter } from "react-router-dom";
import Login from "../components/Login";
import NewPoll from "../components/NewPoll";

describe("Login Component", () => {
    test("renders login form with username and password fields", () => {
        render(
            <Provider store={store}>
                <BrowserRouter>
                    <Login />
                </BrowserRouter>
            </Provider>
        );

        expect(screen.getByPlaceholderText(/username/i)).toBeInTheDocument();
        expect(screen.getByPlaceholderText(/password/i)).toBeInTheDocument();
        expect(screen.getByRole("button")).toBeInTheDocument();
    });

    test("handles input changes", () => {
        render(
            <Provider store={store}>
                <BrowserRouter>
                    <Login />
                </BrowserRouter>
            </Provider>
        );

        const usernameInput = screen.getByPlaceholderText(/username/i);
        fireEvent.change(usernameInput, { target: { value: "testuser" } });
        expect(usernameInput.value).toBe("testuser");
    });
});

describe("NewPoll Component", () => {
    test("renders form with two options", () => {
        render(
            <Provider store={store}>
                <BrowserRouter>
                    <NewPoll />
                </BrowserRouter>
            </Provider>
        );

        expect(screen.getByText(/would you rather/i)).toBeInTheDocument();
        expect(screen.getByPlaceholderText(/option one/i)).toBeInTheDocument();
        expect(screen.getByPlaceholderText(/option two/i)).toBeInTheDocument();
    });
});
