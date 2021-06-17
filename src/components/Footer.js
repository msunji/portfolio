import React from "react";
import styled from "styled-components";

const SiteFooter = styled.section`
  background: var(--main-text-color);
  color: var(--main-bg-color);
`;

function Footer() {
  return (
    <SiteFooter>
      <div className="container">
        <h3>Let's work together!</h3>
        <div>
          <a href="mailto:hey@mconsunji.com">hey@mconsunji.com</a>
        </div>
      </div>
    </SiteFooter>
  );
}

export default Footer;
