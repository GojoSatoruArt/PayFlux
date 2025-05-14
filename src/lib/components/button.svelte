<script>
    import '$lib/css/system.css'
    import Arrow from '$lib/components/icons/arrow.svelte'
    import gsap from 'gsap';

    export const animateshow = (showelement) => {
  gsap.from(showelement, {
    x: -100,
    rotation:90,
    opacity: 0,
    duration: 0.5,
    stagger: 0.4,
    ease: "power1.out",
  });
};

    let{
        variation = 'primary',
        disabled = false,
        loading = false,
        showIcon = false,
        name = '',
        defaultstyle = ''
    } =$props();

    const primary = 'button flex flex-row justify-center items-center gap-2 whitespace-nowrap px-(--spacing-main) font-medium py-(--spacing-main-y) rounded-(--radius-button) text-(--color-dark-main) bg-(--color-dark-button) duration-300 ease-in-out hover:bg-white';

    
    const secondary = 'button flex flex-row justify-center items-center gap-2 whitespace-nowrap font-medium px-(--spacing-main) py-(--spacing-main-y) rounded-(--radius-button) text-(--color-dark-maintext) border-1 border-(--color-dark-stroke) duration-300 ease-in-out opacity-50 hover:bg-(--button-secondary-hover) hover:opacity-100';

    let buttonClass = variation === 'primary' ? primary : secondary;

</script>




<button use:animateshow class="{buttonClass}">
{name} 
{#if showIcon}
<div class="button-icon size-4"><Arrow/></div>
{/if}



</button>
