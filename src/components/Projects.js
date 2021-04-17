import React from "react";
import "../App.css";
import Navbar from "../components/Navbar";
import styled from "styled-components";
import image1 from "../assets/img2.jpg";

const Projects = () => {
  return (
    <div>
      <Navbar />
      <Projpage>
        <div className="container">
          <h2>PROJECTS</h2>

          <div className="projects-container">
            <div className="project-one">
              <img
                style={{ width: "inherit", height: "inherit" }}
                src={image1}
                alt="imone"
              />
              <div className="text-container">
                <h4>MUSIC APP!!</h4>
              </div>
            </div>
            <div className="project-two">
              <img
                style={{ width: "inherit", height: "inherit" }}
                src={image1}
                alt="imtwo"
              />
              <div className="text-container">
                <h4>WHACK THE MOLE !!</h4>
              </div>
            </div>
          </div>
        </div>
      </Projpage>
    </div>
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
  .project-one,
  .project-two {
    margin: 30px;
    height: 200px;
    width: 300px;
    background: skyblue;
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
export default Projects;
