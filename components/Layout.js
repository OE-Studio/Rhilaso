import Image from "next/image"
import Nav from "./Nav"
import Logo from '../assets/Logo.svg'
import HeroImg from '../assets/hero.png'
import Img from "./Image"
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
    return (
        <div>
            <Nav/>
            <div>
                <div className="relative flex items-center justify-center">
                    <Image src={Logo} width={300} height={300} className="" alt="Rhilaso and Sarah logo" priority/>
                </div>

                <header className="text-center mt-5 space-y-2">
                    <h4 className="text-4xl text-[#001516] font-bonvivant">A blessed union between</h4>
                    <h1 className="text-5xl lg:text-8xl text-[#01686F] font-bonvivant">Sarah & Rhilaso</h1>
                </header>

                <div className="w-full h-auto container px-4 lg:md:px-8 xl:px-10  mx-auto mt-16">
                    <Img src={HeroImg} alt="Rhilaso and Sarah holding each other"/>
                </div>
            </div>

            <main>
                {children}
            </main>

            <section className="">
                <section className="container mx-auto px-4 md:px-8 lg:px-10 py-20" id="gifts">
                    <div className="py-8 xl:py-16 relative text-center border-b-2 border-[#569A9F]">
                        <h2 className="font-bonvivant text-5xl xl:text-8xl">Gift</h2>
                        <h3 className="font-bonvivant text-2xl xl:text-3xl">The Couples</h3>

                        <div className="w-16 h-16 rounded-full bg-[#ECC16A] absolute -bottom-8 left-0 right-0 mx-auto"></div>
                    </div>

                    <div className="grid grid-cols-3 mt-12 xl:mt-24 gap-4">
                        <div className="col-span-3 md:col-span-1 p-4 xl:p-8 border border-[#569A9F]">
                            <div className=" flex flex-col items-center justify-center">
                                <Image src={Logo} alt="Sarah and Rhilaso's logo" className=""/>
                                <h2 className="font-bonvivant text-4xl md:text-3xl lg:text-4xl xl:text-6xl text-center">TRhilsAffair’22</h2>
                            </div>
                        </div>
                        <section className="col-span-3 md:col-span-2 bg-[#01575D] p-10 md:p-0 md:pl-10 text-white md:h-full md:flex flex-col items-start justify-center text-2xl">
                            <p className="text-[#ECC16A] text-xl">You can send in gifts in form of cash as well:</p>
                            <section className="w-auto mt-6 md:mt-3 lg:mt-6 text-base">
                                <div className="inline-block border-t border-[#ECC16A] py-6 md:py-3 lg:py-6">
                                    <h4 className="font-semibold">Account details</h4>
                                    <p>2017250890</p>
                                    <p>Sarah ishaku</p>
                                    <p>Kuda Bank</p>
                                </div>
                            </section>

                            <section className="w-auto text-base">
                                <div className="inline-block border-t border-[#ECC16A] py-6 md:py-3 lg:py-6">
                                    <p>2004911294 </p>
                                    <p>Silas Rhilaso Dokong</p>
                                    <p>Kuda Bank</p>
                                </div>
                            </section>
                        </section>
                    </div>
                </section>
                <footer className="py-24 text-center bg-[#013438] space-y-10" id="rsvp">
                    <div>
                        <h4 className="font-bonvivant text-3xl text-[#ECC16A]">RSVP</h4>
                        <div className="flex inline-flex gap-2 text-white mt-6 xl:text-2xl">
                            <div className="px-2 md:px-6 py-2 bg-[#01454A]">+234 806 310 8075</div>
                            <div className="px-2 md:px-6 py-2 bg-[#01454A]">+234 805 543 1685</div>
                        </div>
                    </div>

                    <div>
                        <h4 className="font-bonvivant text-3xl text-[#ECC16A]">Wedding Address</h4>
                        <div className="flex inline-flex gap-2 text-white mt-6 text-2xl">
                            <div className="px-6 py-2 bg-[#01454A]">ECWA Goodnews church Diko,Niger state</div>
                        </div>
                    </div>

                    <div className="w-auto flex text-white gap-6 mx-auto inline-flex px-4 md:px-0">
                        {colours.map(c=>{
                            return (
                                <div key={c.color} className="w-auto lg:w-24">
                                    <div className={`${c.color} w-16 h-16 lg:w-24 lg:h-24 rounded-full mx-auto`}></div>
                                    <p>{c.name}</p>
                                </div>
                            )
                        })}
                    </div>

                    <div className="h-20 flex items-center justify-center bg-[#002325] text-white tracking-[5px] lg:tracking-[20px] text-2xl uppercase">
                        #TRhilSAffair"22
                    </div>
                </footer>
            </section>
        </div>
    )
}

export default Layout