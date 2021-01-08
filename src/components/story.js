import React, { useState, useEffect, memo } from "react";
import { getStory } from "../services/hacker-news-service";

export const Story = memo(function Story({ storyId }) {
  const [story, setStory] = useState({});

  useEffect(() => {
    getStory(storyId).then((data) => data && data.url && setStory(data));
  }, [storyId]);

  return story && story.url ? (
    <React.Fragment>
      <div className="list-group-item list-group-item-action flex-column align-items-start">
        <div className="d-flex w-100 justify-content-between">
          <h5 className="mb-1" data-testid="title">
            {story.title}
          </h5>
          <small className="text-muted">
            Comments: {story.kids ? story.kids.length : 0}
          </small>
        </div>
        <p className="mb-1" data-testid="author">
          By: {story.by}
        </p>
        {story.url ? (
          <p className="mb-1">
            <a href={story.url} target="_blank" rel="noreferrer">
              Read more ..
            </a>
          </p>
        ) : null}
      </div>
    </React.Fragment>
  ) : null;
});
