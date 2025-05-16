<script>
import '$lib/css/system.css'
import Button from '$lib/components/button.svelte'
import Dashboard from '$lib/components/app/dashboard.svelte'
import Clients from '$lib/components/app/clients.svelte';
import Payment from '$lib/components/app/payment.svelte';
import Reports from '$lib/components/app/reports.svelte';

import { activeStab } from '$lib/components/script/dashboardstate.svelte';
  

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
</script>



    <div class="app flex justify-start items-center w-full h-dvh">


    <!--sidebar-->
    <div class="sidebar flex justify-start items-start flex-col w-50 h-full p-(--spacing-sidebar) border-r-1 border-(--color-dark-stroke) bg-(--color-dark-main)">

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