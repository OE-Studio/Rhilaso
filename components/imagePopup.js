import React, {useEffect, useState} from "react"
import styles from '../styles/Popup.module.css'
import animation from '../styles/Animations.module.css'
import Image from "next/image"

import gallery1 from '../public/gallery1-min.png'
import gallery2 from '../public/gallery2-min.png'
import gallery3 from '../public/gallery3-min.png'
import gallery4 from '../public/gallery4-min.png'
import gallery5 from '../public/gallery5-min.png'
import gallery6 from '../public/gallery6-min.png'
import gallery7 from '../public/gallery7-min.png'
import gallery8 from '../public/gallery8-min.png'
import gallery9 from '../public/gallery9-min.png'
import gallery10 from '../public/gallery10-min.png'
import gallery11 from '../public/gallery11-min.png'
import gallery12 from '../public/gallery12-min.png'

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
        <div onClick={closePopup} className={`popupCont fixed h-screen w-full top-0 left-0 z-50 flex items-center justify-center px-4 md:px-0 ${styles.popup}`}>
            <div className="absolute top-0 bottom-0 my-auto flex items-center justify-between w-full md:w-11/12 lg:w-10/12 h-16 z-50">
                <p className={` text-white rounded-full w-10 h-10 flex items-center justify-center hover:bg-gray-600 ${styles.arrowBg}`} onClick={prevImage}>
                    <span className="flex items-center justify-center"><i className="ri-arrow-left-s-line ri-lg"></i></span>
                </p>
                <p className={` text-white rounded-full w-10 h-10 flex items-center justify-center hover:bg-gray-600 ${styles.arrowBg}`} onClick={nextImage}>
                    <span className="flex items-center justify-center"><i className="ri-arrow-right-s-line ri-lg"></i></span>
                </p>
            </div>

            <div className={`w-auto mx-auto my-auto border-4 border-[#FFFFFF] rounded-lg relative ${animation.navList}`}>
                <div className={`w-auto h-auto text-[0px] ${animation.navList}`}>
                    <Image src={images[currentIndex]}/>
                </div>
                {/* <div className="w-full h-full image-container inline-block" style={{
                    backgroundImage:`url("${images[currentIndex].src}")`,
                    backgroundSize:'cover',
                    backgroundPosition:"center top"
                }}>

                </div> */}
                

                <div className="absolute  -top-12 right-0 md:-right-12 bg-white rounded-full w-8 h-8 text-black flex items-center justify-center" onClick={()=>setShowGallery(false)}>
                    <span className="flex items-center justify-center "><i className="ri-close-line"></i></span>
                </div>
            </div>
        </div>
    )
}

export default Popup