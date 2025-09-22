import Configurations from "./Configurations";

function Header() {
  return (
    <header className="header">
      <div className="header__inner">
        <nav className="header__menu">
          <Configurations />
        </nav>
      </div>
    </header>
  );
}

export default Header;
