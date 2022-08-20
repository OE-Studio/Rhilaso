import Image from "next/image"
import React, {useState} from "react"
import styles from '../styles/Image.module.css'

const Img = ({src, alt}) =>{
    const [show, setShow] = useState(false)
    
    const mouseOver = () =>{
        setShow(true)
    }

    const mouseLeave = () =>{
        setShow(false)
    }

    return (
        <div className={`relative w-full overflow-hidden p-0 text-[0px]`} onMouseOver={mouseOver} onMouseLeave={mouseLeave}>
            <Image src={src} alt={alt} className={`mx-auto ${!show && 'grayscale'} p-0`}/>
            <div className={`${styles.imgOverlay} absolute left-0 w-full h-full backdrop-opacity-40 backdrop-grayscale bg-white/10 grayscale ${show ? '-top-full' : 'top-0'}`}></div>
        </div>
    )
}

export default Img