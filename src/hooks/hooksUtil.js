import React from "react";

export const useKeyDown = (key, callback) => {
  React.useEffect(() => {
    function handleKeyDown(event) {
      if (event.code !== key) return;
      callback(event);
    }

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [key, callback]);
}