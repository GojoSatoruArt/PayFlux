import { onMount } from "svelte";
import { gsap } from "gsap";

onMount(() => {
  const card = document.querySelector(".client-message-wrap");
  function handleMouseMove(event: MouseEvent) {
    let xPos = event.clientX / window.innerWidth - 0.5;
    let yPos = event.clientY / window.innerHeight - 0.5;
    let box = card; // Ensure `element` is defined
    return { xPos, yPos, box };

    gsap.to(card, {
      rotationY: xPos * 20, // Tilt left/right (max 20 degrees)
      rotationX: -yPos * 20, // Tilt up/down (max 20 degrees)
      duration: 0.3,
      ease: "power2.out",
    });
    return { xPos, yPos };
  }
});
