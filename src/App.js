import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';
import TweetList from './components/TweetList';

function App() {
  return (
    <Router>
      <div>
        {/* 任意のナビゲーションコンポーネント */}
        <Routes>
          <Route path="/list" element={<TweetList />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
