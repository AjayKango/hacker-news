import React from "react";
import { act } from "react-dom/test-utils";
import { render, cleanup, waitFor } from "@testing-library/react";
import { TopStories } from "../../components/top-stories";
import { storyIds, validStory } from "../mocks";
import { getStory, getTopStoryIds } from "../../services/hacker-news-service";
import { useScroll } from "../../hooks/useScroll";
import { VISIBLE_STORIES } from "../../constants";

beforeEach(cleanup);

jest.mock("../../hooks/useScroll.js");

jest.mock("../../services/hacker-news-service.js", () => ({
  getStory: jest.fn(),
  getTopStoryIds: jest.fn(),
}));

test("Test New stories component", async () => {
  useScroll.mockImplementation(() => ({
    visibleStories: VISIBLE_STORIES,
  }));

  getStory.mockImplementation(() => Promise.resolve(validStory));

  getTopStoryIds.mockImplementation(() => Promise.resolve(storyIds));

  await act(async () => {
    const { getByText, getByTestId } = render(<TopStories />);
    await waitFor(() => [
      expect(getByTestId("author")).toBeTruthy(),
      expect(getByTestId("title")).toBeTruthy(),
      expect(
        getByText("My YC app: Dropbox - Throw away your USB drive")
      ).toBeTruthy(),
    ]);
  });
});
