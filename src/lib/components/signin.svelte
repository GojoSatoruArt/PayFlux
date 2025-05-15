<script>
    import { enhance } from '$app/forms';
    import ContentTitle from "./content-title.svelte";
    import Button from "./button.svelte";
    import Link from "./link.svelte";
    import { loginShow } from './script/popup.svelte';
    import { popup } from './script/popupanimate.svelte';
    import { onMount } from 'svelte';

    onMount(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape' && $loginShow) {
        $loginShow = false;
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  });
</script>


<div use:popup class="signin relative w-full h-auto  md:h-1/2 md:w-1/2 flex flex-col items-stretch mt-20 sm:flex-row p-2 sm:p-5 bg-(--color-dark-cardbg) border-1 rounded-lg border-(--color-dark-stroke) gap-5">


    <button on:click={() => $loginShow = !$loginShow} class="login-close flex justify-center items-center absolute top-0 right-0 m-2 size-8 p-2 rounded-lg border-1 border-(--color-dark-stroke) bg-(--color-close-bg)"> <img class="w-full h-full" src="/images/close.svg" alt=""> </button>

<div class="w-full h-auto flex justify-center items-center flex-col p-5 gap-5">
    
    <p class="text-(length:--fonts-lg) opacity-50">PayFlux</p>
    <ContentTitle title ='Sign In to Craftwork' description='Sign in to access your dashboard, manage your settings, and continue where you left off.' textalign = 'center' align = 'center'/>

    <form class="flex justify-center items-center flex-col w-full gap-5" method="POST" use:enhance>
     
        <input class="w-full p-3 border-1 rounded-lg border-(--color-dark-stroke)" name="email" type="email" placeholder="Email or Username" required />
        <input  class="w-full p-3 border-1 rounded-lg border-(--color-dark-stroke)" name="password" type="password" placeholder="Enter Your Password" required />
        <div class="signin-button-wrap flex justify-between items-center w-full flex-col mt-2 gap-5">
            <Button name='Sign In' showIcon = 'true' type = 'submit'/>
            <Link name = 'Forgot Password?'/>
         
        </div>
   
      </form>
   

</div>

<div class="login-image w-full h-full overflow-hidden hidden md:flex rounded-lg border-1 border-(--color-dark-stroke)">

    <div class="w-full h-full bg-[url(/images/Dapp.svg)]"></div>


</div>
</div>