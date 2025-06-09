import { render, screen, fireEvent } from "@testing-library/react";
import InputForm from "./InputForm";
import { Provider } from "react-redux";
import { vi } from "vitest";
import configureStore from "redux-mock-store"; 

const mockDispatch = vi.fn();

vi.mock("react-redux", async () => {
  const actual = await vi.importActual("react-redux");
  return {
    ...actual,
    useDispatch: () => mockDispatch,
  };
});

describe("InputForm", () => {
  const mockStore = configureStore([]);
  let store;

  beforeEach(() => {
    store = mockStore({});
    mockDispatch.mockClear();
  });

  function renderWithStore() {
    render(
      <Provider store={store}>
        <InputForm />
      </Provider>
    );
  }

  test("renders input fields", () => {
    renderWithStore();
    expect(screen.getByPlaceholderText("Title")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Author")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Subject")).toBeInTheDocument();
  });

  test("shows error when all inputs are empty", () => {
    renderWithStore();
    fireEvent.click(screen.getByRole("button", { name: /search/i }));
    expect(
      screen.getByText(/at least one search input is required/i)
    ).toBeInTheDocument();
  });

  test("dispatches fetchBookData with input", () => {
    renderWithStore();
    fireEvent.change(screen.getByPlaceholderText("Title"), {
      target: { value: "Harry Potter" },
    });
    fireEvent.click(screen.getByRole("button", { name: /search/i }));
    expect(mockDispatch).toHaveBeenCalledTimes(1);
  });
});
