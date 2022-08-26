import React, {useEffect, useState} from "react"
import styles from '../styles/Popup.module.css'
import animation from '../styles/Animations.module.css'
import Image from "next/image"

import gallery1 from '../public/gallery1.jpg'
import gallery2 from '../public/gallery2.jpg'
import gallery3 from '../public/gallery3.jpg'
import gallery4 from '../public/gallery4.jpg'
import gallery5 from '../public/gallery5.jpg'
import gallery6 from '../public/gallery6.jpg'
import gallery7 from '../public/gallery7.jpg'
import gallery8 from '../public/gallery8.jpg'
import gallery9 from '../public/gallery9.jpg'
import gallery10 from '../public/gallery10.jpg'
import gallery11 from '../public/gallery11.jpg'
import gallery12 from '../public/gallery12.jpg'

const images = [gallery1,gallery2,gallery3,gallery4,gallery5,gallery6,gallery7,gallery8,gallery9,gallery10,gallery11,gallery12]

const Popup = ({setShowGallery}) =>{
    const [currentIndex, setCurrentIndex] = useState(0)
    
    useEffect(()=>{
        if(typeof(window) !== 'undefined') {
            document.body.style.overflow = "hidden"
        }

        return ()=>{
            document.body.style.overflow = "scroll"
        }
    }, [currentIndex])

    const nextImage = ()=>{
        if(currentIndex < 11) {
            setCurrentIndex(prev=>prev + 1)
        }
    }

    const prevImage = () =>{
        if(currentIndex > 0) {
            setCurrentIndex(prev=>prev - 1)
        }
    }

    const closePopup = (e) =>{
        if(Array.from(e.target.classList).indexOf('popupCont') > -1) {
            setShowGallery(false)
        }
    }
    return (
        <div onClick={closePopup} className={`popupCont fixed h-screen w-full top-0 left-0 z-50 flex items-center justify-center ${styles.popup}`}>
            <div className={`w-11/12 md:w-10/12 lg:w-1/2 xl:w-1/3 h-5/6 mx-auto my-auto border-4 border-[#FFFFFF] rounded-lg relative ${animation.navList}`}>
                {/* <Image src={images[currentIndex]}/> */}
                <div className="w-full h-full image-container inline-block" style={{
                    backgroundImage:`url("${images[currentIndex].src}")`,
                    backgroundSize:'cover',
                    backgroundPosition:"center top"
                }}>

                </div>
                <div className="absolute top-0 bottom-0 my-auto flex items-center justify-between w-full h-16">
                    <p className={` text-white rounded-full w-10 h-10 flex items-center justify-center hover:bg-gray-600 ${styles.arrowBg}`} onClick={prevImage}>
                        <span className="flex items-center justify-center"><i className="ri-arrow-left-s-line ri-lg"></i></span>
                    </p>
                    <p className={` text-white rounded-full w-10 h-10 flex items-center justify-center hover:bg-gray-600 ${styles.arrowBg}`} onClick={nextImage}>
                        <span className="flex items-center justify-center"><i className="ri-arrow-right-s-line ri-lg"></i></span>
                    </p>
                </div>

                <div className="absolute  -top-12 right-0 md:-right-12 bg-white rounded-full w-8 h-8 text-black flex items-center justify-center" onClick={()=>setShowGallery(false)}>
                    <span className="flex items-center justify-center "><i className="ri-close-line"></i></span>
                </div>
            </div>
        </div>
    )
}

export default Popup