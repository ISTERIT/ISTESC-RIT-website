"use client";

import Link from "next/link";
import { Mail, Pin, Share } from "../Icons";
import { instaLink, linkeLink } from "@/data/Links";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import { fadeEntry } from "../shared/gsapTweens";

const Details = () => {
  gsap.registerPlugin(useGSAP);
  const container = useRef();
  useGSAP(
    () => {
      gsap.fromTo(".contact_s_row, .fade", ...fadeEntry);
    },
    { scope: container }
  );
  return (
    <div className="contact_details flex-col" ref={container}>
      <div className="contact_address fade">
        <span>Hit us up using any of these</span>
        <span>channels!</span>
      </div>
      <div className="contact_socials barlow">
        <div className="contact_s_row">
          <Pin />
          <div className="contact_address">
            <span>ISTE SC RIT,</span>
            <span>Kottayam, Kerala</span>
          </div>
        </div>
        <div className="contact_s_row">
          <Mail />
          <div>istescrit@rit.ac.in</div>
        </div>
        <div className="contact_s_row">
          <Share />
          <div className="everything_center nav_socials underline">
            <Link
              href={instaLink}
              target="_blank"
              aria-label="ISTE SC RIT Instagram page"
            >
              Instagram
            </Link>
            <Link
              href={linkeLink}
              target="_blank"
              aria-label="ISTE SC RIT LinkedIn page"
            >
              LinkedIn
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
