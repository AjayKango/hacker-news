import React, { useEffect, useState } from "react";
import { getStoryIds } from "../services/hacker-news-service";
import { Story } from "../components/story";
import { useScroll } from "../hooks/useScroll";

export const NewStories = () => {
  const { visibleStories } = useScroll();

  const [storyIds, setStoryIds] = useState([]);

  useEffect(() => {
    getStoryIds().then((data) => data && setStoryIds(data));
  }, []);

  return (
    <>
      {storyIds.slice(0, visibleStories).map((storyId) => (
        <div className="list-group" key={storyId}>
          <Story key={storyId} storyId={storyId} />
        </div>
      ))}
    </>
  );
};
