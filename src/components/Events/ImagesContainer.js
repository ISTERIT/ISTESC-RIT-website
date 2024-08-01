"use client";

import ImageCard from "@/components/Events/ImageCard";
import Popup from "./Popup";
import usePopup from "./utils/usePopup";
import { eventData } from "@/data/Events";

const ImagesContainer = () => {
  const { state, change, closePopup, container } = usePopup();
  return (
    <div className="events_wrapper" ref={container}>
      <div className="events_column events_small">
        <ImageCard id={1} setSelected={change} fileName="zenithseniors" />
        <ImageCard id={2} setSelected={change} fileName="zenith" />
        <ImageCard id={3} setSelected={change} fileName="typing" />
        <ImageCard id={4} setSelected={change} fileName="farewell" />
      </div>
      <div className="events_column events_large">
        <ImageCard id={5} setSelected={change} fileName="connect" />
        <ImageCard id={6} setSelected={change} fileName="hackathon" />
        <ImageCard id={7} setSelected={change} fileName="ideathon" />
      </div>
      <div className="events_column events_small">
        <ImageCard id={8} setSelected={change} fileName="jeopardy" />
        <ImageCard id={9} setSelected={change} fileName="skygazing" />
        <ImageCard id={10} setSelected={change} fileName="orientation" />
      </div>
      <div className="events_popup nav_bg">
        <Popup
          id={state.selected}
          closePopup={closePopup}
          container={container}
          array={eventData}
        />
      </div>
    </div>
  );
};

export default ImagesContainer;
