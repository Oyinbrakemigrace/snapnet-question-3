import React from 'react'
import { FaGreaterThan, FaHandshake, FaLink } from 'react-icons/fa'
import { FaCalendarDays } from 'react-icons/fa6'
import { GrLocationPin } from 'react-icons/gr'
import { LuDot } from 'react-icons/lu'
import { PiHandWavingFill } from 'react-icons/pi'

const MovieNight = () => {
    const details = [
        {
            date: "18 August 6:00PM",
            date2: "to 19 August 1:00PM UTC + 10",
            icon: <FaCalendarDays />
        },
        {
            date: "Street Name",
            date2: "301 Rowes Lane, WA, 7183",
            icon: <GrLocationPin />
        },
        {
            date: "Link",
            date2: "netflix.com",
            icon: <FaLink />
        }
    ]
    return (
        <div>
            <div className='bg-slate-100 rounded-xl'>
                <img src="/assets/popCorn.png" alt="" className='w-full rounded-t-xl' />
                <div className='lg:px-5 px-2 py-3 space-y-3 '>
                    <div>
                        <h2 className='font-bold text-zinc-700 text-3xl'>Movie Night</h2>
                        <div className='flex items-center space-x-1 text-zinc-500'>
                            <PiHandWavingFill className='text-yellow-500 text-xl' /> <p>Hosted by <span className='font-semibold'>Elysia</span></p></div>
                    </div>
                    <div className='flex justify-between items-center space-x-2 bg-white lg:p-3 p-2 rounded-xl'>
                        <div className='flex items-center space-x-1'>
                            <span className='flex space-x-1'><p className='font-semibold text-zinc-700'> 14 </p><p>respnses</p></span> <span className='flex items-center'><LuDot /><p className='text-[#8456EC]'>see guests</p></span>
                        </div>
                        <button type='button' className='flex items-center space-x-1 bg-[#8456EC] lg:px-4 px-2 py-2 rounded-lg text-white'>
                            <FaHandshake className='text-yellow-500 text-2xl' /><span className='font-semibold'>Invite</span>
                        </button>
                    </div>
                    <div className='space-y-4'>
                        {
                            details.map((detail)=>{
                                return(
                                    <div className='flex justify-between space-y-5 items-center'>
                                        <div className='flex space-x-2  items-center'>
                                            <div className='bg-white p-4 rounded-lg '>
                                                {detail.icon}
                                            </div>
                                            <div>
                                                <p className='font-bold text-zinc-700'>{detail.date}</p>
                                                <p className='text-sm text-zinc-700'>{detail.date2}</p>
                                            </div>

                                        </div>
                                        <div className='flex justify-end' >
                                            <FaGreaterThan />
                                        </div>
                                   </div>
                                )
                            })
                        }
                    </div>
                </div>
                
            </div>

            <button type='button' className='m-auto mt-10 block lg:hidden bg-gradient-to-r from-[#8456EC] to-[#E87BF8] px-12 py-3 rounded-lg'>
                <img src="/assets/createMyEvent.png" alt="textImage" className='m-auto' />
            </button>
        </div>
    )
}

export default MovieNight