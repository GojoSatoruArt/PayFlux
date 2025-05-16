<script>
import '$lib/css/system.css'
import Button from '$lib/components/button.svelte'
import Dashboard from '$lib/components/app/dashboard.svelte'
import Clients from '$lib/components/app/clients.svelte';
import Payment from '$lib/components/app/payment.svelte';
import Reports from '$lib/components/app/reports.svelte';
import { activeStab } from '$lib/components/script/dashboardstate.svelte';
import { profileSwitch } from '$lib/components/script/popup.svelte';
import { fade, fly } from 'svelte/transition';

//navigation
export let sidebarTab = ['Dashboard', 'Clients', 'Payments', 'Reports', 'Settings']
let active = activeStab;
const setStab = (sidebarTab) =>{ 
active = sidebarTab;
console.log(active);
}
  let tabContent = {
    Dashboard: Dashboard,
    Clients: Clients,
    Payments: Payment,
    Reports: Reports, 
};
//navigation

//popup


//

</script>



    <div class="app flex justify-start items-center w-full h-dvh">


    <!--sidebar-->
    <div class="sidebar flex justify-start items-start flex-col w-auto h-full p-(--spacing-sidebar) border-r-1 border-(--color-dark-stroke) bg-(--color-dark-main)">

    <div class="sidebar-brand w-full">
        
    <a class="text-(length:--fonts-lg) opacity-50" href="/">PayFlux</a>

    </div>

    <div class="sidebar-link flex justify-start flex-col items-start py-(--spacing-sidebar) w-full h-full gap-2">
        
        {#each sidebarTab.filter(tab => tab !== 'Settings') as sTab }
            <button on:click={() => setStab (sTab)} class="sidebar-tab flex justify-start items-center w-full py-(--spacing-main-y) px-3 bg-(--color-dark-cardbg) rounded-lg border-1 border-(--app-content) transition-all ease-in hover:bg-(--button-secondary-hover)"
            class:active={active === sTab}
            >{sTab}</button>
        {/each}

    </div>

    <div class="sidebar-profile flex justify-start flex-col items-start py-(--spacing-sidebar) w-full gap-2">

        <button class="sidebar-tab flex justify-start items-center w-full py-(--spacing-main-y) px-3 bg-(--color-dark-cardbg) rounded-lg border-1 border-(--app-content) transition-all ease-in hover:bg-(--button-secondary-hover)">Tutorials</button>

        <button class="sidebar-tab flex justify-start items-center w-full py-(--spacing-main-y) px-3 bg-(--color-dark-cardbg) rounded-lg border-1 border-(--app-content) transition-all ease-in hover:bg-(--button-secondary-hover)">Help Center</button>
  
        {#each sidebarTab.filter(tab => tab === 'Settings') as sTab }
            <button on:click={() => setStab (sTab)} class="sidebar-tab flex justify-start items-center w-full py-(--spacing-main-y) px-3 bg-(--color-dark-cardbg) rounded-lg border-1 border-(--app-content) transition-all ease-in hover:bg-(--button-secondary-hover)"
            class:active={active === sTab}
            >{sTab}</button>

    
        {/each}

        <button on:click={() => $profileSwitch = !$profileSwitch} class="profile-button relative sidebar-tab flex justify-between items-center w-45 py-(--spacing-main-y) px-3 bg-(--color-dark-cardbg) rounded-lg border-1 border-(--app-content) transition-all ease-in hover:bg-(--button-secondary-hover) gap-3  cursor-pointer">

            <!--profile nav--->

            {#if $profileSwitch}
      
            
            <div in:fly={{ y: 50, duration:150}} out:fly={{ y: 50, duration:150 }}  class="popup flex  items-stretch flex-col p-2 absolute bottom-13 left-0 w-full
            bg-(--color-dark-cardbg) rounded-lg border-1 border-(--color-dark-stroke) transition-all ease-in gap-3">

            <div class="profile-option w-auto flex justify-between items-center px-2 py-3 rounded-md   hover:bg-(--button-secondary-hover)  cursor-pointer gap-3">
                <p class="inline-block">Sign out</p> 
                <img class="size-4" src="/images/logout.svg" alt="">
            </div>

            <div class="profile-option w-auto flex justify-between items-center px-2 py-3 rounded-md   hover:bg-(--button-secondary-hover)  cursor-pointer gap-3"> 
                <p class="inline-block">Switch Account</p> 
                <img class="size-4" src="/images/switch.svg" alt="">
            </div>

        </div>
                

            
            {/if}
           

            <!--profile nav--->
    
            <div class="popup flex justify-center items-center flex-row gap-2">
                <div class="p-photo size-5 bg-(--button-secondary-hover) rounded-full"></div>
                <p class="">Gojo Satoru</p>
            </div>
          
            <div class="arrow-icon size-4">
                
                <img class="w-full" src="/images/dropdown.svg" alt="">
            
            </div>

        </button>

    </div>

</div>


      <!--sidebar-->

      
        <div class="app-main w-full h-full flex justify-center items-center bg-(--color-dark-cardbg) p-10">

            <div class="app-content max-w-5xl w-full h-full flex justify-center items-start flex-col gap-5">
                
                <div class="app-title w-full flex justify-between items-center">
        
                    <h1 class="app text-2xl text-center font-normal">
                        {active}
                    </h1>
        
                    <Button
                    name = 'Create Invoice'
                    showIcon = 'true'/>
        
                </div>


               
                    {#key active}
                    <svelte:component this={tabContent[active]} />
                    {/key}
             
            </div>
        </div>
        
        
    </div>



<style>


    .active{
        background-color: white;
        color: var(--color-dark-main);
    }

</style>