import React, { useEffect, useState } from "react";
import { getTopStoryIds } from "../services/hacker-news-service";
import { Story } from "./story";
import { useScroll } from "../hooks/useScroll";

export const TopStories = () => {
  const { visibleStories } = useScroll();

  const [topStoryIds, setTopStoryIds] = useState([]);

  useEffect(() => {
    getTopStoryIds().then((data) => data && setTopStoryIds(data));
  }, []);

  return (
    <>
      {topStoryIds.slice(0, visibleStories).map((storyId) => (
        <div className="list-group" key={storyId}>
          <Story key={storyId} storyId={storyId} />
        </div>
      ))}
    </>
  );
};
