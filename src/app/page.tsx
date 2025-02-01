import React from 'react'
import Hero from '@/components/Hero'
import Grid from '@/components/Grid'
import MobilePort from '@/components/MobilePort'
import Capture from '@/components/Capture'
import { Portfolio } from '@/components/portfolio'
import About from '@/components/About'
import Contact from '@/components/Contact'
const page = () => {
  return (
    <main className=" relative bg-black-100 flex justify-center items-center flex-col pt-[10] mx-auto sm:px-10 px-5 ">
    <div className="max-w-7xl w-full">
      <Hero />
      <About/>
      
<section id="work">
      <div className="hidden md:block">
  <Portfolio />
        {/* Portfolio destroys Mobile responsiveness */}
      {/* i think simple grid /flex for images is better than portfolio for mobile */}
      
</div>
<div className="block md:hidden">
  <MobilePort /> 
</div></section>
{/* <div className='py-80'> 
      <Grid />
      </div> */}
      <div>
<Capture/>
</div>
<div className='sm:pt-[220vh] pt-[200vh] pb-[9vh]'>
<Contact/></div>
    </div>

    </main>
  )
}

export default page