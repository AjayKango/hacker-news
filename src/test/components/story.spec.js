import React from "react";
import { act } from "react-dom/test-utils";
import { render, cleanup, waitFor } from "@testing-library/react";
import { Story } from "../../components/story";
import { validStory } from "../mocks";
import { getStory } from "../../services/hacker-news-service";

beforeEach(cleanup);

jest.mock("../../services/hacker-news-service.js", () => ({
  getStory: jest.fn(),
}));

test("Render story component", async () => {
  getStory.mockImplementation(() => Promise.resolve(validStory));

  await act(async () => {
    const { getByText, getByTestId } = render(<Story storyId="71" />);
    await waitFor(() => [
      expect(getByTestId("author")).toBeTruthy(),
      expect(getByTestId("title")).toBeTruthy(),
      expect(
        getByText("My YC app: Dropbox - Throw away your USB drive")
      ).toBeTruthy(),
    ]);
  });
});
