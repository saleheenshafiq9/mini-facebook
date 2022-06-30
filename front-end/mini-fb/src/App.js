import * as React from "react";
import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import Home from './Components/Home';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
