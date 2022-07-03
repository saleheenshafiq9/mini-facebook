import * as React from "react";
import './App.css';
import { Routes, Route, Navigate } from "react-router-dom";
import Home from './Components/Home/Home';
import Feed from "./Components/Feed/Feed";
import Users from "./Components/Users/Users";
import Thoughts from "./Components/Thoughts/Thoughts";
import Auth from "./Components/Login/Auth";

function App() {
  return (
    <div className="App">
      <Home />
      <Routes>
        <Route path="/" element={<Feed />} />
        <Route path="/login" element={<Auth />} />
        <Route path="/users" element={<Users />} />
        <Route path="/:userId/thoughts" element={<Thoughts />} />
        <Route
          path="*"
          element={<Navigate to="/" replace />}
        />
      </Routes>
    </div>
  );
}

export default App;
