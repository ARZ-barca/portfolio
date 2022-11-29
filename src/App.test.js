import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import userEvent from "@testing-library/user-event";

describe("it first renders", () => {
  test("renders header first", () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
    const headers = screen.getAllByRole("heading");
    expect(headers[0].textContent).toContain("Hello World");
  });
});

describe("nav tests", () => {
  test("page responds to nav clicks", () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );

    userEvent.click(screen.getByTestId("projects-link"));
    expect(screen.getAllByRole("heading")[1].textContent).toMatch(/projects/i);
    userEvent.click(screen.getByTestId("contact-link"));
    expect(screen.getAllByRole("heading")[1].textContent).toMatch(/contact/i);
    userEvent.click(screen.getByTestId("about-link"));
    expect(screen.getAllByRole("heading")[1].textContent).toMatch(/about me/i);
  });
});
