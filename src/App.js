import React from "react";
import { Routes, Route } from "react-router-dom";
import AllMeetupsPage from "./pages/AllMeetups.js";
import NewMeetupPage from "./pages/NewMeetup.js";
import FavoritesPage from "./pages/Favorites.js";
import Layout from "./components/layout/Layout.js";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<AllMeetupsPage />} />
        <Route path="/new-meetup" element={<NewMeetupPage />} />
        <Route path="/favorites" element={<FavoritesPage />} />
      </Routes>
    </Layout>
  );
}

export default App;
