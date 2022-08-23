import React, {useState, useEffect} from 'react'
import Link from 'next/link'
import styles from '../styles/Animations.module.css'
import { useRouter } from 'next/router'
import Logo from '../assets/navLogo.svg'
import Image from 'next/image'



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

    const LinkComponent = ({href, name}) =>{
        const router = useRouter().asPath.substring(1)
    
        const toggleNav = () =>{
            setShowNav(!showNav)
        }
    
        return <Link href={href}>
            <a onClick={toggleNav} className={`${router === href && 'font-semibold'}`}>{name}</a>
        </Link>
    }
    
  return (
    <div className='w-full flex items-center justify-between md:justify-center relative h-20 md:h-auto px-4 md:px-0 overflow-hidden sticky top-0 bg-white md:bg-[#FCF9F2] z-50'>
        <ul className={`navList w-full md:w-auto h-auto fixed left-0 -top-full md:top-0 bg-white md:bg-[#FCF9F2] md:relative md:inline-flex flex flex-col md:flex-row items-center md:space-x-12 mx-auto text-[#01575D] uppercase z-30 space-y-12 md:space-y-0 py-16 md:py-0 ${styles.navList}`}>
            <li className='hover:font-semibold'>
                <LinkComponent href="" name="home"/>
            </li>
            <li className='hover:font-semibold'>
                <LinkComponent href="#ourStory" name="our story"/>
            </li>
            {/* <li className='hover:font-semibold'>
                <LinkComponent href="#gallery" name="gallery"/>
            </li> */}
            <li className='hidden md:block'>
                <Image src={Logo} alt="sarah and Rhilaro logo"/>
            </li>
            <li className='hover:font-semibold'>
                <LinkComponent href="#rsvp" name="rsvp"/>
            </li>
            <li className='hover:font-semibold'>
                <LinkComponent href="#gifts" name="gifts"/>
            </li>
        </ul>

        <div className='w-full h-full flex items-center justify-between md:hidden z-50 relative bg-white'>
            <div className='w-16 h-auto '>
                <Image src={Logo} alt="sarah and Rhilaro logo"/>
            </div>

            <div className='flex flex-col items-center justify-between gap-2 h-auto w-8  relative z-50' onClick={toggleNav}>
                <div className='h-0.5 bg-[#01575D] w-full'></div>
                <div className='h-0.5 bg-[#01575D] w-full'></div>
                <div className='h-0.5 bg-[#01575D] w-full'></div>
            </div>
        </div>
    </div>
  )
}

export default Nav
