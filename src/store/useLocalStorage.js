import { useState, useEffect } from "react";

export const useLocalStorage = (key, initialValue) => {
  const [state, setState] = useState(() => {
    if (!initialValue) {
      const value = localStorage.getItem(key);
      return value ? JSON.parse(value) : console.log("no items in storage");
    }
  });

  useEffect(() => {
    if (state) {
      try {
        localStorage.setItem(key, JSON.stringify(state));
      } catch (err) {
        console.log(err);
      }
    }
  }, [state, key]);
  return [state, setState];
};
