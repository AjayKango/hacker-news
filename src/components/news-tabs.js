import React, { useState } from "react";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import { TopStories } from "./top-stories";
import { NewStories } from "./new-stories";

export const NewsTabs = () => {
  const [key, setKey] = useState("newStories");

  return (
    <Tabs data-testid="news-tabs" activeKey={key} onSelect={(k) => setKey(k)}>
      <Tab
        eventKey="newStories"
        title="New Stories"
        data-testid="new-stories-tab"
      >
        <NewStories />
      </Tab>
      <Tab
        eventKey="topStories"
        title="Top Stories"
        data-testid="top-stories-tab"
      >
        <TopStories />
      </Tab>
    </Tabs>
  );
};
