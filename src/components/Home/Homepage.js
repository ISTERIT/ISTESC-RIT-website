"use client";

import { about } from "@/data/Content";
import Email from "./components/Email";
import Statements from "./components/Statements";
import ImportantLinks from "./components/ImportantLinks";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import { fadeEntry } from "../shared/gsapTweens";

const Homepage = () => {
  gsap.registerPlugin(useGSAP);
  const container = useRef();
  useGSAP(
    () => {
      gsap.fromTo(".home_animate", ...fadeEntry);
    },
    { scope: container }
  );
  return (
    <div className="home_layout flex-col gap-1 flex-row_desktop" ref={container}>
      <div className="home_column">
        <div className="home_logo b15 everything_center home_animate">
          <span>ISTE SC RIT</span>
        </div>
        <Statements />
      </div>
      <div className="home_column home_right flex-col gap-1">
        <div className="home_data_top flex-col gap-1 flex-row_desktop">
          <div className="home_about home_animate">
            <h2>About Us</h2>
            <p className="barlow">{about}</p>
          </div>
          <Email />
        </div>
        <div className="home_data_bottom b15 flex-col flex-row_desktop home_animate">
          <ImportantLinks />
        </div>
      </div>
    </div>
  );
};

export default Homepage;
