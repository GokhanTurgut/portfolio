const Header = (props: { pageHeader: boolean }) => {
  return (
    <div className="header-container">
      <a href="./">GT</a>
      {props.pageHeader && <h2>Welcome</h2>}
      {!props.pageHeader && <h2>Projects</h2>}
    </div>
  );
};

export default Header;
