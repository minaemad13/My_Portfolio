import React from "react";
import image1 from "./imges/index1-removebg-preview.png";
import video1 from "./imges/globe-900.h264.mp4";
import { Carousel } from "react-bootstrap";
import "./style.css";
import TypeWriterEffect from 'react-typewriter-effect';
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Home = () => {
  
      useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);
  return (
    <>
      <Carousel>
        <Carousel.Item>
          <section
            id="home"
            data-aos="fade-down"
            className="intro "
            style={{ backgroundColor: "#050D1F", height: "850px" }}
          >
            <video
              src={video1}
              autoPlay="true"
              loop="true"
              muted="true"
              playsInline="true"
              style={{
                position: "absolute",
                float: "right",
                height: "900px",
                "z-index": "0",
                width: "1200px",
                right: "10px",
                bottom: "0px",
              }}
            />

            <img
              src={image1}
              alt="Logo"
              style={{
                position: "absolute",
                float: "right",
                height: "500px",
                right: "0px",
                top: "310px",
                "z-index": "2",
                bottom: "0",
              }}
            />

            <div
              className="display-table"
              style={{ float: "left", position: "absolute" }}
            >
              <div className="table-cell">
                <div className="container">
                  <h1
                    className="intro-title"
                    style={{
                      fontStyle: "inherit",
                      fontFamily: "fantasy",
                      fontSize: "3.5rem",
                      fontStretch: "narrower",
                    }}
                  >
                    I am Mina Emad{" "}
                    <span role="img" aria-label="donut">
                      🤓️🤓️
                    </span>{" "}
                    ,
                  </h1>
                  <p
                    className="intro-subtitle"
                    style={{
                      "font-family": "sans-serif",
                      "left": "20px",
                      "fontSize": "2rem",
                      "fontStretch": "extra-expanded",
                    }}
                  >
                    <span
                      className="text-slider-items"

                    ></span>
                    <TypeWriterEffect
                      textStyle={{
                        fontFamily: "Red Hat Display",
                        color: "white",
                        fontWeight: "bolder",
                        fontSize: "1em",
                      }}
                      cursorColor="white"
                      multiText={[
                        "Full-Stack Web Developer",
                        "Web Designer",
                        "Frontend Developer",
                        "Python Developer",
                      ]}
                      nextTextDelay={500}
                      backDelay= {300}
                      backSpeed= {20}
                      loop= {true}
                    />
                  </p>
                </div>
              </div>
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 1680 40"
              className="position-absolute width-full z-1"
              style={{ bottom: "0px" }}
            >
              <path
                d="M0 40h1680V30S1340 0 840 0 0 30 0 30z"
                fill="#fff"
              ></path>
            </svg>
            <a
              href="#about"
              className="mouse smoothscroll"
              style={{ position: "absolute" }}
            >
              <span className="mouse-icon">
                <span className="mouse-wheel"></span>
              </span>
            </a>
          </section>
        </Carousel.Item>
        <Carousel.Item>
        <section id="home1" class="intro bg-image">
            <div class="overlay-itro"></div>
            <div class="display-table" style={{"float": "left", "position":" absolute"}}>
              <div class="table-cell">
                <div class="container" style={{"text-align": "center", "left": "18rem", "position":" absolute"}}>
                  <pre class="intro-title " style={{"fontFamily": "fantasy", "fontSize": "5rem"}}>M  I  N  A  E  M  A  D</pre>
                  <pre class="intro-title "
                    style={{"fontStyle": "inherit", "fontFamily": "fantasy","fontSize": "2.5rem", "fontStretch": "narrower"}}>THE ODYSSEY OF A FULL-STACK WEB DEVELOPER</pre>
                </div>
              </div>

            </div>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" preserveAspectRatio="none" viewBox="0 0 1680 40"
              class="position-absolute width-full z-1" style={{"bottom": "0px"}}>
              <path d="M0 40h1680V30S1340 0 840 0 0 30 0 30z" fill="#fff"></path>
            </svg>

            <a href="#about" class="mouse smoothscroll" style={{"position": "absolute"}}>
              <span class="mouse-icon">
                <span class="mouse-wheel"></span>
              </span>
            </a>
          </section>
        
        </Carousel.Item>
      </Carousel>
    </>
  );
};
export default Home;
