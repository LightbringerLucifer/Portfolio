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
    <div id="skills" class="testimonials-bg" style={{ marginTop: "560px" }}>
      <div class="testimonials center spacer">
        <div class="container">
          <h2>Skills</h2>

          <div
            id="carousel-testimonials"
            class="carousel slide"
            data-ride="carousel"
          >
            <div class="carousel-inner">
              {/*React  */}
              <div class="item active animated bounceInRight">
                <span class="animated slideInLeft">
                  <img
                    alt="react"
                    src={react_logo}
                    width="100"
                    class="img-circle"
                  />
                </span>
                <p>React JS</p>
                <span>
                  A Javascript library developed and maintained by
                  META(Facebook)
                </span>
              </div>

              {/* HTML */}
              <div class="item  animated bounceInRight">
                <span class="animated slideInLeft">
                  <img
                    alt="hmtl"
                    src={html_logo}
                    width="100"
                    class="img-circle"
                  />
                </span>
                <p>HTML</p>
                <span>
                  Hyper Text Markup Language to let browser understand the basic
                  structure of your site
                </span>
              </div>

              {/* CSS */}
              <div class="item  animated bounceInRight">
                <span class="animated slideInLeft">
                  <img
                    alt="css"
                    src={css_logo}
                    width="100"
                    class="img-circle"
                  />
                </span>
                <p>CSS</p>
                <span>Cascading Style Sheet for the makeover of your site</span>
              </div>

              {/* Javascript */}
              <div class="item  animated bounceInRight">
                <span class="animated slideInLeft">
                  <img alt="JS" src={js_logo} width="100" class="img-circle" />
                </span>
                <p>Javascript</p>
                <span>Used to add Interactivity to your website</span>
              </div>

              {/* JQuery */}
              <div class="item  animated bounceInRight">
                <span class="animated slideInLeft">
                  <img
                    alt="jquery"
                    src={jquery_logo}
                    width="100"
                    class="img-circle"
                  />
                </span>
                <p>JQuery</p>
                <span>Used Short-hand javascript</span>
              </div>
              {/* Bootstrap */}
              <div class="item  animated bounceInRight">
                <span class="animated slideInLeft">
                  <img
                    alt="bootstrap"
                    src={boot_logo}
                    width="100"
                    class="img-circle"
                  />
                </span>
                <p>Bootstrap</p>
                <span>
                  Open-source framework for responsive and mobile-first websites
                </span>
              </div>

              {/* Redux */}
              <div class="item  animated bounceInRight">
                <span class="animated slideInLeft">
                  <img
                    alt="redux"
                    src={redux_logo}
                    width="100"
                    class="img-circle"
                  />
                </span>
                <p>Redux</p>
                <span>State-management library</span>
              </div>
              
              {/* react-bootstrap */}
              <div class="item  animated bounceInRight">
                <span class="animated slideInLeft">
                  <img
                    alt="react-bootstrap"
                    src={rb_logo}
                    width="100"
                    class="img-circle"
                  />
                </span>
                <p>React-Bootstrap</p>
                <span>Similar to Bootstrap but modified for React JS</span>
              </div>
            </div>

            {/* <!-- Controls --> */}
            <a
              class="left arrow"
              href="#carousel-testimonials"
              data-slide="prev"
            >
              <i class="fa fa-angle-left"></i>
            </a>
            <a
              class="right arrow"
              href="#carousel-testimonials"
              data-slide="next"
            >
              <i class="fa fa-angle-right"></i>
            </a>
            {/* <!-- Controls --> */}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Skills;
