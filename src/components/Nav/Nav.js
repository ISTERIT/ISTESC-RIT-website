"use client";

import Link from "next/link";
import useNavAnimation from "./useNavAnimation";
import Socials from "./Socials";

const Nav = () => {
  const { toggle, container } = useNavAnimation();
  const links = [
    { href: "/", text: "Home" },
    { href: "/events", text: "Events" },
    { href: "/execom", text: "Execom 23-24" },
    { href: "/contact", text: "Contact" },
  ];
  return (
    <nav className="nav flex-between nav_bg" ref={container}>
      <Link href="/" className="logo cup" aria-label="ISTE SC RIT">
        ISTE SC RIT
      </Link>
      <div className="hamburger cup" onClick={toggle}>
        <svg
          width="49"
          height="21"
          viewBox="0 0 49 21"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect id="line1" width="49" height="3" fill="#282828" />
          <rect id="line2" y="9" width="49" height="3" fill="#282828" />
          <rect id="line3" y="18" width="49" height="3" fill="#282828" />
        </svg>
      </div>
      <div className="sidebar everything_center flex-col">
        {links.map((link) => (
          <Link
            key={link.href}
            onClick={toggle}
            href={link.href}
            aria-label={link.href}
            className="cup"
          >
            {link.text}
          </Link>
        ))}
        <Socials />
      </div>
    </nav>
  );
};

export default Nav;
