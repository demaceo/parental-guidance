import "./MeetupItem.css";
import React, { useContext, useState, useEffect } from "react";
import Card from "../ui/Card.js";
import FavoritesContext from "../../store/favorites-context";
import { gsap } from "gsap";

function MeetupItem(props) {
  const favoritesCtx = useContext(FavoritesContext);
  const itemIsFavorite = favoritesCtx.itemIsFavorite(props.id);
  const [inFavorites, setInFavorites] = useState(false);

  useEffect(() => {
    checkFavoriteStatus();
  }, []);

  const checkFavoriteStatus = () => {
    if (itemIsFavorite) {
      setInFavorites(true);
      animateAddFavorite();
    } else {
      setInFavorites(false);
    }
  };

  const animateAddFavorite = () => {
    let tl = gsap.timeline();
    gsap.set(`.${"--" + props.id}`, {
      //start animation state
      transition: "ease 0",
      transform: "rotate(0deg)",
    });

    tl.to(`.${"--" + props.id}`, { duration: 0.1, translateY: 3 })
      .to(`.${"--" + props.id}`, {
        duration: 0.3,
        rotateY: 360,
        translateY: -10,
      })
      .to(`.${"--" + props.id}`, { duration: 0.3, translateY: 0 })
      .to(
        `.${"--" + props.id}`,
        { duration: 0.2, filter: "grayscale(0%)", cursor: "default" },
        "-=.4"
      )
      .to(`.${"--" + props.id}`, {
        ease: "none",
        duration: 8,
        repeat: -1,
        rotate: 360,
      });

    setInFavorites(true);
  };

  const toggleFavoriteStatusHandler = () => {
    if (!inFavorites) {
      favoritesCtx.addFavorite({
        id: props.id,
        title: props.title,
        date: props.date,
        link: props.link,
        description: props.description,
        image: props.image,
        from: props.from,
      });
      // addFavorite(props.id);
      animateAddFavorite();
    } else {
      setInFavorites(false);
      favoritesCtx.removeFavorite(props.id);
      window.location.reload();
    }
  };

  const handleDoubleClick = () => {
    window.open(props.link);
  };

  return (
    <div className="item" onDoubleClick={handleDoubleClick}>
      <Card>
        <div className="card-header">
          <button
            className={`fav-btn favoriteBtn --${props.id}`}
            onClick={toggleFavoriteStatusHandler}
          >
            ⭐
          </button>
          <p className="date-shared">{props.date}</p>
        </div>
        <div className="content">
          <h3>{props.title.substring(0, 70)}</h3>
          <div className="card-image">
            <img src={props.image} alt={props.title} />
          </div>
          <p className="link-description">
            {props.description.substring(0, 200)}
          </p>
          <br></br>
          <address>Love, {props.from}</address>
        </div>
      </Card>
    </div>
  );
}

export default MeetupItem;
