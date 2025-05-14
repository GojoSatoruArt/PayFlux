<script>
    import '$lib/css/system.css'
    import Container from '$lib/components/container.svelte'
    import Section from '$lib/components/section.svelte'
    import gsap from 'gsap' 
    import { onMount } from "svelte";
    import { boxanimate } from '$lib/components/script/cardhover.svelte';

</script>


<Section>

<Container>


    <div use:boxanimate class="box size-20 bg-gray-800 rounded-lg"></div>



</Container>

</Section>