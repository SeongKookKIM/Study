import { render, screen } from "@testing-library/react";
import Home from "./page";

const user = {
  name: "Tom",
};

test("snapshot: name 있음", () => {
  const el = render(<Home user={user} />);
  expect(el).toMatchSnapshot();
});
test("snapshot: name 없음", () => {
  const el = render(<Home />);
  expect(el).toMatchSnapshot();
});

test("Hello 라는 글자가 포함되는가?", () => {
  render(<Home user={user} />);
  const helloEl = screen.getByText(/Hello/i);
  expect(helloEl).toBeInTheDocument();
});
