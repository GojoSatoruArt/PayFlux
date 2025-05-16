<script>
import '$lib/css/system.css'
import Button from '$lib/components/button.svelte'
import Dashboard from '$lib/components/app/dashboard.svelte'
import Clients from '$lib/components/app/clients.svelte';
import Payment from '$lib/components/app/payment.svelte';
import Reports from '$lib/components/app/reports.svelte';
import Title from '$lib/components/content-title.svelte';
import { activeStab } from '$lib/components/script/dashboardstate.svelte';
import { appdropdown, profileSwitch } from '$lib/components/script/popup.svelte';
import { mobilenav } from '$lib/components/script/popup.svelte';
import { fade, fly } from 'svelte/transition';
let isRotated = false;


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



//mobile-app-dropdown
function togglemobile() {
    $mobilenav = !$mobilenav;
    isRotated = !isRotated;
  }
//mobile-app-dropdown

</script>


{#if $mobilenav}

<div in:fly={{y:-100, duration:100}} out:fly={{y:-100, duration:100}} class="mobile-navbar fixed z-110 top-15 pt-5 pb-15 w-full h-full flex justify-between items-start flex-col bg-(--color-dark-cardbg)">
    <div class="mobile-nav-wrap flex justify-start items-start flex-col w-full">

        <button class="sidebar-tab flex justify-start items-center w-full py-(--spacing-main-y) px-3 bg-(--color-dark-cardbg) rounded-lg border-1 border-(--app-content) transition-all ease-in hover:bg-(--button-secondary-hover)">Tutorials</button>

        <button class="sidebar-tab flex justify-start items-center w-full py-(--spacing-main-y) px-3 bg-(--color-dark-cardbg) rounded-lg border-1 border-(--app-content) transition-all ease-in hover:bg-(--button-secondary-hover)">Help Center</button>
  
        {#each sidebarTab.filter(tab => tab === 'Settings') as sTab }
            <button on:click={() => setStab (sTab)} class="sidebar-tab flex justify-start items-center w-full py-(--spacing-main-y) px-3 bg-(--color-dark-cardbg) rounded-lg border-1 border-(--app-content) transition-all ease-in hover:bg-(--button-secondary-hover)"
            class:active={active === sTab}
            >{sTab}</button>

    
        {/each}

    </div>

       
    <div class="copyright flex flex-col justify-start items-start pb-10">

        <div class="footer-brand flex flex-col justify-center items-start w-full h-full gap-3 px-10">

            <Title
            title = 'PayFlux'
            description = 'Get paid. Fast and simple.'
            />

            <p class="text-sm opacity-25">© 2025 FastBill. All rights reserved.</p>

        </div>
    </div>

        
     

</div>
            
{/if}



    <div class="app relative flex flex-col md:flex-row  justify-start items-center w-full h-dvh">



        <!--mobilenav-->

        
        <div class="mobile-nav top-0 z-100 w-full h-auto flex flex-col md:hidden justify-center items-center bg-(--color-dark-cardbg) border-b-1 border-(--button-secondary-hover)  p-5 gap-5">


            <div class="mobile-brand-nav w-full flex justify-between items-center">
                
                
                <div class="sidebar-brand w-full">
        
                <a class="text-(length:--fonts-lg) opacity-50" href="/">PayFlux</a>
            
                </div>
            
                
                <div class="sidebar-brand w-auto">
        
                    <button on:click={togglemobile} class="mobil-navicon cursor-pointer block md:hidden {isRotated ? 'rotate-90' : ''} transition-all ease-in">
                        <img class="svg size-7" src="/images/menu.svg" alt="" >
                    </button>
                
                    </div>
                
            
            </div>
            


            <button on:click={() => $appdropdown = !$appdropdown} class="profile-button relative sidebar-tab flex justify-between items-center w-full px-3 py-5 bg-(--color-dark-cardbg) rounded-lg border-1 border-(--color-hover-dark-stroke) transition-all ease-in hover:bg-(--button-secondary-hover) cursor-pointer">

                {#if !$appdropdown}

                <div class="mobile-dropdown overflow-hidden absolute top-17 left-0 w-full h-auto flex justify-center items-center flex-col bg-(--color-dark-main) rounded-lg border-1 border-(--color-hover-dark-stroke) p-3 gap-3">

                    {#each sidebarTab.filter(tab => tab !== 'Settings') as sTab }
                <button on:click={() => setStab (sTab)} class="sidebar-tab flex justify-start items-center w-full py-5 px-5 bg-(--color-dark-cardbg) border-1 border-(--app-content) rounded-lg transition-all ease-in hover:bg-(--button-secondary-hover)"
                class:active={active === sTab}
                >{sTab}</button>
                {/each}


                </div>
        
                    
                {/if}
               
                <div class="popup flex justify-center items-center flex-row gap-2">
                    
                    <p class="">{active}</p>
                </div>
              
                <div class="arrow-icon size-4">
                    
                    <img class="w-full" src="/images/dropdown.svg" alt="">
                
                </div>
    
            </button>















        </div>
        <!--mobilenav-->

















        
    <!--sidebar-->
    <div class="sidebar hidden md:flex justify-start items-start flex-col w-auto h-full p-(--spacing-sidebar) border-r-1 border-(--color-dark-stroke) bg-(--color-dark-main)">

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

    .rotate-90 {
      transform: rotate(45deg);
    }

</style>



