import axios from "axios";

export const baseUrl = "https://hacker-news.firebaseio.com/v0/";
export const newStoriesUrl = `${baseUrl}newstories.json`;
export const topStoriesUrl = `${baseUrl}topstories.json`;
export const storyUrl = `${baseUrl}item/`;

export const getStory = async (storyId) => {
  return await axios.get(`${storyUrl + storyId}.json`).then(({ data }) => data);
};

export const getStoryIds = async () => {
  return await axios.get(newStoriesUrl).then(({ data }) => data);
};

export const getTopStoryIds = async () => {
  return await axios.get(topStoriesUrl).then(({ data }) => data);
};
