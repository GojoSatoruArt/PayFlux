<script>
    import '$lib/css/system.css'
    import Navbar from '$lib/components/navbar.svelte'
    import Container from '$lib/components/container.svelte'
    import Section from '$lib/components/section.svelte'
    import Button from '$lib/components/button.svelte'
    import Title from '$lib/components/content-title.svelte'
    import Card from '$lib/components/card.svelte'




</script>


<Navbar/>



<Section>

    <Container>

        <div class="header flex justify-center items-center h-full flex-col gap-3">

           <h1 class="text-(length:--fonts-head) font-bold">
            Get Paid Today.
           </h1>
          
           <p class="opacity-75 text-lg">No more delays. Just fast, flexible invoicing.</p>

           <Button
           name = 'Get Started'
           showIcon = true
           />

        </div>

        <div class="header-user flex justify-center items-center flex-col gap-3 mb-50">

            <p class="text-(length:--fonts-subhead)">120,000+</p>
            <p class="opacity-55">Used by freelancers with 50+ different countries</p>

        </div>
        <div class="header-smtext flex justify-center items-center flex-col gap-3">

            <p>Send sleek, professional invoices your clients cant ignore — with same-day payment options built-in.</p>

        </div>


       

    </Container>

</Section>


    <Container>


        <div class="content-container w-full border-1 rounded-lg border-(--color-dark-stroke)">


            
            <div class="main-content-wrap relative flex flex-col lg:flex-row justify-stretch items-start w-full h-auto p-(--container-padding) border-b-1 border-(--color-dark-stroke)  gap-5">
   
                <div class="content-title sticky top-25 lg:top-25 flex justify-start items-center w-full">
        
                    <Title
                    tag = 'Why PayFlux?'
                    title='A modern tool built for solo freelancers.'
                    description ='Stop using bloated software made for big companies. FastBill keeps it lean, clean, and fast.'
                    />
                    
                </div>
      
                <div class="content-data relative flex flex-col w-full h-auto justify-start items-start  p(--spacing-main) rounded-lg  gap-5">

                     <Card
                     title = 'Get notified instantly'
                     description = 'No clutter, just what you need.'
                     top = 20
                     />
                     <Card
                     title = 'Get notified instantly'
                     description = 'No clutter, just what you need.'
                     top = 25
                     />
                     <Card
                     title = 'Get notified instantly'
                     description = 'No clutter, just what you need.'
                     top = 30
                     />
                     <Card
                     title = 'Get notified instantly'
                     description = 'No clutter, just what you need.'
                     top = 35
                     />
 
                </div>
            </div>



            <div class="main-content-wrap relative flex flex-col justify-stretch items-start w-full h-auto p-(--container-padding) border-b-1 border-(--color-dark-stroke) rounded-lg gap-5">

                
                <Title
                tag = 'Web Application'
                title='Designed for speed and simplicity.'
                description ='No bloated dashboards. No confusing steps. Just a clean, focused experience — built so you (and your clients) can move fast without friction.'
                />



                <div class="app-image w-full overflow-hidden auto border-1 border-(--color-dark-stroke) rounded-lg">
                    <img class="w-full" src="/images/Dapp.svg" alt="">
                </div>

            </div>


        </div>


       
   
   </Container>



