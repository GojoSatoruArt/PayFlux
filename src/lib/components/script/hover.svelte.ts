import gsap from "gsap";

export const headhover = (hoverlement) => {
  document.addEventListener("mousemove", (event) => {
    const xPos = event.clientX / window.innerWidth - 0.5;
    const yPos = event.clientY / window.innerHeight - 0.5;

    gsap.to(hoverlement, 1, {
      rotationY: xPos * 50,
      rotationX: yPos * 80,
    });
  });
};
