import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <Link to="/">
        <p>MCONSUNJI</p>
      </Link>

      <Link to="/about">
        <p>About</p>
      </Link>

      <Link to="/notes">
        <p>Notes</p>
      </Link>
    </div>
  );
}

export default Header;
