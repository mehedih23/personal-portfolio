import React from 'react'
import coming from '../../assets/coming-soon.png'

const Blog = () => {
    return (
        <div
            data-aos="fade-left"
            className="mockup-window bg-secondary my-4 max-h-fit md:h-[530px]"
        >
            <div
                className="px-4 bg-secondary max-h-fit md:h-[480px] my-8 overflow-auto flex justify-center items-center"
            >
                <img src={coming} alt="coming soon" />
            </div>
        </div>
    )
}

export default Blog