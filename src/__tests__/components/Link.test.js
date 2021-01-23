import React from "react";
import { Link } from "../../components/Link";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it("Link component renders correctly", () => {
  act(() => {
    render(
      <Link source="http://www.wizeline.com" title="Go to wizeline" />,
      container
    );
  });

  expect(container.innerHTML).toBe(
    '<a href="http://www.wizeline.com" rel="noreferrer">Go to wizeline</a>'
  );
});
