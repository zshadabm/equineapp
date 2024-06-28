import React from 'react'
import Image from 'next/image'
import hero from '../../../public/asset/image/hero.jpg'


const Hero = () => {
  return (

//     <div className='bg-[url("/asset/image/hero.jpg")] h-96 w-full bg-cover bg-center p-20 bg-no-repeat'>
//     <div className="flex flex-col items-center justify-center">
//         <h1 className="mb-2 text-4xl font-bold text-center dark:text-white">
//             Hero section with background image
//         </h1>
//         <p className="text-lg text-center dark:text-white">
//             This isLorem ipsum dolor sit amet consectetur adipisicing
//             elit.
//         </p>
//         <div className="mt-4">
//             <button className="px-6 py-2 text-center text-white bg-indigo-600 rounded-md shadow-md">
//                 Get started
//             </button>
//         </div>
//     </div>
// </div>


<section>
  <div class="px-4 mx-auto max-w-7xl sm:px-6 md:px-12 lg:px-24 lg:pt-20 lg:pb-4">
    <div class="flex flex-wrap items-center mx-auto max-w-7xl">
      <div class="w-full lg:max-w-lg lg:w-1/2 rounded-xl">
        <div>
          <div class="relative w-full max-w-lg">
            <div class="absolute top-0 rounded-full bg-violet-300 -left-4 w-72 h-72 mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>

            <div class="absolute rounded-full bg-fuchsia-300 -bottom-24 right-20 w-72 h-72 mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
            <div class="relative ">
              <Image class="object-cover object-center mx-auto rounded-lg shadow-2xl " alt="hero" src={hero} />
            </div>
          </div>
        </div>
      </div>
      <div class="flex flex-col items-start mt-12 mb-16 text-left lg:flex-grow lg:w-1/2 lg:pl-6 xl:pl-24 md:mb-0 xl:mt-0">
        <span class="mb-8 text-xs font-bold tracking-widest text-blue-600 uppercase"> Your tagline </span>
        <h1 class="mb-8 text-4xl font-bold leading-none tracking-tighter text-neutral-600 md:text-7xl lg:text-5xl">Medium length display headline.</h1>
        <p class="mb-8 text-base leading-relaxed text-left text-gray-500">Free and Premium themes, UI Kit's, templates and landing pages built with Tailwind CSS, HTML &amp; Next.js.</p>
        <div class="mt-0 lg:mt-6 max-w-7xl sm:flex">
          <div class="mt-3 rounded-lg sm:mt-0">
          <button class="items-center block px-10 py-3.5 text-base font-medium text-center text-blue-600 transition duration-500 ease-in-out transform border-2 border-white shadow-md rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">Register</button>
          </div>

        </div>
      </div>
    </div>
  </div>
</section>
   
  )
}

export default Hero