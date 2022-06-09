import React from 'react'

const Portfolio = () => {
    return (
        <div
            className="mockup-window bg-secondary my-4 max-h-fit md:h-[530px]"
            data-aos="fade-up"
        >
            <div class="px-4 bg-secondary max-h-fit md:h-[480px] my-8 overflow-auto">
                <div>
                    <h3 className='text-[#ff651c] text-center text-3xl'>Recent Project's I Have Done</h3>
                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-10 mt-8'>
                        <div
                            data-aos="fade-right"
                            data-aos-delay="300"
                            className='mx-auto p-4 hover:bg-[#111111] bg-transparent border border-[#ff651c] mb-8 rounded-lg'>
                            <img src="https://i.ibb.co/TmSLhnp/Capture.png" alt='projects' />
                            <div className='text-white my-4'>
                                <h3 className='text-2xl text-center text-[#ff651c] my-2'>ElectriX</h3>
                            </div>
                            <div className='mt-4 text-center'>
                                <a href="https://github.com/mehedih23/electrix-client">
                                    <button className='btn border border-[#ff651c] text-[#ff651c] btn-outline hover:bg-[#ff651c] hover:text-white mr-2'>Github</button>
                                </a>
                                <a href="https://electrix-f01c8.web.app/">
                                    <button className='btn bg-[#ff651c] text-white hover:bg-[#ff651c] ml-2'>Preview</button>
                                </a>
                            </div>
                        </div>
                        <div
                            data-aos="fade-left"
                            data-aos-delay="300"
                            className='mx-auto p-4 hover:bg-[#111111] border border-[#ff651c] mb-8 rounded-lg bg-transparent'>
                            <img src="https://i.ibb.co/gV8BGfg/Screenshot-2022-05-25-224504.png" alt='projects' />
                            <div className='text-white my-4'>
                                <h3 className='text-2xl text-center text-[#ff651c] my-2'>Pocket Gadget</h3>
                            </div>
                            <div className='mt-4 text-center'>
                                <a href="https://github.com/mehedih23/pocket-gadget-client">
                                    <button className='btn border border-[#ff651c] text-[#ff651c] btn-outline hover:bg-[#ff651c] hover:text-white mr-2'>Github</button>
                                </a>
                                <a href="https://pocket-gadget.web.app/">
                                    <button className='btn bg-[#ff651c] text-white hover:bg-[#ff651c] ml-2'>Preview</button>
                                </a>
                            </div>
                        </div>
                        <div
                            className='mx-auto p-4 hover:bg-[#111111] border border-[#ff651c] mb-8 rounded-lg bg-transparent'>
                            <img src="https://i.ibb.co/dgstbyz/Screenshot-2022-05-25-224320.png" alt='projects' />
                            <div className='text-white my-4'>
                                <h3 className='text-2xl text-center text-[#ff651c] my-2'>Muscle Maniacs</h3>
                            </div>
                            <div className='mt-4 text-center'>
                                <a href="https://github.com/mehedih23/muscle-maniacs">
                                    <button className='btn border border-[#ff651c] text-[#ff651c] btn-outline hover:bg-[#ff651c] hover:text-white mr-2'>Github</button>
                                </a>
                                <a href="https://muscle-maniacs.firebaseapp.com/">
                                    <button className='btn bg-[#ff651c] text-white hover:bg-[#ff651c] ml-2'>Preview</button>
                                </a>
                            </div>
                        </div>
                        <div
                            className='mx-auto p-4 hover:bg-[#111111] border border-[#ff651c] mb-8 rounded-lg bg-transparent'>
                            <img src="https://i.ibb.co/51CWRrp/Screenshot-2022-05-25-224127.png" alt="project" />
                            <div className='text-white my-4'>
                                <h3 className='text-2xl text-center text-[#ff651c] my-2'>Review Studio</h3>
                            </div>
                            <div className='mt-4 text-center'>
                                <a href="https://github.com/mehedih23/review-studio">
                                    <button className='btn border border-[#ff651c] text-[#ff651c] btn-outline hover:bg-[#ff651c] hover:text-white mr-2'>Github</button>
                                </a>
                                <a href="https://review-studio.netlify.app/">
                                    <button className='btn bg-[#ff651c] text-white hover:bg-[#ff651c] ml-2'>Preview</button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Portfolio