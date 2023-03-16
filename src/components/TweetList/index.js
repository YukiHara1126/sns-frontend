// src/components/TweetList/index.js
import React, { useEffect, useState } from 'react';
import { deleteTweet, getTweets } from '../../api/tweetApi';
// import EditTweet from '../EditTweet';

const TweetList = () => {
  const [tweets, setTweets] = useState([]);
  console.log("きた")
  useEffect(() => {
    console.log("きた")
    loadTweets();
  }, []);

  const loadTweets = async () => {
    const fetchedTweets = await getTweets();
    setTweets(fetchedTweets);
  };

  const handleDelete = async (tweetId) => {
    await deleteTweet(tweetId);
    loadTweets(); // ツイートを削除した後、リストを更新
  };

  const handleUpdate = (updatedTweet) => {
    const updatedTweets = tweets.map((tweet) =>
      tweet.id === updatedTweet.id ? updatedTweet : tweet
    );
    setTweets(updatedTweets);
  };
  console.log(tweets)
  return (
    
    <div>
      Tweetlist
      {tweets.map((tweet) => (
        <div key={tweet.id}>

          <h3>{tweet.user.username}</h3>
          <p>{tweet.content}</p>
          <button onClick={() => handleDelete(tweet.id)}>Delete</button>
          {/* <EditTweet tweet={tweet} onUpdate={handleUpdate} /> */}
        </div>
      ))}
    </div>
  );
};

export default TweetList;
