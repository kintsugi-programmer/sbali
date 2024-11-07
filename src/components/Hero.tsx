import React from 'react'
import { TextHoverEffect } from './ui/bgtexthover'

const Hero = () => {
  return (
    <div className="relative h-[20rem] flex flex-col md:flex-row items-center justify-center">
            <TextHoverEffect text="kintsugi" />
      
      
      <div className="relative mb-8 md:mb-0">
        {/* Any foreground content goes here */}
        <h1 className="text-4xl font-bold">
           <span className="text-3xl font-normal">Programmer <span className="text-xl font-normal">a.k.a</span></span> Siddhant Bali
        </h1>  
        <span className="font-bold" >&gt; </span>Computer Science& Design Scholar
        <br />
        <span className="font-bold" >&gt; </span>CSD B.Tech. 2026 Batch <a href="https://www.iiitd.ac.in" target="_blank" rel="noopener noreferrer" className="underline">IIIT Delhi</a>
        <div className='pt-5'>
        <button className="shadow-[0_0_0_3px_#000000_inset] px-6 py-2 bg-transparent border border-green-500 text-green-border-green-500 rounded-lg font-bold transform hover:-translate-y-1 transition duration-400"><span className="font-bold" >&gt; </span>
        <a href="https://drive.google.com/file/d/1wFeV03O0NKdVAKtV5j-m9fdXHX4p3-2B/view?usp=sharing" target="_blank" rel="noopener noreferrer">Résumé</a>
</button></div>
      </div>
      


    </div>
  )
}

export default Hero
