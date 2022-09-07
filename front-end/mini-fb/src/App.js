import * as React from "react";
import './App.css';
import { Routes, Route, Navigate } from "react-router-dom";
import Home from './Components/Home/Home';
import Feed from "./Components/Feed/Feed";
import Users from "./Components/Users/Users";
import Thoughts from "./Components/Thoughts/Thoughts";
import Auth from "./Components/Login/Auth";
import {AuthContext} from "./Components/UIElements/Context/Auth-Context"

function App() {
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  const [userId, setUserId] = React.useState();
  const [username, setUsername] = React.useState(false);
  const [image, setImage] = React.useState();

  const login = React.useCallback((uid, username, image) => {
    setIsLoggedIn(true);
    setUserId(uid);
    setUsername(username);
    setImage(image);
  })

  const logout = React.useCallback(() => {
    setIsLoggedIn(false);
    setUserId(null);
    setUsername(null);
    setImage(null);
  })

  let routes;

  if(isLoggedIn) {
    routes = (
      <Routes>
        <Route path="/" element={<Feed />} />
        <Route path="/users" element={<Users />} />
        <Route path="/:userId/thoughts" element={<Thoughts />} />
        <Route
          path="*"
          element={<Navigate to="/" replace />}
        />
      </Routes>
    )
  } else {
    routes = (
      <Routes>
        <Route path="/login" element={<Auth />} />
        <Route
          path="*"
          element={<Navigate to="/login" replace />}
        />
      </Routes>
  )}

  return (
    <div className="App">
      <AuthContext.Provider value={{ isLoggedIn: isLoggedIn, userId: userId, login: login, username: username, image: image, logout: logout }}>
        <Home />
        {routes}
      </AuthContext.Provider>
    </div>
  );
}

export default App;
