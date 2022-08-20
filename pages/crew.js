import train1 from '../assets/train1.jpg'
import train2 from '../assets/train2.jpg'
import train3 from '../assets/train3.jpg'
import train4 from '../assets/train4.jpg'
import train5 from '../assets/train5.jpg'
import train6 from '../assets/train6.jpg'
import men1 from '../assets/men1.jpg'
import men2 from '../assets/men2.jpg'
import men3 from '../assets/men3.jpg'
import men4 from '../assets/men4.jpg'
import men5 from '../assets/men5.jpg'
import men6 from '../assets/men6.jpg'
import Img from '../components/Image'

const trains = [
    {
      image:train1,
      text:"Sylvia Ishaku",
    },
    {
      image:train2,
      text:"Hajara Musa",
    },
    {
      image:train3,
      text:"Jessica Zephaniah",
    },
    {
        image:train4,
        text:"Josephine Kasimi",
    },
    {
        image:train5,
        text:"Karen Victor",
    },
    {
        image:train6,
        text:"Lisa Kasimi",
    },
]

const men = [
    {
      image:men1,
      text:"Emmanuel Akanya",
    },
    {
      image:men2,
      text:"David Narai",
    },
    {
      image:men3,
      text:"Emmanuel Amedu",
    },
    {
        image:men4,
        text:"Genesis Paul",
    },
    {
        image:men5,
        text:"Mark Anthony",
    },
    {
        image:men6,
        text:"Olufemi Bode-Badaki",
    },
]

const Crew = () =>{
    return (
        <section className="container mx-auto px-4 md:px-8 xl:px-10">
            <div className="py-16 relative text-center border-b-2 border-[#569A9F] ">
                <h3 className="font-bonvivant text-3xl">Meet the</h3>
                <h2 className="font-bonvivant text-8xl text-[#01686F]">Crew</h2>

                <div className="w-16 h-16 rounded-full bg-[#ECC16A] absolute -bottom-8 left-0 right-0 mx-auto"></div>
            </div>

            {/* Bridal trains */}
            <div className='mt-10 lg:mt-20'>
                <h3 className="w-full bg-[#2B8187] text-center py-4 text-white font-bonvivant text-4xl">Bridal Train</h3>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-2 mt-12'>
                    {trains.map(a=>{
                        return (
                        <div key={a.text}>
                            <Img src={a.image} alt="Sarah and Rhilaso"/>
                            <div className='py-6 text-center bg-[#CCE1E2] font-bonvivant text-2xl'>{a.text}</div>
                        </div>
                        )
                    })}
                </div>
            </div>
            
            {/* groom men */}
            <div className='mt-20'>
                <h3 className="w-full bg-[#F1D08F] text-center py-4 text-[#2D2006] font-bonvivant text-4xl">Groom’s Men</h3>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-2 mt-12'>
                    {men.map(a=>{
                        return (
                        <div key={a.text}>
                            <Img src={a.image} alt="Sarah and Rhilaso"/>
                            <div className='py-6 text-center bg-[#CCE1E2] font-bonvivant text-2xl'>{a.text}</div>
                        </div>
                        )
                    })}
                </div>
            </div>

            {/* little b and p */}
            {/* <div className='mt-20'>
                <h3 className="w-full bg-[#2B8187] text-center py-4 text-white font-bonvivant text-4xl">Little Brides & Page boys</h3>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-2 mt-12'>
                    {men.map(a=>{
                        return (
                        <div key={a.text}>
                            <Img src={a.image} alt="Sarah and Rhilaso"/>
                            <div className='py-6 text-center bg-[#CCE1E2] font-bonvivant text-2xl'>{a.text}</div>
                        </div>
                        )
                    })}
                </div>
            </div> */}
        </section>
    )
}

export default Crew