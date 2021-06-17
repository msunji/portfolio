import React from "react";
import { ImLinkedin, ImGithub } from "react-icons/im";
import styled from "styled-components";

const SiteFooter = styled.section`
  background: var(--main-text-color);
  color: var(--primary-pink);

  a,
  a:visited {
    color: var(--primary-yellow);
    font-size: 1.6em;
  }
`;

const SiteFooterMini = styled.div`
  padding-top: 2rem;
  padding-bottom: 1rem;
  background: var(--darker-blue);

  p {
    color: var(--main-bg-color);
    text-transform: uppercase;
    font-size: 0.9em;
  }

  .flex {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-content: center;
  }

  a:not(:last-of-type) {
    margin-right: 30px;
  }

  a,
  a:visited {
    text-decoration: none;
    border-bottom: 0;

    svg {
      font-size: 2em;
      fill: var(--main-bg-color);
      transition: fill 0.4s ease-in-out;
    }
  }

  a:hover,
  a:focus {
    svg {
      fill: var(--primary-red);
    }
  }
`;

function Footer() {
  return (
    <>
      <SiteFooter>
        <div className="container">
          <h3>
            Enquiries?
            <br />
            Good Dad jokes?
          </h3>
          <a href="mailto:hey@mconsunji.com">Let's talk! 👋</a>
        </div>
      </SiteFooter>
      <SiteFooterMini>
        <div className="container flex">
          <p>Find me elsewhere</p>
          <div>
            <a href="https://github.com/msunji">
              <ImGithub />
            </a>
            <a href="https://www.linkedin.com/in/mconsunji/">
              <ImLinkedin />
            </a>
          </div>
        </div>
      </SiteFooterMini>
    </>
  );
}

export default Footer;
