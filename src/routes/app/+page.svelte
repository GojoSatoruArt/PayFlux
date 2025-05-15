<script>
    import '$lib/css/system.css'
    import Sidebar from '$lib/components/app/sidebar.svelte'
    import Button from '$lib/components/button.svelte'
    import Draft from '$lib/components/app/dashboardnav/draft.svelte'
    import Paid from '$lib/components/app/dashboardnav/paid.svelte'
    import Unpaid from '$lib/components/app/dashboardnav/unpaid.svelte'
    import Void from '$lib/components/app/dashboardnav/void.svelte'
    import Dashboard from '$lib/components/app/dashboard.svelte'



</script>



    <div class="app flex justify-start items-center w-full h-dvh">


        <Sidebar/>

        <div class="sidebar w-full h-full flex justify-center items-center bg-(--color-dark-cardbg) p-10">

            <div class="app-content max-w-5xl w-full h-full flex justify-center items-start flex-col gap-5">
                
                <div class="app-title w-full flex justify-between items-center">
        
                    <h1 class="app text-2xl text-center font-normal">
                        Your Invoices
                    </h1>
        
                    <Button
                    name = 'Create Invoice'
                    showIcon = 'true'/>
        
                </div>

                <Dashboard/>
        
            
            </div>
        </div>
        
        
    </div>
