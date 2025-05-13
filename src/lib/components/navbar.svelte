<script>
    import '$lib/css/system.css'
    import Button from '$lib/components/button.svelte'
    import Link from '$lib/components/link.svelte'

    import { onMount } from 'svelte';
	import { gsap } from 'gsap';
	import { ScrollTrigger } from 'gsap/ScrollTrigger';

	gsap.registerPlugin(ScrollTrigger);

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
	});

</script>


<div class="navbar z-100 overflow-hidden bord flex flex-row justify-between content-stretch w-full fixed top-0 bg-transparent px-10 py-5 border-1 border-transparent">


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

    <div class="navbar-button-wrap flex justify-end items-center  w-full gap-3">
        <Button
        name = 'Generate Invoice'
        showIcon = true
        />

        <Link
        name = 'Sign In'
        />
        
    </div>


</div>