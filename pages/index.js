import React from 'react'
import story from '../assets/story.webp'
import Img from '../components/Image'
import action1 from '../assets/link1.webp'
import action2 from '../assets/link2.webp'
import action3 from '../assets/link3.webp'
import HeroImg from '../assets/hero.webp'
import Image from 'next/image'
import arrow from '../assets/longArrow.svg'
import aesthetic from '../assets/aesthetic.svg'



import Link from 'next/link'

export default function Home() {
  const hoverAction = (e)=>{
    e.currentTarget.children[1].classList.remove('bg-[#2B8187]')
    e.currentTarget.children[1].classList.add('bg-[#013438]')
  }

  const removeHoverAction = (e)=>{
    e.currentTarget.children[1].classList.remove('bg-[#013438]')
    e.currentTarget.children[1].classList.add('bg-[#2B8187]')
  }

  return (
    <div className="relative">
      <div>

          <header className="text-center mt-5 space-y-2">
              <h4 className="text-2xl xl:text-4xl text-[#001516] font-bonvivant">A blessed union between</h4>
              <h1 className="text-5xl lg:text-8xl text-[#01686F] font-bonvivant">Sarah &amp; Rhilaso</h1>
          </header>

          <div className="w-full h-auto container px-4 lg:md:px-8 xl:px-10  mx-auto mt-16">
              <Img src={HeroImg} alt="Rhilaso and Sarah holding each other"/>
          </div>
      </div>
      {/* Date */}
      <div className='py-16 md:py-28 bg-[#01575D] flex justify-center'>
        <div className='inline-block text-white'>
          <div className='flex w-full md:w-auto text-4xl md:text-[100px] md:leading-[100px] font-bonvivant text-center justify-center'>
            <div className='text-center'>October 1st, 2022</div>
          </div>
          <div className='flex items-center justify-center mt-4 w-10/12 md:w-auto mx-auto'>
            <Image src={arrow}></Image>
          </div>
          <button className='w-full text-[#E8B145] h-14 xl:h-16 mt-5 text-xl xl:text-2xl cursor-default font-bonvivant'>Save the Date</button>
        </div>
      </div>


      <section className='h-auto grid grid-cols-12' id="ourStory">
        <div className='col-span-12 md:col-span-5 xl:col-span-6'>
          <Img src={story} alt="Sarah and Rhilaso together"/>
        </div>
        <div className='col-span-12 md:col-span-7 xl:col-span-6 px-4 xl:px-20 flex items-center bg-[#013438] text-white py-10'>
          <div>
            <div className='flex items-center justify-center md:justify-start'>
              <h1 className='text-[#E8B145] border-b-4 border-[#E8B145] text-7xl md:text-4xl xl:text-8xl font-bonvivant inline-block text-center'>Our <br className='md:hidden'/>Story</h1>
            </div>
            <p className='mt-6 xl:mt-12 leading-10 px-10 md:px-0 text-center md:text-left'>From a casual exchange of pleasantries at a campus fellowship in 2012, to becoming friends and then lovers in 2014 amid so much uncertainty and caution. Ours has been an 8-year journey of learning selflessness and standing through thick and thin. Now we get the opportunity to do forever together, a journey we&acute;re confident in the grace of God to carry us through</p>
          </div>
        </div>
      </section>

      <div className='relative'>
        <div className='absolute w-full h-auto top-0 left-0'>
          <Image src={aesthetic} className="w-full h-auto"/>
        </div>
        <section className='text-center py-20 container mx-auto px-4 md:px-4 xl:px-10 relative'>
          
          <h4 className='text-xl xl:text-3xl'>1John 4:18</h4>
          <h2 className='font-bonvivant text-4xl xl:text-8xl'>...there is no <br/>fear in love</h2>

          <div className='grid grid-cols-1 md:grid-cols-3 gap-2 mt-20'>
                <Link href="/gallery">
                  <div onMouseOver={hoverAction} onMouseOut={removeHoverAction} className="cursor-pointer">
                    <Img src={action2} alt="Sarah and Rhilaso"/>
                    <div className='py-6 text-center text-white bg-[#2B8187] font-bonvivant'>View gallery</div>
                  </div>
                </Link>

                <Link href="/crew">
                  <div onMouseOver={hoverAction} onMouseOut={removeHoverAction} className="cursor-pointer">
                    <Img src={action1} alt="Sarah and Rhilaso"/>
                    <div className='py-6 text-center text-white bg-[#2B8187] font-bonvivant'>Meet the crew</div>
                  </div>
                </Link>

                <Link  href="#gifts">
                  <div onMouseOver={hoverAction} onMouseOut={removeHoverAction} className="cursor-pointer">
                    <Img src={action3} alt="Sarah and Rhilaso"/>
                    <div className='py-6 text-center text-white bg-[#2B8187] font-bonvivant'>Gift the couple</div>
                  </div>
                </Link>
          </div>
        </section>
      </div>
    </div>
  )
}
