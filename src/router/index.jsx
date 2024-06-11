import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import BlogHome from "../pages/Blog/Home";
import LifeEndedWhenIGradauted from "../pages/Blog/Random/life-ended-when-i-graduated";
import MessagesList from "../pages/Hidde";
import Home from "../pages/Home";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const Router = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<BlogHome />} />
        <Route
          path="/blog/life-ended-when-i-graduated"
          element={<LifeEndedWhenIGradauted />}
        />
        <Route path="/hidden/blog" element={<MessagesList />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
