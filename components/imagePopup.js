import React, {useEffect} from "react"
import styles from '../styles/Popup.module.css'
import animation from '../styles/Animations.module.css'
import Image from "next/image"

import gallery1 from '../assets/gallery1.webp'
import gallery2 from '../assets/gallery2.webp'
import gallery3 from '../assets/gallery3.webp'
import gallery4 from '../assets/gallery4.webp'
import gallery5 from '../assets/gallery5.webp'
import gallery6 from '../assets/gallery6.webp'
import gallery7 from '../assets/gallery7.webp'
import gallery8 from '../assets/gallery8.webp'
import gallery9 from '../assets/gallery9.webp'
import gallery10 from '../assets/gallery10.webp'
import gallery11 from '../assets/gallery11.webp'
import gallery12 from '../assets/gallery12.webp'

const images = [gallery1,gallery2,gallery3,gallery4,gallery5,gallery6,gallery7,gallery8,gallery9,gallery10,gallery11,gallery12]

const Popup = ({currentIndex, setCurrentIndex}) =>{
    // const [currentIndex, setCurrentIndex] = useState(0)
    
    useEffect(()=>{
        if(typeof(window) !== 'undefined') {
            document.body.style.overflow = "hidden"
        }

        return ()=>{
            document.body.style.overflow = "scroll"
        }
    }, [currentIndex])

    useEffect(()=>{
        console.log(currentIndex);
    }, [currentIndex])

    const nextImage = ()=>{
        if(currentIndex < 11) {
            setCurrentIndex(prev=>Number(prev) + 1)
        }
    }

    const prevImage = () =>{
        if(currentIndex > 0) {
            setCurrentIndex(prev=>Number(prev) - 1)
        }
    }

    const closePopup = (e) =>{
        if(Array.from(e.target.classList).indexOf('popupCont') > -1) {
            // setShowGallery(false)
            setCurrentIndex(null)
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

            <div className={`w-11/12 md:w-10/12 lg:w-2/3 xl:w-1/3 mx-auto my-auto border-4 border-[#FFFFFF] rounded-lg relative ${animation.navList}`}>
                <div className={`w-auto h-auto text-[0px] rounded ${animation.navList}`}>
                    <Image alt="couple" className="rounded" src={images[currentIndex]}/>
                </div>
                

                <div className="absolute  -top-12 right-0 md:-right-12 bg-white rounded-full w-8 h-8 text-black flex items-center justify-center" onClick={()=>setCurrentIndex(null)}>
                    <span className="flex items-center justify-center "><i className="ri-close-line"></i></span>
                </div>
            </div>
        </div>
    )
}

export default Popup