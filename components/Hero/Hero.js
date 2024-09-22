import { useState, useEffect, useRef, useLayoutEffect } from "react";
import Typed from "typed.js";
import gsap from "gsap";
import Button from "../Button/Button";
import Profiles from "../Profiles/Profiles";
import styles from "./Hero.module.scss";
import { TYPED_STRINGS } from "../../constants";

const options = {
 strings: TYPED_STRINGS,
  typeSpeed: 50,
  startDelay: 1500,
  backSpeed: 50,
  backDelay: 8000,
  loop: true,
};

const Hero = () => {
  const [lottie, setLottie] = useState(null);

  const sectionRef = useRef(null);
  const typedElementRef = useRef(null);
  const lottieRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap
        .timeline({ defaults: { ease: "none" } })
        .to(sectionRef.current, { opacity: 1, duration: 2 })
        // .from(
        //   sectionRef.current.querySelectorAll(".staggered-reveal"),
        //   { opacity: 0, duration: 0.5, stagger: 0.5 },
        //   "<"
        // );
    });

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    // const typed = new Typed(typedElementRef.current, options);

    // return () => typed.destroy();
  }, [typedElementRef]);

  
  // useEffect(() => {
  //   if (lottie && lottieRef.current) {
  //     const animation = lottie.loadAnimation({
  //       container: lottieRef.current,
  //       renderer: "svg",
  //       loop: true,
  //       autoplay: true,
  //       animationData: require("../../public/lottie/lottie.json"),
  //     });

  //     return () => animation.destroy();
  //   }
  // }, [lottie]);


};

export default Hero;
