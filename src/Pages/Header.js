// import react from "react";
import "../Styling/main.css";

const Header = () => {
  return (
    <div>
      {/* // header start */}
      <div id="top" class="header-bg fullpage">
        <div class="header fullpage">
          <div class="container">
            <div class="absolute-center">
              <div class="row">
                <div class="col-sm-7">
                  <h1
                    class="info animated fadeInDown"
                    style={{ marginTop: "90px" }}
                  >
                    <a href="" class="logo">
                      Hi
                      <br />I am <u>Nikhil Kumar Singh</u>
                    </a>
                    <br />
                    <strong>
                      I <span>Design</span> Websites 
                      <br />
                      Frontend <span>Development</span>
                    </strong>
                  </h1>
                  <a href="#skills" class="btn scroll animated bounceInUp">
                    Skills
                  </a>
                  <a href="#contact" class="btn scroll animated bounceInDown">
                    Contact
                  </a>
                  <a href="#resume" class="btn scroll animated bounceInDown">
                    Resume
                  </a>
                </div>
                <div class="col-sm-4 col-sm-offset-1">
                  <div class="connect-icon">
                    <div class="prof-links clearfix animated bounceInUp">
                      {/* LinkedIn */}
                      <a
                        href="https://www.linkedin.com/in/nikhil-singh-704336346"
                        target="_blank"
                      >
                        <img
                          alt="linkedIn"
                          src="images/linked.png"
                          height="48"
                        />
                      </a>
                    </div>
                    {/* Facebook */}
                    <div class="social  clearfix  animated bounceInDown">
                      <a href="#">
                        <img
                          alt="facebook"
                          src="images/facebook.png"
                          width="48"
                        />
                      </a>
                      {/* Twitter */}
                      <a href="#">
                        <img alt="X" src="images/3.png" width="48" />
                      </a>
                      {/* Instagram */}
                      <a href="https://www.instagram.com/"
                      target="_blank">
                        <img
                          alt="instagram"
                          src="images/instagram.png"
                          width="48"
                          loading="lazy"
                        />
                      </a>
                      
                      {/* <a href="#">
                  <img alt="portfolio" src="images/pinterest.png" width="32" />
                </a> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* // header end */}
    </div>
  );
};

export default Header;
