// src/components/Login/index.js
import React, { useState } from 'react';
import { loginUser } from '../../api/userApi';

const Login = () => {
  const [formData, setFormData] = useState({});

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const data = await loginUser(formData);
      // ログイン後の処理（例: トークンの保存、ホームページにリダイレクト）
    } catch (error) {
      // エラー処理
    }
  };

  return (
    // ログインフォームのコンポーネント
    <><h1>きてる！</h1></>
  );
};

export default Login;