import axios from "axios";
import {
  getStory,
  getStoryIds,
  storyUrl,
  newStoriesUrl,
  topStoriesUrl,
  getTopStoryIds,
} from "../../services/hacker-news-service";
import { validStory, invalidStory, storyIds } from "../mocks";

jest.mock("axios");

describe("Service tests", () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  describe("Test getStory API", () => {
    it("Gets story details for supplied storyId", async () => {
      axios.get.mockImplementation(() => Promise.resolve({ data: validStory }));
      const data = await getStory(71);
      expect(axios.get).toHaveBeenCalledTimes(1);
      expect(axios.get).toHaveBeenCalledWith(`${storyUrl + 71}.json`);
      expect(data).toEqual(validStory);
    });

    it("Fails to get story details for supplied storyId", async () => {
      axios.get.mockImplementation(() =>
        Promise.resolve({ data: invalidStory })
      );
      const data = await getStory(71);
      expect(axios.get).toHaveBeenCalledTimes(1);
      expect(axios.get).toHaveBeenCalledWith(`${storyUrl + 71}.json`);
      expect(data).toEqual(invalidStory);
    });
  });

  describe("Test getStoryIds API", () => {
    it("Gets storyIds", async () => {
      axios.get.mockImplementation(() => Promise.resolve({ data: storyIds }));
      const data = await getStoryIds();
      expect(axios.get).toHaveBeenCalledTimes(1);
      expect(axios.get).toHaveBeenCalledWith(newStoriesUrl);
      expect(data).toEqual(storyIds);
    });
  });

  describe("Test getTopStoryIds API", () => {
    it("Gets storyTopIds", async () => {
      axios.get.mockImplementation(() => Promise.resolve({ data: storyIds }));
      const data = await getTopStoryIds();
      expect(axios.get).toHaveBeenCalledTimes(1);
      expect(axios.get).toHaveBeenCalledWith(topStoriesUrl);
      expect(data).toEqual(storyIds);
    });
  });
});
