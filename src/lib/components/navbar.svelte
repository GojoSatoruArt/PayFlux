<script lang="ts">
    import '$lib/css/system.css'
    import Button from '$lib/components/button.svelte'
    import Link from '$lib/components/link.svelte'
    import { onMount } from 'svelte';
	import { gsap } from 'gsap';
	import { ScrollTrigger } from 'gsap/dist/ScrollTrigger.js';
	gsap.registerPlugin(ScrollTrigger);
    import { loginShow } from './script/popup.svelte';
    import { mobilenav } from './script/popup.svelte';
    import Title from './content-title.svelte';
    import { fly } from 'svelte/transition';
    let isRotated = false;
    
    
    

	onMount(() => {
		const navbar = document.querySelector('.navbar');

		gsap.to(navbar, {
			scrollTrigger: {
				trigger: 'body',
				start: 'top -5%',
				toggleActions: 'play none none reverse',
			},
			backgroundColor: 'var(--color-dark-cardbg)',
            borderColor: 'var(--color-dark-stroke)',
			duration: 0.3,
		});


        gsap.from(navbar, {
            y: -100,
            duration: 1,
            ease: 'power1.out',
            delay: 0.7
        })

    
        
	});


    function toggle() {
    $mobilenav = !$mobilenav;
    isRotated = !isRotated;
  }


</script>


<div class="navbar z-90 overflow-hidden bord flex flex-row justify-between items-center content-stretch w-full fixed top-0 bg-transparent px-10 py-5 border-1 border-transparent">


    <div class="navbar-brand-wrap flex justify-start items-center w-full">
        <p class="text-(length:--fonts-lg)">PayFlux</p>
    </div>

    <div class="navbar-link-wrap hidden lg:flex justify-center items-center flex-row w-full gap-(--spacing-gap)">
        <Button
        name = 'Features'
        variation = 'secondary'
        />
        <Button
        name = 'Templates'
        variation = 'secondary'
        />
        <Button
        name = 'Pricing'
        variation = 'secondary'
        />
        <Button
        name = 'Team'
        variation = 'secondary'
        />
    </div>

    <div class="navbar-button-wrap hidden lg:flex justify-end items-center  w-full gap-3">
        <Button
        name = 'Generate Invoice'
        showIcon = true
        to = 'app'
        />
        
        <Link
        name = 'Sign In'
        onClick = {() => $loginShow = !$loginShow}
        />

        
    </div>


    <button on:click={toggle} class="mobil-navicon cursor-pointer block md:hidden {isRotated ? 'rotate-90' : ''} transition-all ease-in">
        <img class="svg size-7" src="/images/menu.svg" alt="" >
    </button>
   


</div>

{#if $mobilenav}

<div in:fly={{y:-100, duration:100}} out:fly={{y:-100, duration:100}} class="mobile-navbar fixed z-80 pt-22 w-full h-full flex justify-between items-start flex-col bg-(--color-dark-cardbg)">
    <div class="mobile-nav-wrap flex justify-start items-start flex-col w-full">

        <button class="navlink flex justify-start items-start p-10 w-full text-4xl border-b-1 border-(--color-dark-stroke) transition-all ease-in hover:bg-(--button-secondary-hover)">Features</button>
     
        <button class="navlink flex justify-start items-start p-10 w-full text-4xl border-b-1 border-(--color-dark-stroke) transition-all ease-in hover:bg-(--button-secondary-hover)">Templates</button>
     
        <button class="navlink flex justify-start items-start p-10 w-full text-4xl border-b-1 border-(--color-dark-stroke) transition-all ease-in hover:bg-(--button-secondary-hover)">Pricing</button>
     
        <button class="navlink flex justify-start items-start p-10 w-full text-4xl border-b-1 border-(--color-dark-stroke) transition-all ease-in hover:bg-(--button-secondary-hover)">Team</button>

    </div>

       
    <div class="copyright flex flex-col justify-start items-start pb-10">

        <div class="footer-brand flex flex-col justify-center items-start w-full h-full gap-3 px-10">

            <Title
            title = 'PayFlux'
            description = 'Get paid. Fast and simple.'
            />

            <p class="text-sm opacity-25">© 2025 FastBill. All rights reserved.</p>

        </div>
    </div>

        
     

</div>
            
{/if}


<style>
    .rotate-90 {
      transform: rotate(45deg);
    }
  </style>