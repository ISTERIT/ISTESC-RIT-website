import Link from "next/link";
import { instaLink, linkeLink } from "@/data/Links";

import React from "react";
import { ImportantLinksData } from "@/data/ImportantLinks";

const SocialLinksRow = () => {
  return (
    <div className="home_links_social cup everything_center flex-col gap-1">
      <Link target="_blank" href={instaLink} className="insta home_animate b15">
        Instagram
      </Link>
      <Link target="_blank" href={linkeLink} className="linkedin home_animate b15">
        LinkedIn
      </Link>
    </div>
  );
};
const LinkBox = (props) => {
  return (
    <div className={`home_links cup b15 everything_center home_animate ${props.className || ""}`}>
      <Link target="_blank" href={props.href}>
        {props.children}
      </Link>
    </div>
  );
};

const ImportantLinks = () => {
  return (
    <>
      <LinkBox href="register" className="blue">
        Join and Membership
      </LinkBox>
      <SocialLinksRow />
      {ImportantLinksData.map((linkData, i) => (
        <LinkBox className={linkData[2]} href={linkData[0]} key={i}>
          {linkData[1]}
        </LinkBox>
      ))}
    </>
  );
};

export default ImportantLinks;
