// src/components/EditProfile/index.js
import React, { useState } from 'react';
import { updateProfile } from '../../api/userApi';

const EditProfile = ({ user, onUpdate }) => {
  const [formData, setFormData] = useState({
    username: user.username,
    email: user.email,
  });

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await updateProfile(formData);
      onUpdate(); // 更新後の処理（例: プロフィールページを更新）
    } catch (error) {
      // エラー処理
    }
  };

  return (
    <div>
      <h1>Edit Profile</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username || ''}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email || ''}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Update</button>
      </form>
    </div>
  );
};

export default EditProfile;
