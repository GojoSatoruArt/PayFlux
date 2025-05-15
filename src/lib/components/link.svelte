<script>
    let{
        name = '',
        link ='',
        onClick = () => {}
    } = $props();

</script>

    

    <button on:click={onClick} class="flex font- h-full justify-center items-center whitespace-nowrap opacity-50 transition-all duration-100 ease-in hover:opacity-100" href="{link}">
        {name}
    </button>


