import React from "react";
import './auth0.css'

export const PageLoader = () => {
  const loadingImg = "https://media.tenor.com/XasjKGMk_wAAAAAC/load-loading.gif";

  return (
    <div className="loader">
      <img src={loadingImg} alt="Loading..." />
      <h2>Loading...</h2>
    </div>
  );
};