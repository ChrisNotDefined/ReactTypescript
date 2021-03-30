import React, { ReactElement } from "react";
import { withTrackClick } from "../hoc/withTrackClick";

interface NewsFeedProps {
  click: number;
}

function NewsFeed({ click }: NewsFeedProps): ReactElement {
  return (
    <div>
      <h1>News feed component</h1>
      <h2>Clicks: {click}</h2>
    </div>
  );
}

// Using renderProps
// export default NewsFeed;

// Using High Order Component
export default withTrackClick(NewsFeed);
