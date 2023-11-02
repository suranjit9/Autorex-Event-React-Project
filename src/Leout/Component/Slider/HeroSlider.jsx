import { AiOutlineArrowRight } from 'react-icons/ai'
import sign from '../../../assets/img/signature.png'

const HeroSlider = () => {

    return (
    <div className='relative'>
        <div className="hero md:justify-start min-h-screen " style={{ backgroundImage: 'url(https://i.ibb.co/XjTqGDv/image-7.jpg)' }}>
            <div className="  md:hero-content  text-black">
                <div className="max-w-md pl-7 ">
                    <h1 className="mb-5 text-5xl font-bold">Tuneup Your Car <br /> to Next Level</h1>
                    <p className="mb-5">We believe in providing top quality workmanship and are
                        <br />
                        so confident in our level of service that we back it up
                        <br />
                        with a good quality.</p>
                    <button className="btn text-white bg-red-600 hover:bg-red-400">Book a Schedule<span><AiOutlineArrowRight></AiOutlineArrowRight></span></button>
                </div>
            </div>
        </div>
        <div className='grid md:grid-cols-5 w-9/12 mx-auto shadow-2xl absolute -mt-16 ml-[13%]'>
            <div className='p-10 md:col-span-2 bg-red-600  md:p-24'>
                <h3 className='text-4xl font-semibold text-white'>
                15 Years of <br />
                undefeated <br />
                success
                </h3>
                <p className='text-sm text-justify text-gray-300'>We have a long and proud history givin emphasis to environment social and economic outcomes to deliver places that respond.</p>
            </div>
            <div className='p-10 md:col-span-3  md:pt-24 md:pl-10 md:pr-4 bg-white rounded-tr-[40px] mb-4'>
                <h2>Our History</h2>
                <h2 className='text-3xl font-medium'>We Give Quality Services & Passion with our services !</h2>
                <p className='text-sm text-justify md:mb-4'>Buildtrack is another infrastructure development major in India, based in Mumbai, Maharashtra. The company was established in 1980 and is headed by Vikas Oberoi. It has completed more than 36 projects in Mumbai covering close to 6.5 million square feet of area. Oberoi Realty provides residaential, office, retail, hospitality and social infrastructure spaces.</p>
                <img src={sign} alt="" />
            </div>
        </div>
        
    </div>
    );
};

export default HeroSlider;