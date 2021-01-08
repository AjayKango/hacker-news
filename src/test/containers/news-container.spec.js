import React from "react";
import { act } from "react-dom/test-utils";
import { render, cleanup, waitFor } from "@testing-library/react";
import { NewsContainer } from "../../containers/news-container";

beforeEach(cleanup);

test("Render news container", async () => {
  await act(async () => {
    const { getByText } = render(<NewsContainer />);
    await waitFor(() => [
      expect(getByText("Hacker News")).toBeTruthy(),
      expect(getByText("New Stories")).toBeTruthy(),
      expect(getByText("Top Stories")).toBeTruthy(),
    ]);
  });
});
