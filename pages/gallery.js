import React, {useEffect, useState} from "react";
import Img from "../components/Image";

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

import Popup from "../components/imagePopup";

import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger)



const Gallery = () =>{
    const [currentImage, setCurrentImage] = useState(null)

    const showGallery = (e) =>{
        setCurrentImage(e.currentTarget.id)
    }

    useEffect(()=>{
        let images = document.querySelectorAll('.images')

        images.forEach(elem=>{
            const contents = elem.querySelectorAll('.imagesContent')
            gsap.set(contents, {scale:0.5})
            gsap.to(contents, {
                duration: 1.2,
                autoAlpha:1,
                scale: 1,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: elem,
                    start: "top bottom-=100",
                    end: "bottom top+=100",
                    toggleActions: "play reverse play reverse"
                }
  
            })
        })
    }, [])

    return (
        <div>
            <header className="text-center mt-5 space-y-2">
                <h4 className="text-2xl xl:text-4xl text-[#001516] font-bonvivant">A blessed union between</h4>
                <h1 className="text-6xl lg:text-8xl text-[#01686F] font-bonvivant">Sarah <br className="md:hidden"/>&amp; Rhilaso</h1>
            </header>
            <div className="grid grid-cols-11 gap-2 md:gap-4 lg:gap-6 container mx-auto md:px-8 lg:px-10 pb-10 mt-11">
                <div id={0} onClick={showGallery} className="col-span-4 h-full images">
                    <Img src={gallery1} className="h-full imagesContent"/>
                </div>
                <div id={1} onClick={showGallery} className="col-span-7 h-full images">
                    <Img src={gallery2} className="h-full imagesContent"/>
                </div>
                <div id={2} onClick={showGallery} className="col-span-7 h-full images">
                    <Img src={gallery3} className="h-full imagesContent"/>
                </div>
                <div id={3} onClick={showGallery} className="col-span-4 h-full images">
                    <Img src={gallery4} className="h-full imagesContent"/>
                </div>
                <div id={4} onClick={showGallery} className="col-span-4 h-full images">
                    <Img src={gallery5} className="h-full imagesContent"/>
                </div>
                <div id={5} onClick={showGallery} className="col-span-7 h-full images">
                    <Img src={gallery6} className="h-full imagesContent"/>
                </div>
                <div id={6} onClick={showGallery} className="col-span-7 h-full images">
                    <Img src={gallery7} className="h-full imagesContent"/>
                </div>
                <div id={7} onClick={showGallery} className="col-span-4 h-full images">
                    <Img src={gallery8} className="h-full imagesContent"/>
                </div>
                <div id={8} onClick={showGallery} className="col-span-4 h-full images">
                    <Img src={gallery9} className="h-full imagesContent"/>
                </div>
                <div id={9} onClick={showGallery} className="col-span-7 h-full images">
                    <Img src={gallery10} className="h-full imagesContent"/>
                </div>
                <div id={10} onClick={showGallery} className="col-span-7 h-full images">
                    <Img src={gallery11} className="h-full imagesContent"/>
                </div>
                <div id={11} onClick={showGallery} className="col-span-4 h-full images">
                    <Img src={gallery12} className="h-full imagesContent"/>
                </div>
            </div>

            {currentImage !== null && <Popup currentIndex={currentImage} setCurrentIndex={setCurrentImage}/>}
        </div>
    )
}

export default Gallery