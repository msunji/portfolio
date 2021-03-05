import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer">
      Made with love and lots of tea by <Link to="/">Marge</Link>.
    </div>
  );
}

export default Footer;
