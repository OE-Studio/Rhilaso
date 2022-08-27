import React, {useState, useEffect} from 'react'
import Link from 'next/link'
import styles from '../styles/Animations.module.css'
import { useRouter } from 'next/router'
import Logo2 from '../assets/Logo2.png'
import Image from 'next/image'



const Nav = () => {
    const [showNav, setShowNav] = useState(false)
    const [disable, setDisable] = useState(false)
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
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [showNav])

    const router = useRouter().asPath.substring(1)

    const LinkComponent = ({href, name, extendedClass}) =>{
        const toggleNav = () =>{
            setShowNav(!showNav)
        }
    
        return <Link href={href}>
            <a onClick={toggleNav} className={`${router === href && 'font-semibold'} ${extendedClass}`}>{name}</a>
        </Link>
    }

    useEffect(()=>{
        if(router.match('crew')){
            setDisable(true)
        }
        else {
            setDisable(false)
        }
    }, [router])
    
  return (
    <div className='w-full flex items-center justify-between md:justify-center relative h-20 md:h-auto px-4 md:px-0 overflow-hidden sticky top-0 bg-white md:bg-[#FCF9F2] z-50'>
        <ul className={`navList w-full md:w-auto h-auto fixed left-0 -top-full md:top-0 bg-white md:bg-[#FCF9F2] md:relative md:inline-flex flex flex-col md:flex-row items-center md:space-x-12 mx-auto text-[#01575D] uppercase z-30 space-y-12 md:space-y-0 py-16 md:py-0 ${styles.navList}`}>
            <li className='hover:font-semibold border-b-2 border-white md:border-[#FCF9F2] hover:border-[#01575D]'>
                <LinkComponent href="/" name="home" extendedClass={router === "" && 'font-semibold'}/>
            </li>
            <li>
                <LinkComponent href={disable ? "" : "#ourStory"} name="our story" 
                    extendedClass={`hover:font-semibold ${disable ? 'cursor-not-allowed hover:text-gray-400' : 'border-b-2 border-white md:border-[#FCF9F2] hover:border-[#01575D]'}`}/>
            </li>
            {/* <li className='hover:font-semibold'>
                <LinkComponent href="#gallery" name="gallery"/>
            </li> */}
            <li className='hidden md:block w-24 h-auto'>
                <Link href="/">
                    <Image src={Logo2} alt="sarah and Rhilaro logo"/>
                </Link>
            </li>

            <li>
                <LinkComponent href={disable ? "" : "#rsvp"} name="rsvp" 
                    extendedClass={`hover:font-semibold ${disable ? 'cursor-not-allowed hover:text-gray-400' : 'border-b-2 border-white md:border-[#FCF9F2] hover:border-[#01575D]'}`}/>
            </li>

            <li>
                <LinkComponent href={disable ? "" : "#gifts"} name="gifts" 
                    extendedClass={`hover:font-semibold ${disable ? 'cursor-not-allowed hover:text-gray-400' : 'border-b-2 border-white md:border-[#FCF9F2] hover:border-[#01575D]'}`}/>
            </li>
        </ul>

        <div className='w-full h-full flex items-center justify-between md:hidden z-50 relative bg-white'>
            <div className='w-16 h-auto '>
                <Image src={Logo2} alt="sarah and Rhilaro logo"/>
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
