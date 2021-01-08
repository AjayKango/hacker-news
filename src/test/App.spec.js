import React from "react";
import { act } from "react-dom/test-utils";
import { render, cleanup, waitFor } from "@testing-library/react";
import { App } from "../App";

beforeEach(cleanup);

test("Render the application", async () => {
  await act(async () => {
    const { getByText } = render(<App />);
    await waitFor(() => [
      expect(getByText("Hacker News")).toBeTruthy(),
      expect(getByText("New Stories")).toBeTruthy(),
      expect(getByText("Top Stories")).toBeTruthy(),
    ]);
  });
});
