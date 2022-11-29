import { render, screen } from "@testing-library/react";
import Projects from "./Projects";

jest.mock("./ProjectCard", () => () => (
  <>
    <h1>project</h1>
  </>
));

test("Project component creates multiple project cards", () => {
  render(<Projects></Projects>);
  expect(screen.getAllByText("project").length).toBeGreaterThan(0);
});
