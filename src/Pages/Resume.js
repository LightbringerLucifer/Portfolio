import React from "react";
import Resume_file from "../Styling/images/files/Resume_Updated.pdf";

const Resume = () => {
  const onButtonClick = () => {
    fetch(Resume_file).then((response) => {
      response.blob().then((blob) => {
        const fileURL = window.URL.createObjectURL(blob);
        let alink = document.createElement("a");
        alink.href = fileURL;
        alink.download = "Resume.pdf";
        alink.click();
      });
    });
  };
  return (
    <div id="resume">
        <div class="container center" style={{height:"200px",width:"700px", paddingLeft:"190px"}} >
          {/* <div class="center"> */}
            <div class="row">
              <div class="col-sm-7">
                    <h3>Check my Resume</h3>
                  <h3 class="btn animated bounceInUp download" onClick={onButtonClick}>View my Resume</h3>
              </div>
            </div>
          </div>
         </div>
  );
};

export default Resume;
