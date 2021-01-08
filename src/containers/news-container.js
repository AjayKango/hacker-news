import React from "react";
import { NewsTabs } from "../components/news-tabs";

export const NewsContainer = () => {
  return (
    <>
      <div className="container">
        <div className="row justify-content-center">
          <h1>Hacker News</h1>
        </div>
        <NewsTabs />
      </div>
    </>
  );
};
