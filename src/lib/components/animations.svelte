<script>
    import {onMount} from 'svelte'
    import { ScrollTrigger } from 'gsap/dist/ScrollTrigger.js';
    import gsap from 'gsap'

    let target;
    let leftgph = [];
    let rightgph = [];

    
    onMount (() => {

        const leftElements = [leftgph[1],leftgph[2],leftgph[3],].filter((el) => el);
        const rightElements = [rightgph[1],rightgph[2],rightgph[3],].filter((el) => el);
        const allElements = [...leftElements, ...rightElements];

    gsap.from(allElements, {
        y: 100,
        opacity: 0,
        stagger: {
    amount: 1,
    from: "random"
  }
    })



    leftElements.forEach((el, i) => {
      gsap.to(el, {
        scrollTrigger: {
          trigger: 'body',
          start: `top `, // Offset start for stagger
          scrub: true,
          toggleActions: 'play none none reverse',
        },
        x: -300,
        rotation: 360,
        ease: 'power1.out',
        stagger: 0.3,
        duration: 1,
      });
    });

    rightElements.forEach((el, i) => {
      gsap.to(el, {
        scrollTrigger: {
          trigger: 'body',
          start: `top+=${i * 50} top`, // Offset start for stagger
          scrub: true,
          toggleActions: 'play none none reverse',
        },
        x: 500,
        rotation: 360,
        ease: 'power1.out',
        duration: 1,
        stagger: {
    amount: 2,
    from: "random"
  }
      });
    });
      

    });


</script>

<div class="absolute left-0 overflow-x-clip w-full h-full">
  <div bind:this={leftgph[1]} class="gph absolute top-0 left-25 blur-[2px] w-30 sm:w-auto"> 
    <img class="svg" src="/images/gph/gph-left-1.svg" alt="">
</div>
<div bind:this={leftgph[2]} class="gph absolute top-100 left-0 w-30 sm:w-auto"> 
    <img class="svg" src="/images/gph/gph-left-2.svg" alt="">
</div>
<div bind:this={leftgph[3]} class="gph absolute bottom-0 left-25 blur-[2px] w-30 sm:w-auto"> 
    <img class="svg" src="/images/gph/gph-left-3.svg" alt="">
</div>

<div bind:this={rightgph[1]} class="gph absolute top-0 right-25 blur-[2px] w-30 sm:w-auto"> 
    <img class="svg" src="/images/gph/gph-right-1.svg" alt="">
</div>
<div bind:this={rightgph[2]}  class="gph absolute top-100 right-0 w-30 sm:w-auto "> 
    <img class="svg" src="/images/gph/gph-right-2.svg" alt="">
</div>
<div bind:this={rightgph[3]}  class="gph absolute bottom-0 right-25 blur-[2px] hover:blur-[0px] w-30 sm:w-auto"> 
    <img class="svg" src="/images/gph/gph-right-3.svg" alt="">
</div>
</div>

