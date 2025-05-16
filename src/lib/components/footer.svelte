<script>

    import Link from '$lib/components/link.svelte'
    import Container from '$lib/components/container.svelte'
    import Title from '$lib/components/content-title.svelte'
    import Footerlink from '$lib/components/footerlink.svelte'

</script>






<footer class="flex justify-center items-center py-10 px-5 w-full bg-(--color-dark-footer) mt-10 border-t-1 border-(--color-dark-stroke)">

 <Container>
    <div class="footer-wrap flex items-start flex-col lg:flex-row w-full h-full gap-10 ">
        <div class="footer-brand flex flex-col justify-center items-start w-full h-full gap-3 ">

            <Title
            title = 'PayFlux'
            description = 'Get paid. Fast and simple.'
            />

            <p class="text-sm opacity-25">© 2025 FastBill. All rights reserved.</p>

        </div>


    <div class="footer-links flex justify-start flex-row items-start w-full h-full">


        <div class="footer-link-wrap flex justify-between flex-wrap w-full">

            <Footerlink
            title = 'Product'>
            <Link name = 'How It Works'/>
            <Link name = 'Features'/>
            <Link name = 'Pricing'/>
            <Link name = 'Templates'/>
            </Footerlink>

            <Footerlink
            title = 'Company'>
            <Link name = 'About'/>
            <Link name = 'Contact'/>
            </Footerlink>

            <Footerlink
            title = 'Legal'>
            <Link name = 'Terms of Service'/>
            <Link name = 'Privacy Policy'/>
            </Footerlink>

            <Footerlink
            title = 'Social'>
            <Link name = 'X'/>
            <Link name = 'LinkedIn'/>
            </Footerlink>
            
           
           
       
        </div>

    </div>


    </div>
    
     
 </Container>

</footer>

