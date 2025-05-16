<script>
     import Draft from '$lib/components/app/dashboardnav/draft.svelte'
    import Paid from '$lib/components/app/dashboardnav/paid.svelte'
    import Unpaid from '$lib/components/app/dashboardnav/unpaid.svelte'
    import Void from '$lib/components/app/dashboardnav/void.svelte'
    let activeTab = $state('Draft')

let tab = ['Draft', 'Unpaid', 'Paid', 'Void']

const setTab = (tab) => {
    activeTab = tab;
    console.log($state.snapshot(activeTab));
}

let tabContent = {
Draft: Draft,
Unpaid: Unpaid,
Paid: Paid,
Void: Void,
};
</script>





<div class="app-dashboard w-full h-full py-(--spacing-sidebar) flex justify-start items-start flex-col gap-10">
    <div class="dashboard-tab flex justify-start items-start w-full py-(--spacing-sidebar) border-b-1 border-(--color-dark-stroke) gap-2">

    {#each tab as tabs }

    <button on:click={() => setTab(tabs)} class="invoice-tab flex justify-center items-center py-1.5 px-2 border-1 rounded-md border-(--color-dark-stroke) transition-all ease-in hover:bg-(--button-secondary-hover)"
    class:active={activeTab === tabs}   
    >
    {tabs}</button>
        
    {/each}

    </div>

    <div class="dashboard-content w-full h-full flex justify-center items-center bg-(--app-content) rounded-lg border-1 border-(--color-dark-stroke)">

    {#key activeTab}
    <svelte:component this={tabContent[activeTab]} />
        {/key}

    </div>
</div>



<style>
    .active{
        background-color: white;
        color: var(--color-dark-main);
    }
</style>