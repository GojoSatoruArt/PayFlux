import gsap from "gsap";

export const animateshow = (showelement) => {
  gsap.from(showelement, {
    autoAlpha: 0,
    duration: 1,
    scrollTrigger: {
      trigger: showelement,
      start: "top 100%",
      toggleActions: "play none none none",
    },
    x: -50,
    opacity: 0,
    ease: "power1.out",
  });
};
