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
    <div id="resume" style={{justifySelf:"center"}}>
      <button
        class="btn btn-primary animated bounceInUp download btn-lg"
        onClick={onButtonClick}
      >
        View my Resume
      </button>
    </div>
  );
};

export default Resume;
