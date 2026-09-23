import { useLayoutEffect, useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
  }, []);

  useLayoutEffect(() => {
    const html = document.documentElement;
    const body = document.body;
    const original = html.style.scrollBehavior;
    html.style.scrollBehavior = "auto";
    window.scrollTo(0, 0);
    if (html) html.scrollTop = 0;
    if (body) body.scrollTop = 0;
    html.style.scrollBehavior = original;
  }, [pathname]);

  return null;
};

export default ScrollToTop;
