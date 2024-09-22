import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const Collaboration = ({ clientHeight }) => {
  const sectionRef = useRef(null);
  const quoteRef = useRef(null);

  useEffect(() => {
    const smallScreen = document.body.clientWidth < 767;

    const timeline = gsap.timeline({
      defaults: { ease: "none" },
    });

    timeline
      .from(quoteRef.current, { opacity: 0, duration: 2 })
      

    const slidingTl = gsap.timeline({ defaults: { ease: "none" } });


    ScrollTrigger.create({
      trigger: sectionRef.current,
      start: "center bottom",
      end: "center center",
      scrub: 1,
      animation: timeline,
    });

    ScrollTrigger.create({
      trigger: sectionRef.current,
      start: "top bottom",
      end: "bottom top",
      scrub: 1,
      animation: slidingTl,
    });

    return () => {
      timeline.kill();
      slidingTl.kill();
    };
  }, [quoteRef, sectionRef]);


};

export default Collaboration;
