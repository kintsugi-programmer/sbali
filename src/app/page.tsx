import React from 'react'
import Hero from '@/components/Hero'
import Grid from '@/components/Grid'
import MobilePort from '@/components/MobilePort'
import Capture from '@/components/Capture'
import { Portfolio } from '@/components/portfolio'
import About from '@/components/About'
import Contact from '@/components/Contact'
import { ImgCursor } from '@/components/ImgCursor'
import { DragCards } from '@/components/Img2'
import Testimonials from '@/components/Testimonials'
import { Changelog } from '@/components/Changelog'


const page = () => {
  return (<>
    <head>
    <meta name="viewport" content="width=device-width, initial-scale=0.8"/>

      {/* <link rel="icon" href="/jsm-logo.png" sizes="any" /> */}
      {/* <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" /> */}

    </head>
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
      <section id="testimonials">
<h1 className="text-2xl md:text-7xl text-center font-bold text-green">
Testimonials
    </h1>
      <Testimonials/>
      </section>

      <section id="changelog">
      <Changelog/>
      </section>
      <div>

{/* <Capture/> */}
<DragCards/>
{/* <ImgCursor/> */}
</div>


{/* <Contact/> */}
<div className='pt-20 pb-[9vh]'>
<Contact/></div>
    </div>

    </main></>
  )
}

export default page