<script>

    import Link from '$lib/components/link.svelte'
    let{
        title = ''
    } =$props();

</script>
 
<div class="footer-link-wrap flex flex-col flex-wrap justify-start items-start gap-5">

    <div class="footer-title">
        <p class="text-[1.1rem]">{title}</p>
    </div>
    <div class="footer-links flex flex-col justify-center items-start gap-5">
        <slot />
    </div>

</div>

