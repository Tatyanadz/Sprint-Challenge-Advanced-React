import React from "react";
import * as rtl from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import App from "./App";
afterEach(rtl.cleanup);

it("renders dashboard component", () => {
  const wrapper = rtl.render(<App />);
  const dashBoard = wrapper.getByText(/New Player:/i);
  expect(dashBoard).toBeVisible();
});
it("renders playerslist component", () => {
  const wrapper = rtl.render(<App />);
  const playersList = wrapper.getByText(/Players:/i);
  expect(playersList).toBeVisible();
});