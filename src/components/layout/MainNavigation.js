import { Link } from "react-router-dom";
import React, { useContext } from "react";
import "./MainNavigation.css";
import FavoritesContext from "../../store/favorites-context";

function MainNavigation() {
  const favoritesCtx = useContext(FavoritesContext);
  return (
    <header className="header">
      <div className="logo">
        <img
          className="header-logo"
          src="https://www.canr.msu.edu/contentAsset/image/6d081af8-8fa6-4927-bc64-c1ee0dca1b12/fileAsset/filter/Resize,Crop,Jpeg/resize_w/600/crop_w/600/crop_h/400/crop_x/0/crop_y/0/jpeg_q/70"
        />
        Parental Guidance
      </div>
      <nav>
        <ul>
          <li>
            <Link to="/">All Links</Link>
          </li>
          <li>
            <Link to="/new-link">Add New Link</Link>
          </li>
          <li className="favorites-nav">
            <Link to="/favorites">
              Favorites
              <span className="favorites-badge">{favoritesCtx.totalFavorites}</span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
export default MainNavigation;
