import { Link } from "react-router-dom";
import React, { useContext } from "react";
import "./MainNavigation.css";
import FavoritesContext from "../../store/favorites-context";

function MainNavigation() {
  const favoritesCtx = useContext(FavoritesContext);
  return (
    <header className="header">
      <div className="logo">Parental Guidance</div>
      <nav>
        <ul>
          <li>
            <Link to="/">All Links</Link>
          </li>
          <li>
            <Link to="/new-meetup">Add New Link</Link>
          </li>
          <li>
            <Link to="/favorites">
              Favorites
              <span className="badge">{favoritesCtx.totalFavorites}</span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
export default MainNavigation;
