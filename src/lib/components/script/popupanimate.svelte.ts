import gsap from "gsap";

export const popup = (popupElement) => {
  gsap.from(popupElement, {
    y: -100,
    opacity: 0,
  });
};
