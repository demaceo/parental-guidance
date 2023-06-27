// import logo from './logo.svg';
// import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import AllMeetupsPage from "./pages/AllMeetups.js";
import NewMeetupPage from "./pages/NewMeetup.js";
import FavoritesPage from "./pages/Favorites.js";
import MainNavigation from "./components/layout/MainNavigation.js";

function App() {
  return (
    <div>
      <MainNavigation />
      <Routes>
        <Route path="/" element={<AllMeetupsPage />} />
        <Route path="/new-meetup" element={<NewMeetupPage />} />
        <Route path="/favorites" element={<FavoritesPage />} />
      </Routes>
    </div>
  );
}

export default App;
