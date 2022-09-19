import Image from "next/image"
import React from "react"

const Img = ({src, alt, className}) =>{

    return (
        <div className={`relative w-full overflow-hidden p-0 text-[0px] ${className}`}>
            <Image src={src} alt={alt} className={`mx-auto p-0`}/>
        </div>
    )
}

export default Img