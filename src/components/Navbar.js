import React from "react";
import styled from "styled-components";

const Navbar = () => {
  return (
    <Nbar>
      <div className="container container-nav">
        <header>
          <div className="site-title">
            <h1>Welcome to the Website.</h1>
            <p className="subtitle">Full Stack Developer.</p>
          </div>
          <nav>
            <ul>
              <li>
                <a className="current-page" href="/">
                  Home
                </a>
              </li>

              <li>
                <a href="/contact">Contact</a>
              </li>
              <li>
                <a href="/projects">Projects</a>
              </li>
            </ul>
          </nav>
        </header>
      </div>
    </Nbar>
  );
};

const Nbar = styled.div`
  /* ========
  Typography 
  ======== */

  h1 {
    font-weight: 400;
    color: #143774;
    margin: 0;
    font-size: 2rem;
  }
  .subtitle {
    font-weight: 1000;
    color: #1792d2;
    font-size: 0.99em;
    margin: 0;
  }
  /* ========
  Layout
  ======== */

  .container {
    width: 90%;
    max-width: 1200px;
    /* border: 1px solid magenta; */
    margin: 0 auto;
  }

  header {
    text-align: center;
    background: #f8f8f8;
    padding: 2em 0;
  }
  nav ul {
    /* border: 1px solid magenta; */
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    justify-content: center;
  }
  nav li {
    /* border: 2px dotted orange; */
    margin: 0 1em;
  }
  nav li a {
    /* border: 3px solid green; */
    text-decoration: none;
    color: #707070;
    font-weight: 700;
  }
  nav li a:hover,
  nav li a:focus {
    color: #1792d2;
    letter-spacing: 1px;
    transition: 0.1s;
  }
  @media only screen and (min-width: 600px) {
    .container-nav header {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
    }
    .container-nav header {
      transition: 0.5s ease-in-out;
      text-align: left;
    }
  }
`;

export default Navbar;
