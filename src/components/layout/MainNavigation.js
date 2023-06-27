import { Link } from "react-router-dom";
import React from "react";
import "./MainNavigation.css";

function MainNavigation() {
  return (
    <header className="header">
      <div className="logo">React Meetups</div>
      <nav>
        <ul className="badge">
          <li>
            <Link to="/">Some Link</Link>
          </li>
          <li>
            <Link to="/new-meetup">Add New Meetup</Link>
          </li>
          <li>
            <Link to="/favorites">My Favorites</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
export default MainNavigation;
