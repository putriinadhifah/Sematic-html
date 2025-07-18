// src/komponen/ScrollToTop.tsx
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
// mengembalikan tampilan halaman ke atas (paling atas) secara otomatis
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export default ScrollToTop;
