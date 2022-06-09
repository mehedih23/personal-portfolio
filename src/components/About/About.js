import React from 'react'
import simple from '../../assets/simple.png'
import './About.css'


const About = () => {
    return (
        <div
            data-aos="fade-right"
            className="mockup-window bg-secondary my-4 max-h-fit md:h-[530px]"
        >
            <div
                className="px-4 bg-secondary max-h-fit md:h-[480px] my-8 overflow-auto"
            >
                <div className='text-center'>
                    <p className='text-accent mb-4'>My Intro</p>
                    <h1 className='text-white text-5xl'>About <span className='text-info'>Me</span></h1>
                    <div className="divider w-1/3 mx-auto" style={{ color: '#ff651c' }}></div>
                </div>
                <div className='flex flex-col md:flex-row md:items-center'>
                    <div
                        data-aos="fade-right"
                        data-aos-offset="300"
                        data-aos-easing="ease-in-sine"
                        data-aos-delay="300"
                        className='flex justify-center items-center'
                    >
                        <img src={simple} alt="simple" style={{ width: '340px', height: '340px' }} className='rounded-lg' />
                    </div>
                    <div className='mx-4'>
                        <h4 className='text-white text-xl mb-4 font-bold'>Who Am <span className='text-info'>I ?</span></h4>
                        <h1 className='text-white text-4xl mb-4'>I'm Mehedi, A <span className='text-info'>MERN Stack Developer</span></h1>
                        <p className='text-accent w-xs md:w-[600px]'>
                            A Curious, Passionate Jr. MERN Stack Developer. Love to take Dare and handle it professionally. Handle difficulties and errors efficient way. I'm a tech savvy. Try to keep myself with new technologies and learn that.
                        </p>
                    </div>
                </div>
                <div className='mb-20 mt-8'>
                    <div className='text-center'>
                        <p className='text-accent text-xl mb-4'>Which Technologies I know</p>
                        <h2 className='text-white text-4xl'>My <span className='text-info'>Skills</span></h2>
                        <div className="divider w-1/4 mx-auto" style={{ color: '#ff651c' }}></div>
                    </div>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 my-20'>
                        <div className='mx-auto w-28 h-28 border border-[#4db3f3] flex justify-center items-center rounded-lg'>
                            <img src="https://i.ibb.co/mSrQdyv/1.png" alt="skills" className='w-20 h-20' />
                        </div>
                        <div className='mx-auto w-28 h-28 border border-[#4db3f3] flex justify-center items-center  rounded-lg'>
                            <img src="https://i.ibb.co/DfyYVfx/2.png" alt="skills" className='w-20 h-20' />
                        </div>
                        <div className='mx-auto w-28 h-28 border border-[#4db3f3] flex justify-center items-center  rounded-lg'>
                            <img src="https://i.ibb.co/92dWSKq/3.png" alt="skills" className='w-20 h-20' />
                        </div>
                        <div className='mx-auto w-28 h-28 border border-[#4db3f3] flex justify-center items-center  rounded-lg'>
                            <img src="https://i.ibb.co/LxpxKgT/4.png" alt="skills" className='w-20 h-20' />
                        </div>
                        <div className='mx-auto w-28 h-28 border border-[#4db3f3] flex justify-center items-center  rounded-lg'>
                            <img src="https://i.ibb.co/gDVC9sj/5.png" alt="skills" className='w-20 h-20' />
                        </div>
                        <div className='mx-auto w-28 h-28 border border-[#4db3f3] flex justify-center items-center  rounded-lg'>
                            <img src="https://i.ibb.co/94M87Qb/6.png" alt="skills" className='w-20 h-20' />
                        </div>
                        <div className='mx-auto w-28 h-28 border border-[#4db3f3] flex justify-center items-center  rounded-lg'>
                            <img src="https://i.ibb.co/6gm2Fwh/7.png" alt="skills" className='w-20 h-20' />
                        </div>
                        <div className='mx-auto w-28 h-28 border border-[#4db3f3] flex justify-center items-center  rounded-lg'>
                            <img src=" https://i.ibb.co/nRMjsNV/8.png" alt="skills" className='w-20 h-20' />
                        </div>
                        <div className='mx-auto w-28 h-28 border border-[#4db3f3] flex justify-center items-center  rounded-lg'>
                            <img src="https://i.ibb.co/zZhbj4Z/9.png" alt="skills" className='w-20 h-20' />
                        </div>
                        <div className='mx-auto w-28 h-28 border border-[#4db3f3] flex justify-center items-center  rounded-lg'>
                            <img src=" https://i.ibb.co/4j48LtC/10.png" alt="skills" className='w-20 h-20' />
                        </div>
                        <div className='mx-auto w-28 h-28 border border-[#4db3f3] flex justify-center items-center  rounded-lg'>
                            <img src="https://i.ibb.co/qDMV3tV/11.png" alt="skills" className='w-20 h-20' />
                        </div>
                        <div className='mx-auto w-28 h-28 border border-[#4db3f3] flex justify-center items-center  rounded-lg'>
                            <img src="https://i.ibb.co/r7ZyQ9J/12.png" alt="skills" className='w-20 h-20' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About