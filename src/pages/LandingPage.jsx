import React from 'react'

const LandingPage = () => {
    return (
        <div className='flex lg:flex-row flex-col-reverse justify-evenly items-center m-10 lg:m-5'>
            <div className='space-y-3'>
                <img src="/assets/image.png" alt="mainImage" />
                <button type='button' className='m-auto block lg:hidden bg-gradient-to-r from-[#8456EC] to-[#E87BF8] px-12 py-3 rounded-lg'>
                    <img src="/assets/createMyEvent.png" alt="textImage" className='m-auto' />
                </button>
            </div>
            <div className='lg:space-y-8 space-y-5 flex flex-col lg:items-end items-center lg:justify-end justify-center'>
                <p className='text-[#240D57] lg:text-end text-center lg:text-6xl text-5xl font-bold'>
                    Imagine if <br />
                    <span className='text text-transparent bg-clip-text bg-gradient-to-r from-[#8456EC] to-[#E87BF8]'>
                        Snapchat
                    </span>
                    <br /> had events.
                </p>
                <p className=' text-[#4F4F4F] lg:text-end text-center lg:text-2xl text-sm'>
                    Easily host and share events with your friends <br /> accross any social media
                </p>
                <button type='button' className='lg:block hidden bg-gradient-to-r from-[#8456EC] to-[#E87BF8] px-10 py-3 rounded-lg'>
                    <img src="/assets/createMyEvent.png" alt="textImage" className='m-auto' />
                </button>
            </div>
        </div>
    )
}

export default LandingPage