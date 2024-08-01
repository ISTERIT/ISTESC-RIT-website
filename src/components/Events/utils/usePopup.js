"use client";

import gsap from "gsap";
import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import { fadeEntry } from "@/components/shared/gsapTweens";

const usePopup = () => {
  const height = -600;
  gsap.registerPlugin(useGSAP);
  const container = useRef();
  useGSAP(
    () => {
      gsap.fromTo(".events_column > div", ...fadeEntry);
    },
    { scope: container }
  );

  const [state, setState] = useState({ selected: null, close: false });
  const change = (id) => {
    setState((prev) => ({ ...prev, selected: id }));
    if (!state.selected)
      gsap.fromTo(
        ".events_popup",
        {
          bottom: height,
        },
        {
          bottom: 0,
          duration: 1,
          ease: "expo.inOut",
        }
      );
  };

  const closePopup = () => setState((prev) => ({ ...prev, close: true }));
  useGSAP(() => {
    if (state.close) {
      gsap.fromTo(
        ".events_popup",
        {
          bottom: 0,
        },
        {
          bottom: height,
          duration: 0.5,
          ease: "expo.inOut",
        }
      );
      setState({ selected: null, close: false });
    }
  }, [state]);

  return { state, change, closePopup, container };
};

export default usePopup;
