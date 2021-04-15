import React, { useState } from "react";
import Video from "../assets/video7.mp4";
import styled from "styled-components";
import "../App.css";

// Social Media
import { FaBeer, FaFacebookF, FaTwitter, FaGithub } from "react-icons/fa";
import {
  AiOutlineMenu,
  AiOutlineClose,
  AiFillGithub,
  AiFillLinkedin,
} from "react-icons/ai";
import facebook from "../assets/facebook.png";

const Homepage = () => {
  const [active, setActive] = useState(false);

  return (
    <>
      <Hpg>
        <section className={active ? "showcase active" : "showcase"}>
          <header>
            <h2 className="logo">Travel</h2>
            <div className="toggle active" onClick={() => setActive(!active)}>
              {active ? <AiOutlineClose /> : <AiOutlineMenu />}
            </div>
          </header>
          <video autoPlay loop muted>
            <source src={Video} type="video/mp4" />
          </video>
          <div className="overlay"></div>
          <div className="text">
            <h2>Welcome to</h2>
            <h3>MY WEBSITE.</h3>
            <p>
              Dolor dolor excepteur nostrud aliquip eiusmod. Et ea aliquip nulla
              commodo. Lorem laborum ullamco nisi do excepteur consectetur.
            </p>
            <a href="#">Explore</a>
          </div>
          <ul className="social">
            <li>
              <a>
                {/* <img src={facebook} alt="#" /> */}
                <FaFacebookF />
              </a>
            </li>
            <li>
              <a>
                {/* <img src={facebook} alt="#" /> */}
                <FaTwitter />
              </a>
            </li>
            <li>
              <a>
                {/* <img src={facebook} alt="#" /> */}
                <AiFillLinkedin />
              </a>
            </li>
            <li>
              <a>
                {/* <img src={facebook} alt="#" /> */}
                <AiFillGithub />
              </a>
            </li>
          </ul>
        </section>
        <div className="menu">
          <ul>
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>News</a>
            </li>
            <li>
              <a>Contact</a>
            </li>
            <li>
              <a>About</a>
            </li>
          </ul>
        </div>
      </Hpg>
    </>
  );
};

const Hpg = styled.div``;

export default Homepage;
