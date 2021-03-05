import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const FooterText = styled.div`
  text-align: center;
`;

function Footer() {
  return (
    <FooterText>
      Made with love and lots of tea by <Link to="/">Marge</Link>.
    </FooterText>
  );
}

export default Footer;
