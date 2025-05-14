<script>
    import '$lib/css/system.css'
   

    let {

        direction = 'col'

    } = $props();

</script>

<div class="container relative  max-w-7xl flex justify-center items-center flex-{`${direction}`} w-full h-full p-(--spacing-main) rounded-md mx-auto"
>
    <slot />
</div>