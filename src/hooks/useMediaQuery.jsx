import { useState, useEffect } from "react";

/**
 * A custom hook that returns a boolean indicating whether the current viewport matches the given media query.
 * @param {string} query - The media query to match against.
 * @returns {boolean} - Whether the current viewport matches the given media query.
 */

const useMediaQuery = (query) => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }
    const listener = () => setMatches(media.matches);
    window.addEventListener("resize", listener);
    return () => window.removeListener("resize", listener);
  }, [matches, query]);

  return matches;
};

export default useMediaQuery;
