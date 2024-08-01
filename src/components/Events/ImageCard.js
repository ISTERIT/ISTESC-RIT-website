"use client";

import Image from "next/image";
import { useRef } from "react";
import RotatingArrow from "./RotatingArrow";

const ImageCard = ({ fileName, id, setSelected }) => {
  const src = `/events/${fileName}.jpeg`;
  const height = 568;
  const width = 568;
  const alt = fileName;

  const container = useRef();

  return (
    <div ref={container}>
      <div
        className="events_image_card cup"
        onClick={() => {
          setSelected(id);
        }}
      >
        <RotatingArrow container={container} />
        <Image
          src={src}
          height={height}
          width={width}
          alt={alt}
          draggable={false}
          priority={true}
          className="b15"
        />
      </div>
    </div>
  );
};

export default ImageCard;
