import { useState, useEffect } from "react";
import { MAXIMUM_STORIES, VISIBLE_STORIES } from "../constants";

export const useScroll = () => {
  const [loading, setLoading] = useState(false);
  const [visibleStories, setVisibleStories] = useState(VISIBLE_STORIES);

  const monitorScrollBar = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop !==
        document.documentElement.offsetHeight ||
      loading
    ) {
      return false;
    }
    setLoading(true);
  };

  useEffect(() => {
    if (!loading) return;

    if (visibleStories + VISIBLE_STORIES >= MAXIMUM_STORIES) {
      setVisibleStories(MAXIMUM_STORIES);
    } else {
      setVisibleStories(visibleStories + VISIBLE_STORIES);
    }
    setLoading(false);
  }, [visibleStories, loading]);

  useEffect(() => {
    window.addEventListener("scroll", monitorScrollBar);
    return () => window.removeEventListener("scroll", monitorScrollBar);
  });

  return { visibleStories };
};
