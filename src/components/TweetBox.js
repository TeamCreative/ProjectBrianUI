import React, { useState } from "react";
import "./central.css";
import { Avatar, Button } from "@material-ui/core";
import db from "../firebase";

function TweetBox() {
  const [tweet, setTweet] = useState("");

  const [tweetImage, setTweetImage] = useState("");

  const sendTweet = (e) => {
      e.preventDefault();
      db.collection('posts').add({
          displayName:"Gurpreet Singh",
          username:"gurpreet1161",
          verified:false,
          text:tweet,
          image:tweetImage,
          avatar:"data:image/png;base64,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"

      })
      setTweet("");
      setTweetImage("");
  }


  return (
    <div className="tweetbox">
      <form>
        <div className="tweetBox_input">
          <Avatar src="https://www.bemanistyle.com/wp-content/uploads/2018/01/Linux-Avatar-300px.png" />
          <input
            value={tweet}
            onChange={(e) => setTweet(e.target.value)}
            placeholder="what happening here?"
          />
        </div>
        <input
          placeholder="Enter the image url here"
          value={tweetImage}
          onChange={(e) => setTweetImage(e.target.value)}
          type="text"
          className="tweetboxImage"
        />
        <Button onClick={sendTweet} varient="outlined" className="twwetButton">
          
          Tweet
        </Button>
      </form>
    </div>
  );
}

export default TweetBox;
