import React from "react";
import Header from "../layout/Header";
import Footer from "../layout/Footer";

export const CallbackPage = () => {
  return (
    <div className="page-layout">
      <Header />
      <Footer />
      <div className="page-layout__content" />
    </div>
  );
};