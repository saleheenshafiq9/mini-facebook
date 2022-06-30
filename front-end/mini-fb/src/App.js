import * as React from "react";
import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import Home from './Components/Home/Home';
import Login from "./Components/Login/Login";
import Feed from "./Components/Feed/Feed";

function App() {
  return (
    <div className="App">
      <Home />
      <Routes>
        <Route path="/" element={<Feed />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
