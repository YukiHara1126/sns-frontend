import React, { useState } from 'react';
import { createTweet } from '../../api/tweetApi';

const CreateTweet = ({ token }) => {
  const [tweetData, setTweetData] = useState('');

  const handleChange = (event) => {
    setTweetData(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await createTweet({ content: tweetData }, token);
      // ツイート投稿後の処理（例: ツイートリストの更新）
    } catch (error) {
      // エラー処理
    }
  };

  return (
    // ツイート投稿フォームのコンポーネント
    <></>
  );
};

export default CreateTweet;