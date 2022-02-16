import { useLocation, Link } from "react-router-dom";

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
      <Link to="/">GT</Link>
      <h2>{pageHeader}</h2>
    </div>
  );
};

export default Header;
