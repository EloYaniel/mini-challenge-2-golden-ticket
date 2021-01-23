import React from "react";
import { Image } from "../../components/Image";
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

it("Image component renders correctly", () => {
  act(() => {
    render(
      <Image source="http://www.wizeline.png" title="Wizeline logo" />,
      container
    );
  });

  expect(container.innerHTML).toBe(
    '<img src="http://www.wizeline.png" title="Wizeline logo" alt="Wizeline logo">'
  );
});
