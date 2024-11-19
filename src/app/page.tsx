import React from 'react'
import Hero from '@/components/Hero'
import Grid from '@/components/Grid'
const page = () => {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col pt-[180] mx-auto sm:px-10 px-5">
    <div className="max-w-7xl w-full">
      <Hero />
      <Grid />
      
    </div>
    </main>
  )
}

export default page