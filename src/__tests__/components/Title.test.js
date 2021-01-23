import React from "react";
import { Title } from "../../components/Title";
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

it("Title component renders correctly", () => {
  act(() => {
    render(<Title text="Wizeline Company" />, container);
  });

  expect(container.innerHTML).toBe("<h1>Wizeline Company</h1>");
});
