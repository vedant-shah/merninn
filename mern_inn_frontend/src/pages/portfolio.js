import React from "react";
import pfp from "../images/pfp.jpg";
import { Button } from "@mui/material";
import * as SiIcons from "react-icons/si";

function portfolio() {
  return (
    <>
      <div className="container-fluid d-flex justify-content-center" id="devcontainer">
        <div className="devcard mx-auto my-auto d-flex align-items-center flex-column p-3 col-md-5 col-sm-8 col-xs-12 text-center">
          <img src={pfp} className="rounded-circle" id="pfp" alt="pfp" />
          <h1 className="mt-4">
            Hi, I'm <span className="text-primary"> Vedant Shah! </span>
          </h1>
          <p>Student and Web Developer</p>
          <p className="mt-2">
            Founder of MERN Inn, aspiring full stack web developer, also a
            B-Tech Student based in Bangalore, India. You can contact me via my
            email below, or connect with me via any of my socials.
          </p>
          <Button variant="outlined" startIcon={<SiIcons.SiGmail />}>
            vedantshah2001@gmail.com
          </Button>
          <div className="socials d-flex mt-4 justify-content-around">
            <SiIcons.SiLinkedin style={{ cursor: "pointer" }} onClick={() => { window.open("https://in.linkedin.com/in/vedant-shah-2600731b9") }} size="25" />
            <SiIcons.SiInstagram size="25" />
            <SiIcons.SiGithub style={{ cursor: "pointer" }} onClick={() => { window.open("https://github.com/vedant-shah") }} size="25" />
            <SiIcons.SiYoutube size="25" />
            <SiIcons.SiSnapchat size="25" />
          </div>
        </div>
      </div>
    </>
  );
}

export default portfolio;
