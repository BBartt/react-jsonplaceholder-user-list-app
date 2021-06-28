import React from "react";
import ReactDOM from "react-dom";

import { cleanup, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import Results from "../../components/Results";

afterEach(cleanup);

const users = [
  { id: 1, name: "Leanne Graham", username: "Bret" },
  { id: 2, name: "Ervin Howell", username: "Antonette" },
];

describe("Results component", () => {
  it("render without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Results users={users} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it("renders users props correcly", () => {
    const { container } = render(<Results users={users} />);

    const [user] = users;
    const { name } = user;

    expect(container).toHaveTextContent(name);
  });

  it("render 2 li tags", () => {
    const { container } = render(<Results users={users} />);

    const listItems = container.querySelector(".ol").childElementCount;

    expect(listItems).toBe(2);
  });

  it("display 'Loading...' text when isLoading porps is passed", () => {
    const { container } = render(<Results isLoading />);

    expect(container).toHaveTextContent("Loading...");
  });

  it("display provided error message passed with porps", () => {
    const errorMessage = "Error message lorem ipsum";

    const { container } = render(<Results error={errorMessage} />);

    expect(container).toHaveTextContent(errorMessage);
  });
});
