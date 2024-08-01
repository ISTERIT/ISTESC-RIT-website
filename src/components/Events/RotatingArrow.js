import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const RotatingArrow = (props) => {
  gsap.registerPlugin(useGSAP);
  useGSAP(
    () => {
      gsap.to("#arrow", {
        rotate: 35,
        ease: "back.inOut",
        repeat: -1,
        duration: 1,
        yoyo: true,
      });
    },
    { scope: props.container }
  );

  return (
    <div className={`events_arrow everything_center flex-col ${props.small && "small"}`}>
      <svg
        id="arrow"
        width={props.small ? "25" : "31"}
        height={props.small ? "19" : "24"}
        viewBox="0 0 31 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1.20078 20.7307C0.499738 21.172 0.289254 22.0982 0.730651 22.7992C1.17205 23.5003 2.09818 23.7107 2.79922 23.2693L1.20078 20.7307ZM30.4627 5.33243C30.6463 4.52461 30.1403 3.7209 29.3324 3.5373L16.1681 0.545416C15.3603 0.361819 14.5566 0.867857 14.373 1.67568C14.1894 2.48351 14.6954 3.28722 15.5033 3.47081L27.2049 6.13027L24.5454 17.8319C24.3618 18.6397 24.8679 19.4434 25.6757 19.627C26.4835 19.8106 27.2872 19.3046 27.4708 18.4967L30.4627 5.33243ZM2.79922 23.2693L29.7992 6.26935L28.2008 3.73065L1.20078 20.7307L2.79922 23.2693Z"
          fill="white"
        />
      </svg>
    </div>
  );
};

export default RotatingArrow;
