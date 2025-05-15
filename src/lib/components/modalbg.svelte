<script>
import { loginShow } from "./script/popup.svelte";
</script>


<div on:click={$loginShow = false} class="modal-bg z-100 fixed p-10 flex justify-center items-start w-full h-full bg-(--color-modal-bg) backdrop-blur-[1px]">
    <slot/>

</div>