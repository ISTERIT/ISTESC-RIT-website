"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import { useRef } from "react";
import { fadeEntry } from "../shared/gsapTweens";

const Images = () => {
  gsap.registerPlugin(useGSAP);
  const container = useRef();
  useGSAP(
    () => {
      gsap.fromTo(".contact_images img", ...fadeEntry);
    },
    { scope: container }
  );
  return (
    <div className="contact_images" ref={container}>
      <Image
        className="c2 b15"
        src="/c2.png"
        width={611}
        height={340}
        alt="ISTE SC RIT EXECOM"
      />
      <Image
        className="c1 b15"
        src="/c1.png"
        width={486}
        height={379}
        alt="ISTE SC RIT EXECOM"
      />
    </div>
  );
};

export default Images;
