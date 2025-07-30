import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App tests", () => {
  it("Should render component", () => {
    render(<App />);

    const heading = screen.getByRole("heading");
    expect(heading).toBeInTheDocument();
  });
});
