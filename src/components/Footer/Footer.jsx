import React from "react";
import "./Footer.css";
import Wave from "../../img/wave.png";
import Insta from "@iconscout/react-unicons/icons/uil-instagram";
import Facebook from "@iconscout/react-unicons/icons/uil-facebook";
import Gitub from "@iconscout/react-unicons/icons/uil-github";

const Footer = () => {
  return (
    <div className="footer">
      <img src={Wave} alt="" style={{ width: "100%" }} />
      <div className="f-content">
        <span>ashwinth023@gmail.com</span>
        <div className="f-icons">
          <a href="https://instagram.com/s_e_l_v_a_307?igshid=MzNlNGNkZWQ4Mg==" target="_blank"><Insta color="white" size={"3rem"} /></a>
          <a href="" target="_blank"><Facebook color="white" size={"3rem"} /></a>
          <a href="https://github.com/Ashwinth07" target="_blank"><Gitub color="white" size={"3rem"} /></a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
