<script>
import Tag from '$lib/components/tag.svelte'

let{
    tag = '',
    title = '',
    description = ''

} = $props();
</script>

<div class="title-wrap flex flex-col justify-center items-start gap-3">



<Tag
name = {tag}
/>


<div class="content-title-text">
    <p class="text-4xl">{title}</p>
</div>

        
<div class="content-title-subtext">
    <p class="opacity-75">{description}</p>
</div>



</div>




