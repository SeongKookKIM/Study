import { render, screen } from "@testing-library/react";
import Home from "./page";

// test("유저가 없으면 로그인 문구와 버튼을 보여준다.", () => {
//   render(<Home />);
//   const txtEl = screen.getByText(/로그인을 해주세요/);
//   const btnEl = screen.getByRole("button");
//   expect(txtEl).toBeInTheDocument();
//   expect(btnEl).toBeInTheDocument();
//   expect(btnEl).toHaveTextContent("로그인");
// });

// test("유저가 없으면 로그인 문구와 버튼을 보여준다.", () => {
//   render(<Home user={{ name: "kim" }} />);
//   const txtEl = screen.getByText(/kim님 환영합니다/);
//   expect(txtEl).toBeInTheDocument();
// });
