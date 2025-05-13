<script>
    let{
        name = '',
        link =''
    } = $props();
</script>



    <a class="flex h-full justify-center items-center whitespace-nowrap opacity-75 transition-all duration-100 ease-in hover:opacity-100" href="{link}">
        {name}
    </a>


