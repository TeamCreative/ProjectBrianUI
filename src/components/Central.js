import React, { useState, useEffect } from "react";
import "./central.css";
import FlipMove from "react-flip-move";
//import Componest
import Header from "./Header";
import TweetBox from "./TweetBox";
import Post from "./Post";

//import data
import db from "../firebase";

export default function Central() {
  const [post, setPost] = useState([]);
  useEffect(() => {
    db.collection("posts").onSnapshot((snapshot) => {
      setPost(snapshot.docs.map((doc) => doc.data()));
    });
  }, []);

  return (
    <div className="central">
      <Header />

      <TweetBox />

      <FlipMove>
        {post.map((e) => (
          <Post
            key={e.text}
            displayName={e.displayName}
            username={e.username}
            verified={e.verified}
            text={e.text}
            image={e.image}
            avatar={e.avatar}
          />
        ))}
      </FlipMove>
    </div>
  );
}
