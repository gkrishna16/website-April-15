import React, { useState } from "react";
import Video from "../assets/vid5.mp4";
import styled from "styled-components";
import "../App.css";
import "./Homepage.css";
// Animation
import { motion } from "framer-motion";
import { pageAnimation, homeAnimation } from "./animation";
// Social Media
import { FaBeer, FaFacebookF, FaTwitter, FaGithub } from "react-icons/fa";
import {
  AiOutlineMenu,
  AiOutlineClose,
  AiFillGithub,
  AiFillLinkedin,
} from "react-icons/ai";

const Homepage = () => {
  const [active, setActive] = useState(false);

  const titleAnim = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { duration: 1 } },
  };

  const container = {
    hidden: { x: 80 },
    show: {
      x: 0,
      transition: { duration: 1, ease: "easeOut", staggerChildren: 0.5 },
    },
  };

  return (
    <>
      <motion.div variants={homeAnimation} initial="hidden" animate="show">
        <motion.Hpg>
          <section className={active ? "showcase active" : "showcase"}>
            <header>
              <h2 className="logo">Gopal's Website</h2>
              <div
                style={{ transform: "scale(1.8)" }}
                className="toggle active"
                onClick={() => setActive(!active)}
              >
                {active ? <AiOutlineClose /> : <AiOutlineMenu />}
              </div>
            </header>
            <video autoPlay loop muted>
              <source src={Video} type="video/mp4" />
            </video>
            <div className="overlay"></div>

            <motion.div className="text">
              <motion.div
                variants={container}
                initial="hidden"
                animate="show"
                className="title-centre"
              >
                <motion.h2 variants={titleAnim}>Welcome to</motion.h2>
                <motion.h3 variants={titleAnim}>MY WEBSITE.</motion.h3>
              </motion.div>

              <p>
                Dolor dolor excepteur nostrud aliquip eiusmod. Et ea aliquip
                nulla commodo. Lorem laborum ullamco nisi do excepteur
                consectetur.
              </p>
              <a href="#">Explore</a>
            </motion.div>
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
                <a
                  href="https://www.linkedin.com/feed/?trk=homepage-basic_google-one-tap-submit"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <AiFillLinkedin /> {/* <img src={facebook} alt="#" /> */}
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/gkrishna16"
                  rel="noopener noreferrer"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {/* <img src={facebook} alt="#" /> */}
                  <AiFillGithub />
                </a>
              </li>
            </ul>
          </section>
          <div className="menu">
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              {/* <li>
              <a>News</a>
            </li> */}
              <li>
                <a href="/contact">Contact</a>
              </li>
              <li>
                <a href="/projects">Projects</a>
              </li>
            </ul>
          </div>
        </motion.Hpg>
      </motion.div>
    </>
  );
};

const Hpg = styled.div``;

export default Homepage;
