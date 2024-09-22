/* eslint-disable @next/next/no-img-element */
import { useState } from "react";
import { Fade } from "react-reveal";
import { Howl } from "howler";
import Button from "../Button/Button";
import FooterBg from "./FooterBg/FooterBg";
import Profiles from "../Profiles/Profiles";
import { theme } from "tailwind.config";
//import { MENULINKS } from "../../constants";

const Footer = () => {
  const [playbackRate, setPlaybackRate] = useState(0.75);

  const heartClickSound = new Howl({
    src: ["/sounds/glug-a.mp3"],
    rate: playbackRate,
    volume: 0.5,
  });

  // const handleClick = () => {
  //   setPlaybackRate((rate) => rate + 0.1);
  //   heartClickSound.play();
  // };


};

export default Footer;
