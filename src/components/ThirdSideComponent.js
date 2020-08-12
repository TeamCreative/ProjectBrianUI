import React from "react";
import "./thirdside.css";

import SearchIcon from "@material-ui/icons/Search";

import { TwitterTweetEmbed } from "react-twitter-embed";

function ThirdSideComponent() {
  return (
    <div className="thirdside">
      <div className="widgets_input">
        <SearchIcon  className="serachIconn"/>
        <input placeholder="Search Tweet " type="text" />
      </div>
      <div className="widgets_widgetContainer">
        <h2>Whats Happening</h2>
        <TwitterTweetEmbed tweetId={"933354946111705097"} />
      </div>
    </div>
  );
}

export default ThirdSideComponent;
