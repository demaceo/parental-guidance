import "./MeetupItem.css";
import React, { useContext, useState, useEffect } from "react";
import Card from "../ui/Card";
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
      // .to(
      //   `.title-artist-${props.id}`,
      //   { duration: "0.2 !important", color: "rgb(253,235,103)" },
      //   "-=.4"
      // )
      // .to(
      //   `.badge-${props.id}`,
      //   {
      //     borderColor: "rgb(253,235,103)",
      //     backgroundColor: "rgb(253,235,103)",
      //     color: "rgb(40,44,52)",
      //   },
      //   "<"
      // )
      .to(`.card -${props.id}`, { border: "solid 3px rgb(253,235,103)" }, "<")
      .to(`.${"--" + props.id}`, {
        ease: "none",
        duration: 8,
        repeat: -1,
        rotate: 360,
      });
    setInFavorites(true);
  };

  // const handleClick = () => {
  //   if (!inFavorites) {
  //     addFavorite(id);
  //     animateAddFavorite();
  //   }
  // };

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
    }
  };

  const handleDoubleClick = () => {
    window.open(props.link);
  };

  return (
    <div className={`item`} onDoubleClick={handleDoubleClick}>
      <Card>
        <div className="fav-actions">
          <button
            className={`fav-btn favoriteBtn --${props.id}`}
            onClick={toggleFavoriteStatusHandler}
          >
            ⭐{/* {itemIsFavorite ? "Unfavorite" : "⭐"} */}
          </button>
        </div>
        <div className={`image`}>
          <img src={props.image} alt={props.title} />
        </div>
        <div className="content">
          <h3>{props.title}</h3>
          <p className="link-description">{props.description}</p>
          <p> {props.date}</p>
          <address>Love, {props.from}</address>
        </div>
      </Card>
    </div>
  );
}

export default MeetupItem;
