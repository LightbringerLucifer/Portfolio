import React from "react";
import react_logo from "../Styling/images/testimonials/react.png";
import html_logo from "../Styling/images/testimonials/html.png";
import css_logo from "../Styling/images/testimonials/css.png";
import js_logo from "../Styling/images/testimonials/js.png";
import jquery_logo from "../Styling/images/testimonials/jquery.png";
import boot_logo from "../Styling/images/testimonials/bootstrap.png";
import redux_logo from "../Styling/images/testimonials/redux.png";
import rb_logo from "../Styling/images/testimonials/react_bootstrap.png";

const Skills = () => {
  return (
    <div id="skills" className="testimonials-bg" style={{ marginTop: "560px" }}>
      <div className="testimonials center spacer">
        <div className="container">
          <h2>Skills</h2>

          <div
            id="carousel-testimonials"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner">
              {/* React */}
              <div className="carousel-item active">
                <img
                  alt="react"
                  src={react_logo}
                  width="100"
                  className="rounded-circle"
                />
                <p>React JS</p>
                <span>A JavaScript library maintained by META (Facebook)</span>
              </div>

              {/* HTML */}
              <div className="carousel-item">
                <img
                  alt="html"
                  src={html_logo}
                  width="100"
                  className="rounded-circle"
                />
                <p>HTML</p>
                <span>Hyper Text Markup Language for structure</span>
              </div>

              {/* CSS */}
              <div className="carousel-item">
                <img
                  alt="css"
                  src={css_logo}
                  width="100"
                  className="rounded-circle"
                />
                <p>CSS</p>
                <span>Cascading Style Sheets for styling</span>
              </div>

              {/* Add other items similarly */}
            </div>

            {/* Controls */}
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carousel-testimonials"
              data-bs-slide="prev"
            >
              <span className="carousel-control-prev-icon"></span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carousel-testimonials"
              data-bs-slide="next"
            >
              <span className="carousel-control-next-icon"></span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
