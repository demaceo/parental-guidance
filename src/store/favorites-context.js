import React, { createContext, useState, useEffect } from "react";
import { useLocalStorage } from "./useLocalStorage";

const FavoritesContext = createContext({
  favorites: [],
  totalFavorites: 0,
  addFavorite: (favoriteLink) => {},
  removeFavorite: (meetupId) => {},
  itemIsFavorite: (meetupId) => {},
});

export function FavoritesContextProvider(props) {
  const [localStorage, setLocalStorage] = useLocalStorage("favorites");
  const [userFavorites, setUserFavorites] = useState([]);

  useEffect(() => {
    let userFavorites = localStorage;
    userFavorites = userFavorites ? userFavorites : [];
    setUserFavorites(userFavorites);
  }, []);

  function addFavoriteHandler(favoriteLink) {
    if (!userFavorites) {
      setUserFavorites([favoriteLink]);
      setLocalStorage(userFavorites);
    } else {
      setUserFavorites([favoriteLink, ...userFavorites]);
      setLocalStorage([favoriteLink, ...userFavorites]);
    }
  }

  function removeFavoriteHandler(meetupId) {
    setLocalStorage((prevUserFavorites) => {
      return prevUserFavorites.filter((meetup) => meetup.id !== meetupId);
    });
    setUserFavorites((prevUserFavorites) => {
      return prevUserFavorites.filter((meetup) => meetup.id !== meetupId);
    });
  }

  function itemIsFavoriteHandler(meetupId) {
    return userFavorites.some((meetup) => meetup.id === meetupId);
  }

  const context = {
    favorites: userFavorites,
    totalFavorites: userFavorites.length,
    addFavorite: addFavoriteHandler,
    removeFavorite: removeFavoriteHandler,
    itemIsFavorite: itemIsFavoriteHandler,
  };

  return (
    <FavoritesContext.Provider value={context}>
      {props.children}
    </FavoritesContext.Provider>
  );
}

export default FavoritesContext;
