import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <Link to="/">
        <h1>MCONSUNJI</h1>
      </Link>

      <Link to="/about">
        <p>About</p>
      </Link>
    </div>
  );
}

export default Header;
