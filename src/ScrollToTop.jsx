import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { ActiveContext } from "./context/useActive";
import { useContext } from "react";
export default function ScrollToTop() {
  const { pathname } = useLocation();
  const {active} = useContext(ActiveContext)

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname, active]);
  return null;
}
