import React from 'react'
import simple from '../../assets/simple.png'
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { BsFacebook } from 'react-icons/bs';
import CV from '../../assets/cv.pdf'
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div
            data-aos="flip-up"
            className="mockup-window bg-secondary my-4 max-h-fit md:h-[530px]">
            <div
                className="px-4 bg-secondary max-h-fit md:h-[480px] my-8"
            >
                <div
                    className='w-full flex flex-col md:flex-row md:justify-center md:items-center'
                >
                    <div
                        data-aos="fade-right"
                        data-aos-offset="300"
                        data-aos-easing="ease-in-sine"
                        data-aos-delay="300"
                        className='md:w-1/2 flex justify-center items-center'
                    >
                        <img src={simple} alt="simple" style={{ width: '340px', height: '340px' }} />
                    </div>
                    <div className='md:w-1/2 text-center'>
                        <span className='text-accent my-2'>Get To Know Me</span>
                        <h1 className='text-4xl text-white mb-[-5px]'>Mehedi Hassan Barat</h1>
                        <div className="divider w-1/2 mx-auto" style={{ color: '#ff651c' }}></div>
                        <h3 className='text-xl my-[-10px] text-info font-bold'>Web Developer</h3>
                        <div
                            data-aos="fade-up"
                            data-aos-delay="500"
                            className='max-w-xs mx-auto flex justify-between items-center p-2 my-6'
                        >
                            <a
                                href="https://github.com/mehedih23"
                                target={`_blank`}
                                className='text-accent hover:text-info ease-in duration-300'>
                                <FaGithub style={{ fontSize: '40px' }} />
                            </a>
                            <a
                                href="https://www.facebook.com/mehedi4h/"
                                target={`_blank`}
                                className='text-accent hover:text-info ease-in duration-300'
                            >
                                <BsFacebook style={{ fontSize: '40px' }} />
                            </a>
                            <a
                                href="https://www.linkedin.com/in/mehedi02/"
                                target={`_blank`}
                                className='text-accent hover:text-info ease-in duration-300'
                            >
                                <FaLinkedin style={{ fontSize: '40px' }} />
                            </a>
                        </div>
                        <p
                            data-aos="fade-up"
                            data-aos-delay="800"
                            className='text-accent'
                        >
                            I am a web developer and i have been building noteworthy UX/UI designs and websites for years, which comply with the latest design trends. I help convert a vision and an idea into meaningful and useful products. Having a sharp eye for product evolution helps me prioritize tasks, iterate fast and deliver faster.
                        </p>
                        <div className='mt-6'>
                            <a
                                href={CV}
                                download
                                data-aos="zoom-in"
                                data-aos-delay="1000"
                            >
                                <button
                                    className='btn border border-[#ff651c] text-white btn-outline hover:bg-[#ff651c] mr-2'
                                >Download Resume</button>
                            </a>
                            <Link
                                to='/contact'
                                data-aos="zoom-in"
                                data-aos-delay="1200"
                            >
                                <button
                                    className='btn bg-[#ff651c] border-[#ff651c] text-white hover:bg-[#ff651c] hover:border-[#ff651c] ml-2'
                                >Let's Talk</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home