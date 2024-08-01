"use client";

import { useRef } from "react";
import ExecomCard from "./ExecomCard";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { fadeEntry } from "../shared/gsapTweens";
import execomMembers from "@/data/Members";

const ExecomMembers = () => {
  gsap.registerPlugin(useGSAP);
  const container = useRef();
  useGSAP(
    () => {
      gsap.fromTo(".execom_card", ...fadeEntry);
    },
    { scope: container }
  );

  return (
    <div className="execom_container" ref={container}>
      {execomMembers.map((member) => (
        <ExecomCard
          key={member.fileName}
          name={member.name}
          fileName={member.fileName}
          position={member.position}
        />
      ))}
    </div>
  );
};

export default ExecomMembers;
