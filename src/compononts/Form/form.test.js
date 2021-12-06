import React from "react";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Form from "./index";

import App from "../../App";

test("If it takes the request url", async () => {
  render(<App />);

  const url = screen.getByTestId("url");

  expect(url).toHaveValue("https://pokeapi.co/api/v2/pokemon%22");
});
