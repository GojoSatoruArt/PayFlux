<script>
let {
 title = '',
 description = '',
 top = '0'
} = $props();

</script>



<div class="sticky card-wrap p-(--spacing-main) bg-(--color-dark-cardbg) w-full h-100 border-1 border-(--color-dark-stroke) rounded-sm"   style = "top: {top}rem">

    <p class="text-lg">
        {title}
    </p>

    <p class="text-sm opacity-55">
        {description}
    </p>
</div>