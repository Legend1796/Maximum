import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTop({ height }) {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: height,
      left: 0,
    });
  }, [pathname]);

  return null;
}

export default ScrollToTop;
