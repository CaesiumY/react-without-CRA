import React, { useEffect, useState } from "react";

const Router = ({ mapping }) => {
  const [hash, setHash] = useState(window.location.hash);

  const setCurrentHash = () => setHash(window.location.hash);

  useEffect(() => {
    window.addEventListener("hashchange", setCurrentHash);

    return () => {
      window.removeEventListener("hashchange", setCurrentHash);
    };
  }, []);

  if (mapping[hash]) return mapping[hash];
  else return mapping["*"];
};

export default Router;
