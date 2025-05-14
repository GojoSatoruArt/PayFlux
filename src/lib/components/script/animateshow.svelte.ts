import gsap from "gsap";

export const animateshow = (showelement) => {
  gsap.from(showelement, {
    x: 100,
    duration: 1,
    scrollTrigger: {
      trigger: showelement,
      start: "top 100%",
      toggleActions: "play none none none",
    },
    x: -50,
    opacity: 0,
    duration: 0.5,
    stagger: 0.4,
    ease: "power1.out",
  });
};
