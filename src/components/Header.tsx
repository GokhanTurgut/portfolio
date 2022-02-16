import { useLocation } from "react-router-dom";

const Header = () => {
  let location = useLocation();

  let pageHeader = "Welcome";
  if (location.pathname === "/") {
    pageHeader = "Welcome";
  } else if (location.pathname === "/projects") {
    pageHeader = "Projects";
  }

  return (
    <div className="header-container">
      <a href="./">GT</a>
      <h2>{pageHeader}</h2>
    </div>
  );
};

export default Header;
