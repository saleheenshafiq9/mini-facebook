import * as React from "react";
import './App.css';
import { Routes, Route, Navigate } from "react-router-dom";
import Home from './Components/Home/Home';
import Login from "./Components/Login/Login";
import Feed from "./Components/Feed/Feed";
import Users from "./Components/Users/Users";
import Thoughts from "./Components/Thoughts/Thoughts";
import Register from "./Components/Login/Register";

function App() {
  return (
    <div className="App">
      <Home />
      <Routes>
        <Route path="/" element={<Feed />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
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
