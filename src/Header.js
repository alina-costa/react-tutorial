import React from "react";

function Header() {
  return (
    <div>
      <header>
        <nav className="nav">
          <img src="./cow.png" alt="" className="logo" />
          <ul className="nav-items">
            <li>Pricing</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default Header;
