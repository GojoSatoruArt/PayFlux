import gsap from "gsap";

export const popup = (popupElement) => {
  gsap.from(popupElement, {
    y: -100,
    opacity: 0,
  });
};

export const popupreverse = (popupElementrvs) => {
  gsap.from(popupElementrvs, {
    y: 1,
    duration: 0.2,
    ease: "power1.out",
  });
};
