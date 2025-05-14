<script>
import Tag from '$lib/components/tag.svelte'

let{
    tag = '',
    title = '',
    description = '',
    showTag = false,
    align = 'start',
    textalign = ''

} = $props();
</script>

<div class="title-wrap flex flex-col justify-center {`items-${align}`} gap-3 {`text-${textalign}`}'}">


    {#if showTag}
    <Tag
    name = {tag}/>
    {/if}
    





<div class="content-title-text {`text-${textalign}`}">
    <p class="text-4xl">{title}</p>
</div>

        
<div class="content-title-subtext {`text-${textalign}`}">
    <p class="opacity-75">{description}</p>
</div>



</div>




