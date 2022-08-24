import React, {useEffect} from 'react'
import story from '../assets/story.png'
import Img from '../components/Image'
import Image from 'next/image'
import action1 from '../assets/action1.png'
import action2 from '../assets/action2.png'
import action3 from '../assets/action3.png'

import gallery1 from '../assets/gallery1.png'
import gallery2 from '../assets/gallery2.png'
import gallery3 from '../assets/gallery3.png'
import gallery4 from '../assets/gallery4.png'
import gallery5 from '../assets/gallery5.png'
import gallery6 from '../assets/gallery6.png'
import gallery7 from '../assets/gallery7.png'
import gallery8 from '../assets/gallery8.png'
import gallery9 from '../assets/gallery9.png'
import gallery10 from '../assets/gallery10.png'
import gallery11 from '../assets/gallery11.png'
import gallery12 from '../assets/gallery12.png'
import galleryLogo from '../assets/galleryLogo.svg'
import Link from 'next/link'

import AOS from 'aos';
import "aos/dist/aos.css"



const actions = [
  {
    image:action1,
    text:"Meet the crew",
    link:"/crew"
  },
  {
    image:action2,
    text:"Our Wedding IV",
    link:"/"
  },
  {
    image:action3,
    text:"Gift the Couple",
    link:"#gifts"
  },
]

export default function Home() {
  const hoverAction = (e)=>{
    e.currentTarget.children[1].classList.remove('bg-[#2B8187]')
    e.currentTarget.children[1].classList.add('bg-[#013438]')
  }

  const removeHoverAction = (e)=>{
    e.currentTarget.children[1].classList.remove('bg-[#013438]')
    e.currentTarget.children[1].classList.add('bg-[#2B8187]')
  }

  useEffect(()=>{
    AOS.init({
      duration : 1000
    });
  },[])

  return (
    <div className="relative">
      {/* Date */}
      <div className=' py-28 bg-[#01575D] flex justify-center'>
        <div className='inline-block text-white'>
          <div className='flex w-auto text-4xl md:text-[100px] xl:text-[150px] md:leading-[100px] divide-x divide-dashed font-bonvivant'>
            <div className='pr-6 lg:pr-12'>01</div>
            <div className='px-6 lg:px-12'>Oct</div>
            <div className='pl-6 lg:pl-12'>22</div>
          </div>
          <button className='w-full bg-[#E8B145] h-20 mt-6 text-3xl'>Save the date</button>
        </div>
      </div>


      <section className='h-auto grid grid-cols-12' id="ourStory">
        <div className='col-span-12 md:col-span-5'>
          <Img src={story} alt="Sarah and Rhilaso together"/>
        </div>
        <div className='col-span-12 md:col-span-7 px-4 xl:px-20 flex items-center bg-[#013438] text-white py-10'>
          <div>
            <div className='flex items-center justify-center md:justify-start'>
              <h1 className='text-[#E8B145] border-b-4 border-[#E8B145] text-4xl xl:text-8xl font-bonvivant inline-block text-center'>Our Story</h1>
            </div>
            <p className='mt-6 xl:mt-12 leading-10'>From a casual exchange of pleasantries at a campus fellowship in 2012, to becoming friends and then lovers in 2014 amid so much uncertainty and caution. Ours has been an 8-year journey of learning selflessness and standing through thick and thin. Now we get the opportunity to do forever together, a journey we&acute;re confident in the grace of God to carry us through</p>
          </div>
        </div>
      </section>

      <section className='text-center py-20 container mx-auto px-4 md:px-4 xl:px-10'>
        <h4 className='text-xl xl:text-3xl'>1John 4:18</h4>
        <h2 className='font-bonvivant text-4xl xl:text-8xl'>...there is no <br/>fear in love</h2>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-2 mt-20'>
          {actions.map(a=>{
            return (
              <Link key={a.link} href={a.link}>
                <div onMouseOver={hoverAction} onMouseOut={removeHoverAction} key={a.text} className="cursor-pointer">
                  <Img src={a.image} alt="Sarah and Rhilaso"/>
                  <div className='py-6 text-center text-white bg-[#2B8187] font-bonvivant'>{a.text}</div>
                </div>
              </Link>
            )
          })}
        </div>
      </section>

      {/* gallery */}
      <section className='grid grid-cols-10 gap-5 container mx-auto px-4 md:px-4 xl:px-10 ' id="gallery">
        <div className='col-span-10 md:hidden flex flex-col items-center justify-center'>
          <Image src={galleryLogo} alt="Sarah anad Rhilaso logo"/>
          <h4 className='font-bonvivant text-4xl md:text-3xl xl:text-6xl text-center'>TRhilsAffair&acute;22</h4>
        </div>
        {/* Left */}
        <div className='col-span-10 md:col-span-3 flex flex-col items-center justify-start gap-5 md:mt-40 xl:mt-80'>
            <div className='inline-block' data-aos="fade-up"><Img src={gallery1} alt="Sarah"/></div>
            <div className='inline-block' data-aos="fade-up"><Img src={gallery4} alt="Rhilaso"/></div>
            <div className='inline-block' data-aos="fade-up"><Img src={gallery7} alt="Sarah"/></div>
            <div className='inline-block' data-aos="fade-up"><Img src={gallery10} alt="Rhilaso"/></div>
        </div>

        {/* Center */}
        <div className='col-span-10 md:col-span-4 flex flex-col items-center justify-start gap-5'>
          <div className='hidden md:flex flex-col items-center justify-center' data-aos="fade-up">
            <Image src={galleryLogo} alt="Sarah anad Rhilaso logo" className=''/>
            <h4 className='font-bonvivant text-4xl md:text-3xl xl:text-6xl text-center'>TRhilsAffair&acute;22</h4>
          </div>
          <div className='inline-block md:mt-20 xl:mt-40'><Img src={gallery2} alt="Sarah"/></div>
          <div className='inline-block' data-aos="fade-up"><Img src={gallery5} alt="Rhilaso"/></div>
          <div className='inline-block' data-aos="fade-up"><Img src={gallery8} alt="Sarah"/></div>
          <div className='inline-block' data-aos="fade-up"><Img src={gallery11} alt="Rhilaso"/></div>
        </div>

        {/* right */}
        <div className='col-span-10 md:col-span-3 flex flex-col items-center justify-start gap-5 md:mt-40 xl:mt-80'>
          <div className='inline-block' data-aos="fade-up"><Img src={gallery3} alt="Sarah"/></div>
          <div className='inline-block' data-aos="fade-up"><Img src={gallery6} alt="Rhilaso"/></div>
          <div className='inline-block' data-aos="fade-up"><Img src={gallery9} alt="Sarah"/></div>
          <div className='inline-block' data-aos="fade-up"><Img src={gallery12} alt="Rhilaso"/></div>
        </div>
      </section>
    </div>
  )
}
