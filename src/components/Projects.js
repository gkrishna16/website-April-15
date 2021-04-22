import React from "react";
import "../App.css";
import Navbar from "../components/Navbar";
import styled from "styled-components";
import image1 from "../assets/img2.jpg";
import image2 from "../assets/image2.jpg";

import { pageAnimation, slider, sliderContainer } from "./animation";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <>
      <motion.div variants={pageAnimation} initial="hidden" animate="show">
        <motion.div variants={sliderContainer} initial="hidden" animate="show">
          <Frame1 variants={slider}></Frame1>
          <Frame2 variants={slider}></Frame2>
          <Frame3 variants={slider}></Frame3>
          <Frame4 variants={slider}></Frame4>
        </motion.div>{" "}
        <Navbar />
        <Projpage>
          <div className="container">
            <h2>PROJECTS</h2>

            <div className="projects-container">
              <a
                href="https://github.com/gkrishna16/portfolio-website"
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                <div className="project one">
                  <img
                    style={{ width: "inherit", height: "inherit" }}
                    src={image2}
                    alt="imone"
                  />
                  <div className="text-container">
                    <h4>PORTFOLIO WEBSITE!!</h4>
                  </div>
                </div>
              </a>

              <a
                href="https://607ddff371b00c1c92c28cfe--hardcore-fermi-a6505d.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="project two">
                  <img
                    style={{ width: "inherit", height: "inherit" }}
                    src={image1}
                    alt="imtwo"
                  />
                  <div className="text-container">
                    <h4>WHACK THE MOLE !!</h4>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </Projpage>
      </motion.div>
    </>
  );
};

const Projpage = styled.div`
  .container {
    width: 90%;
    max-width: 1200px;
    /* background: orange; */
    height: 70vh;
    margin: 0 auto;
    z-index: -1;
  }
  .container h2 {
    text-align: center;
    padding-top: 2em;
  }
  .projects-container {
    /* background: grey; */
    display: flex;
    height: 60vh;
    padding-top: 3em;
    /* align-items: center; */
    justify-content: center;
    flex-wrap: wrap;
    /* flex-direction: column; */
  }
  .project {
    margin: 30px;
    height: 200px;
    width: 300px;
    background: skyblue;
    border: 2px solid #1792d2;
  }
  .project:hover {
    transform: scale(1.1);
    opacity: 0.7;
  }

  .text-container {
    width: 300px;
    height: 50px;
    background: #f5f5f5;
    text-align: center;
    h4 {
      padding: 10px 0;
      margin: auto;
    }
  }
`;

// Framer Animation
const Frame1 = styled(motion.div)`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100vh;
  background: #fffebf;
`;

const Frame2 = styled(Frame1)`
  background: #ff8ebf;
`;
const Frame3 = styled(Frame1)`
  background: #8ed2ff;
`;
const Frame4 = styled(Frame1)`
  background: #8effa0;
`;

export default Projects;
