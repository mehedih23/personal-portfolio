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
                            <img src='https://i.ibb.co/TmSLhnp/Capture.png' alt='projects' />
                            <div className='text-black my-4'>
                                <h3 className='text-2xl text-center text-[#ff651c] my-2'>ElectriX</h3>
                            </div>
                            <div className='mt-4 text-white'>
                                <h3 className='text-xl'><b>ElectriX</b> is a manufacturer website with different type of tools.</h3>
                                <p>
                                    1.  For a beautiful user interface used ReactJS.
                                    <br />
                                    2.  Utilized NodeJS to create the REST API and implemented to load the services in the home page.
                                    <br />
                                    3.  Implemented stripe payment to complete the payment of the selected service.
                                    <br />
                                    4.  Applied a dashboard for users where he/she can see the orders and give a review.
                                    <br />
                                    5.  Applied a dashboard for super admin who can add and manage services, Make another admin with an email address.
                                </p>
                                <p className='my-3'><b>Technologies :</b> JavaScript (ES6), ReactJS, Tailwind, Firebase, NodeJS, Express,MongoDB, Stripe</p>
                            </div>
                            <div className='mt-4 text-center'>
                                <a href="https://github.com/mehedih23/electrix-client">
                                    <button className='btn btn-sm border border-[#ff651c] text-[#ff651c] btn-outline hover:bg-[#ff651c] hover:text-black mr-2'>Client</button>
                                </a>
                                <a href="https://github.com/mehedih23/electrix-server">
                                    <button className='btn btn-sm border border-[#ff651c] text-[#ff651c] btn-outline hover:bg-[#ff651c] hover:text-black mx-2'>Server</button>
                                </a>
                                <a href="https://electrix-f01c8.web.app/">
                                    <button className='btn btn-sm bg-[#ff651c] text-black hover:bg-[#ff651c] ml-2'>Preview</button>
                                </a>
                            </div>
                        </div>

                        <div
                            data-aos="fade-left"
                            data-aos-delay="300"
                            className='mx-auto p-4 hover:bg-[#111111] border border-[#ff651c] mb-8 rounded-lg bg-transparent'>
                            <img src="https://i.ibb.co/gV8BGfg/Screenshot-2022-05-25-224504.png" alt='projects' />
                            <div className='text-black my-4'>
                                <h3 className='text-2xl text-center text-[#ff651c] my-2'>Pocket Gadget</h3>
                            </div>
                            <div className='mt-4 text-white'>
                                <h3 className='text-xl'><b>Pocket Gadget</b> is a warehouse management website with different kind of products.</h3>
                                <p>
                                    1.  Implemented a beautiful user interface with ReactJS.
                                    <br />
                                    2.  Utilized NodeJS to create the REST API and implemented to load the products in the home page.
                                    <br />
                                    3.  Implemented an authentication feature using firebase to checkout the selected product.
                                    <br />
                                    4.  Admin can manage a branch of products.
                                    <br />
                                    5.  Admin can update & remove products.
                                </p>
                                <p className='my-3'><b>Technologies :</b> JavaScript (ES6), ReactJS, Tailwind, Firebase, NodeJS, Express,MongoDB</p>
                            </div>
                            <div className='mt-4 text-center '>
                                <a href="https://github.com/mehedih23/pocket-gadget-client">
                                    <button className='btn btn-sm border border-[#ff651c] text-[#ff651c] btn-outline hover:bg-[#ff651c] hover:text-black mr-2'>Client</button>
                                </a>
                                <a href="https://github.com/mehedih23/pocket-gadget-server">
                                    <button className='btn btn-sm border border-[#ff651c] text-[#ff651c] btn-outline hover:bg-[#ff651c] hover:text-black mx-2'>Server</button>
                                </a>
                                <a href="https://pocket-gadget.web.app/">
                                    <button className='btn btn-sm bg-[#ff651c] text-black hover:bg-[#ff651c] ml-2'>Preview</button>
                                </a>
                            </div>
                        </div>
                        <div
                            className='mx-auto p-4 hover:bg-[#111111] border border-[#ff651c] mb-8 rounded-lg bg-transparent'>
                            <img src="https://i.ibb.co/dgstbyz/Screenshot-2022-05-25-224320.png" alt='projects' />
                            <div className='text-black my-4'>
                                <h3 className='text-2xl text-center text-[#ff651c] my-2'>Muscle Maniacs</h3>
                            </div>
                            <div className='mt-4 text-white'>
                                <h3 className='text-xl'><b>Muscle Maniacs</b> is a website where you can buy a service or a product.</h3>
                                <p>
                                    1.   Implemented fake JSON data to load the services & products.
                                    <br />
                                    2.  Applied an email-password and google authentication system.
                                    <br />
                                    3.  Applied validation system for email and password.
                                    <br />
                                    4.  Implemented a destination page to see the available products.
                                </p>
                                <p className='my-3'><b>Technologies :</b> JavaScript (ES6), ReactJS, Tailwind, Firebase</p>
                            </div>
                            <div className='mt-4 text-center'>
                                <a href="https://github.com/mehedih23/muscle-maniacs">
                                    <button className='btn btn-sm border border-[#ff651c] text-[#ff651c] btn-outline hover:bg-[#ff651c] hover:text-black mr-2'>Client</button>
                                </a>
                                <a href="https://muscle-maniacs.firebaseapp.com/">
                                    <button className='btn btn-sm bg-[#ff651c] text-black hover:bg-[#ff651c] ml-2'>Preview</button>
                                </a>
                            </div>
                        </div>
                        <div
                            className='mx-auto p-4 hover:bg-[#111111] border border-[#ff651c] mb-8 rounded-lg bg-transparent'>
                            <img src="https://i.ibb.co/51CWRrp/Screenshot-2022-05-25-224127.png" alt="project" />
                            <div className='text-black my-4'>
                                <h3 className='text-2xl text-center text-[#ff651c] my-2'>Review Studio</h3>
                            </div>
                            <div className='mt-4 text-white'>
                                <h3 className='text-xl'><b>Review Studio</b> is dedicated to reading and reviewing books for both children and adults.</h3>
                                <p>
                                    1.   For a beautiful user interface used ReactJS.
                                    <br />
                                    2.  Implemented fake JSON data to load the books & reviews.
                                    <br />
                                    3.  Implemented a destination page to see the sales & revenue.
                                </p>
                                <p className='my-3'><b>Technologies :</b> JavaScript (ES6), ReactJS, Tailwind</p>
                            </div>
                            <div className='mt-4 text-center'>
                                <a href="https://github.com/mehedih23/review-studio">
                                    <button className='btn btn-sm border border-[#ff651c] text-[#ff651c] btn-outline hover:bg-[#ff651c] hover:text-black mr-2'>Client</button>
                                </a>
                                <a href="https://review-studio.netlify.app/">
                                    <button className='btn btn-sm bg-[#ff651c] text-black hover:bg-[#ff651c] ml-2'>Preview</button>
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