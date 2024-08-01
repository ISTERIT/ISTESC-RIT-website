"use client";

import gsap from "gsap";
import { Close } from "../Icons";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import { fadeEntryWithoutDelay } from "../shared/gsapTweens";

const Popup = ({ id, closePopup, container, array }) => {
  const currData = array[id];
  if (currData) {
    gsap.registerPlugin(useGSAP);
    useGSAP(() => gsap.fromTo(".animate", ...fadeEntryWithoutDelay), {
      scope: container,
    });
    return (
      <>
        {currData && (
          <>
            <h4 className="underline animate">{currData.name}</h4>
            <div className="popup_detail">
              <p className="barlow animate">
                {currData.description &&
                  currData.description.split("\n").map((text, index) => (
                    <>
                      <div key={index}>{text}</div>
                      <br />
                    </>
                  ))}
              </p>
              {currData.fileName && (
                <Image
                  className="popup_img animate b15"
                  src={currData.fileName}
                  height={280}
                  width={280}
                  alt={currData.name}
                />
              )}
            </div>
          </>
        )}
        <div className="close cup" onClick={closePopup}>
          <Close />
        </div>
      </>
    );
  } else
    return (
      <div className="close cup" onClick={closePopup}>
        <Close />
      </div>
    );
};

export default Popup;
