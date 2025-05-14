<script>
    import { register } from 'swiper/element/bundle';
    import '$lib/css/system.css'
    import Navbar from '$lib/components/navbar.svelte'
    import Client from '$lib/components/client.svelte'
    import Container from '$lib/components/container.svelte'
    import Section from '$lib/components/section.svelte'
    import Button from '$lib/components/button.svelte'
    import Title from '$lib/components/content-title.svelte'
    import Card from '$lib/components/card.svelte'
    import Tag from '$lib/components/tag.svelte'
    import Footer from '$lib/components/footer.svelte'  
    import Animations from '$lib/components/animations.svelte';
    import {onMount} from 'svelte'
    import gsap from 'gsap'
    register();



    let animateShow = [];
    let target;

    onMount(()=>{

    document.addEventListener('mousemove', (event) => {
  
  const xPos = event.clientX / window.innerWidth - 0.5;
  const yPos = event.clientY / window.innerHeight - 0.5;

  gsap.to(target, 1, {
    rotationY: xPos * 50,
    rotationX: yPos * 80,
    
  });
  
});


gsap.from(animateShow, {
  x: 100,
  duration: 1,
  scrollTrigger: {
    trigger: animateShow,
    start: "top 50%", 
    toggleActions: "play none none none"
  }, 
  x: -10,
  opacity: 0,
    ease: 'power1.out',
    stagger: 0.3,
});

    })





</script>


<Navbar/>



<Section>


    <Animations/>
   
    

    <Container>

        <!-- <div class="line absolute right-0 top-0 size-[1px] h-full bg-(--color-dark-stroke)"></div>
        <div class="line absolute left-0 top-0 size-[1px]  h-full bg-(--color-dark-stroke)"></div>
        <div class="line absolute bottom-0 left-0 size-[1px]  w-full bg-(--color-dark-stroke)"></div> -->
        
        <div bind:this={animateShow[2]}  class="header flex justify-center items-center h-full flex-col gap-3">

            <div bind:this={target} class="client-message-wrap"> 

                <img class="svg" src="/images/message.svg" alt="">

            </div>

           <h1 bind:this={animateShow[1]}  class="text-(length:--fonts-head) text-center font-bold">
            Get Paid Today.
           </h1>
          
           <p bind:this={animateShow[3]} class="opacity-75 text-center text-lg">No more delays. Just fast, flexible invoicing.</p>

           <Button
           name = 'Get Started'
           showIcon = true
           />

        </div>

        <div class="header-user flex justify-center items-center flex-col gap-3 mb-25">

            <p bind:this={animateShow[4]}  class="text-(length:--fonts-subhead)">120,000+</p>
            <p bind:this={animateShow[5]}  class="opacity-55">Used by freelancers with 50+ different countries</p>

        </div>
        <div class="header-smtext flex justify-center items-center flex-col gap-3">

            <p bind:this={animateShow[6]}  class="text-center text-[1.1rem] font-light">Send sleek, professional invoices your clients cant ignore — with same-day payment options built-in.</p>

        </div>


       

    </Container>

</Section>


    <Container>


        <div class="content-container w-full border-1 rounded-lg border-(--color-dark-stroke)">


            
            <div class="main-content-wrap relative flex flex-col justify-stretch items-start w-full h-auto p-[0.8rem] sm:p-(--container-padding) border-b-1 border-(--color-dark-stroke) gap-5
            ">
   
                <div class="content-title relative flex justify-start items-center w-full">
        
                    <Title
                    showTag = true
                    tag = 'Why PayFlux?'
                    title='A modern tool built for solo freelancers.'
                    description ='Stop using bloated software made for big companies. FastBill keeps it lean, clean, and fast.'
                    />
                    
                </div>
      
                <div class="content-data grid grid-flow-row grid-cols-1 sm:grid-cols-2 w-full h-auto p(--spacing-main) rounded-lg  gap-5">
                    
                     <Card
                     title = 'Get notified instantly'
                     description = 'No clutter, just what you need.'
                     top = 20
                     />
                     <Card
                     title = 'Get notified instantly'
                     description = 'No clutter, just what you need.'
                     top = 25
                     />
                     <Card
                     title = 'Get notified instantly'
                     description = 'No clutter, just what you need.'
                     top = 30
                     />
                     <Card
                     title = 'Get notified instantly'
                     description = 'No clutter, just what you need.'
                     top = 35
                     />
 
                </div>
            </div>



            <div class="main-content-wrap relative flex flex-col justify-stretch items-start w-full h-auto p-(--container-padding) border-b-1 border-(--color-dark-stroke) rounded-lg gap-5">

                
                <Title
                showTag = true
                tag = 'Web Application'
                title='Designed for speed and simplicity.'
                description ='No bloated dashboards. No confusing steps. Just a clean, focused experience — built so you (and your clients) can move fast without friction.'
                />



                <div class="app-image w-full overflow-hidden auto border-1 border-(--color-dark-stroke) rounded-lg">
                    <img class="w-full" src="/images/Dapp.svg" alt="">
                </div>

            </div>




            <div class="main-content-wrap relative flex flex-col justify-stretch items-center w-full h-auto p-(--container-padding) border-b-1 border-(--color-dark-stroke) rounded-lg gap-10">

                
            <Tag
            name = 'Testimony'
            />



                <div class="app-image relative w-full h-auto auto rounded-lg">
                    
                    <img class="gradient absolute -right-1 z-10 h-full pointer-events-none" src="/images/gradient.svg" alt=""> 
                    <img class="gradient absolute -left-1 z-10 h-full rotate-180
                    pointer-events-none" src="/images/gradient.svg" alt=""> 


                    <div class="card w-full h-full flex justify-center items-center overflow-hidden">

                        <swiper-container slides-per-view="auto" space-between="10" autoplay-delay="3000" centeredSlides="true">
                            <swiper-slide class="flex justify-center items-center w-fit">
                                <Client/>
                            </swiper-slide>
                            <swiper-slide class="flex justify-center items-center w-fit">
                                <Client/>
                            </swiper-slide>
                            <swiper-slide class="flex justify-center items-center w-fit">
                                <Client/>
                            </swiper-slide>
                            <swiper-slide class="flex justify-center items-center w-fit">
                                <Client/>
                            </swiper-slide>
                            <swiper-slide class="flex justify-center items-center w-fit">
                                <Client/>
                            </swiper-slide>
                         
                          </swiper-container>
                    </div>


                </div>

                <Title
                textalign = "center"
                align = "center"
                title='Loved by freelancers, creators, and consultants worldwide!'
                description ='FastBill helps thousands get paid faster, with less hassle. Built for real people who value time, trust, and simplicity.'
                />

            </div>


        </div>


       
   
    </Container>




<Footer/>