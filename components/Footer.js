import React from "react"
import Image from "next/image"
import Logo from '../assets/Logo.svg'

const Footer = () =>{
    return (
        <section>
            <section className="container mx-auto px-4 md:px-8 lg:px-10">
                <div className="py-16 relative text-center border-b-2 border-[#569A9F]">
                    <h2 className="font-bonvivant text-[150px]">Gift</h2>
                    <h3 className="font-bonvivant text-3xl">The Couples</h3>

                    <div className="w-16 h-16 rounded-full bg-[#ECC16A] absolute -bottom-8 left-0 right-0 mx-auto"></div>
                </div>

                <div className="flex flex-col items-center justify-center md:flex-row">
                    <div className="w-full md:w-auto p-4 xl:p-8">
                        <Image src={Logo} alt="Sarah and Rhilaso's logo" className="mx-auto"/>
                        <h2 className="font-bonvivant text-6xl text-center">TRhilsAffair’22</h2>
                    </div>
                    <div className="w-full flex flex-col">
                        <p>You can send in gifts in form of cash as well:</p>
                        <section className="inline-block border-t border-[#ECC16A]">
                            <h4>Account details</h4>
                            <p>2017250890</p>
                            <p>Sarah ishaku</p>
                            <p>Kuda Bank</p>
                        </section>

                        <section className="inline-block border-t border-[#ECC16A]">
                            <p>2004911294 </p>
                            <p>Silas Rhilaso Dokong</p>
                            <p>Kuda Bank</p>
                        </section>
                    </div>
                </div>

                
            </section>
        </section>
    )
}

export default Footer