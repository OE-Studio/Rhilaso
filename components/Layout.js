import React, {useEffect, useState} from "react"
import Image from "next/image"
import Nav from "./Nav"
import footer1 from '../assets/footer1.webp'
import footer2 from '../assets/footer2.webp'
import Img from "./Image"
import smallArrow from '../assets/smallArrow.svg'
import { useRouter } from "next/router"

import Head from "next/head"
// import Footer from "./footer"

const colours = [
    {
        name:"Emerald Green",
        color:"bg-[#01686F]"
    },
    {
        name:"Mustard yellow",
        color:"bg-[#E3A220]"
    },
    {
        name:"Champaigne Gold",
        color:"bg-[#EFE2BD]"
    },
    {
        name:"White",
        color:"bg-[#FFFFFF]"
    },
]

const Layout = ({children}) =>{
    const [success, setSuccess] = useState(false)
    const copyToClipboard = (e) =>{
        navigator.clipboard.writeText(e.target.textContent)
        setSuccess(true)
        setTimeout(()=>{
            setSuccess(false)
        }, 5000)
    }

    const router = useRouter().asPath
    useEffect(()=>{ 
        
    }, [router])

    return (
        <div>
            <Head>
                <title>Rhilaso and Sarah</title>
                <meta name="description" content="Details of the wedding of Rhilso and Sarah"/>
            </Head>
            <Nav/>
            

            <main>
                {children}
            </main>

            {router !== "/gallery" && <div className="grid grid-cols-1 md:grid-cols-2 gap-6 container mx-auto px-4 md:px-8 lg:px-10 pb-10">
                <Img src={footer1}/>
                <Img src={footer2}/>
            </div>}

            <section className="mt-10">
                <section className="container mx-auto md:px-8 lg:px-10 pb-10" id="gifts">
                    <div className="pb-8 relative text-center border-b-2 border-[#569A9F]">
                        <h2 className="font-bonvivant text-4xl xl:text-7xl text-[#01686F] font-bold">Gift the couple</h2>
                        {/* <h3 className="font-bonvivant text-2xl xl:text-3xl">The Couple</h3> */}

                        <div className="w-16 h-16 rounded-full bg-[#ECC16A] absolute -bottom-8 left-0 right-0 mx-auto"></div>
                    </div>

                    <div className="grid grid-cols-2 mt-12 xl:mt-24 gap-4">
                        <div className="col-span-2 md:col-span-1 p-4 xl:p-8 flex items-center justify-start md:justify-center">
                            <div className=" flex flex-col items-start justify-center">
                                <h2 className="font-bonvivant text-xl lg:text-2xl xl:text-3xl text-left">
                                    You can send in gifts in <br className="k"/>form of cash as well:
                                </h2>
                                <Image src={smallArrow} alt="" className="mt-4"/>
                            </div>
                        </div>
                        <section className="col-span-2 md:col-span-1 p-4  text-[#001516] md:h-full md:flex flex-col items-start justify-start md:justify-center font-bonvivant text-xl lg:text-2xl">
                            <p className="bg-[#01686F] md:bg-[#CCE1E2] text-[#FCF9F2] md:text-[#001516] py-2 px-12 inline-block">Account details</p>
                            <section className="w-auto mt-6 md:mt-3 lg:mt-6">
                                <div className="inline-block py-6 md:py-3 lg:py-6">
                                    <p onClick={copyToClipboard} className="cursor-pointer hover:text-[#ECC16A] inline-flex font-medium">2017250890</p>
                                    <p className="inline-flex">&nbsp; - Sarah ishaku</p>
                                    <p>Kuda Bank</p>
                                </div>
                            </section>

                            <section className="w-auto">
                                <div className="inline-block py-6 md:py-3 lg:py-6">
                                    <p onClick={copyToClipboard} className="cursor-pointer hover:text-[#ECC16A] inline-flex font-medium">2004911294 </p>
                                    <p className="inline-flex">&nbsp; - Silas Rhilaso Dokong</p>
                                    <p>Kuda Bank</p>
                                </div>
                            </section>
                        </section>
                    </div>
                </section>
                <footer className="py-24 text-center bg-[#013438] space-y-10" id="rsvp">
                    <div className="flex flex-col md:flex-row items-center gap-6 justify-center">
                        <h4 className="font-bonvivant text-3xl text-[#ECC16A] ">Wedding Address</h4>
                        <div className="flex inline-flex gap-2 text-white xl:text-2xl">
                            <div className="px-6 py-2 bg-[#01454A]">ECWA Goodnews Church Diko,Niger state</div>
                        </div>
                    </div>

                    <div className="flex flex-col md:flex-row items-center gap-6 justify-center">
                        <h4 className="font-bonvivant text-3xl text-[#ECC16A]">RSVP</h4>
                        <div className="flex inline-flex gap-2 text-white text-xs sm:text-base xl:text-2xl">
                            <a className="px-2 md:px-6 py-2 bg-[#01454A]" href="tel:+234 806 310 8075">+234 806 310 8075</a>
                            <a className="px-2 md:px-6 py-2 bg-[#01454A]" href="tel:+234 805 543 1685">+234 805 543 1685</a>
                        </div>
                    </div>

                    

                    <div className="w-auto flex text-white gap-2 sm:gap-4 md:gap-6 mx-auto inline-flex px-4 md:px-0">
                        {colours.map(c=>{
                            return (
                                <div key={c.color} className="w-14 lg:w-24 flex flex-col items-center">
                                    <div className={`${c.color} w-12 h-12 lg:w-24 lg:h-24 rounded-full mx-auto`}></div>
                                    <p className="text-xs md:text-base">{c.name}</p>
                                </div>
                            )
                        })}
                    </div>

                    <div className="h-20 flex items-center justify-center bg-[#002325] text-white tracking-[10px] md:tracking-[20px] text-xs md:text-2xl uppercase">
                        #TRhilSAffair&acute;22
                    </div>
                </footer>
            </section>

            {/* Account number copy */}
            {success && <div className="fixed bottom-4 right-4 bg-green-50 text-green-600 py-2 px-2 border-l-4 border-green-600">
                Account number was copied successfully
            </div>}
        </div>
    )
}

export default Layout