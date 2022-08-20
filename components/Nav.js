import React, {useState, useEffect} from 'react'
import Link from 'next/link'
import styles from '../styles/Animations.module.css'
import { useRouter } from 'next/router'

const LinkComponent = ({href, name}) =>{
    const router = useRouter().asPath.substring(1)

    return <Link href={href}>
        <a className='' style={{
            fontWeight:`${router === href && 600}`,
        }}>{name}</a>
    </Link>
}

const Nav = () => {
    const [showNav, setShowNav] = useState(false)
    let navList
    if(typeof(window) !== "undefined") {
        navList = document.querySelector('.navList')
    }
    const toggleNav = () =>{
        setShowNav(!showNav)  
    }

    useEffect(()=>{
        if(showNav) {
            navList.classList.remove('-top-full')
            navList.classList.add('top-20')
        }
        else {
            navList.classList.add('-top-full')
            navList.classList.remove('top-20')
        }
    }, [showNav])
  return (
    <div className='w-full flex items-center justify-end md:justify-center relative h-20 px-4 md:px-0 overflow-hidden sticky top-0 bg-white z-50'>
        <ul className={`navList w-full md:w-auto h-auto fixed left-0 -top-full md:top-0 bg-white md:relative md:inline-flex flex flex-col md:flex-row items-center md:space-x-12 mx-auto text-[#01575D] uppercase z-30 space-y-12 md:space-y-0 py-16 md:py-0 ${styles.navList}`}>
            <li className='hover:font-semibold'>
                <LinkComponent href="/" name="home"/>
            </li>
            <li className='hover:font-semibold'>
                <LinkComponent href="#ourStory" name="our story"/>
            </li>
            <li className='hover:font-semibold'>
                <LinkComponent href="#gallery" name="gallery"/>
            </li>
            <li className='hover:font-semibold'>
                <LinkComponent href="#rsvp" name="rsvp"/>
            </li>
            <li className='hover:font-semibold'>
                <LinkComponent href="#gifts" name="gifts"/>
            </li>
        </ul>

        {/* Burger */}
        <div className='flex flex-col items-center justify-between gap-2 h-auto w-8 md:hidden' onClick={toggleNav}>
            <div className='h-0.5 bg-[#01575D] w-full'></div>
            <div className='h-0.5 bg-[#01575D] w-full'></div>
            <div className='h-0.5 bg-[#01575D] w-full'></div>
        </div>
    </div>
  )
}

export default Nav
