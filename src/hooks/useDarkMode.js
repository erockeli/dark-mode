import { useLocalStorage } from "./useLocalStorage";
import { useEffect } from "react";

export const useDarkMode = (key, initVal) => {
    const [darkMode, setDarkMode] = useLocalStorage(key, initVal);
  
    useEffect(() => {
      if (darkMode === true) {
        return document.querySelector("body").classList.add("dark-mode");
      } else {
        return document.querySelector("body").classList.remove("dark-mode");
      }
    }, [darkMode]);
    return [darkMode, setDarkMode];
  };