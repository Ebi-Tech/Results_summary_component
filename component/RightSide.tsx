"use client";
import React from 'react';
import Image from 'next/image'
import reaction from "@/public/assets/images/icon-reaction.svg"
import memory from "@/public/assets/images/icon-memory.svg"
import verbal from "@/public/assets/images/icon-verbal.svg"
import visual from "@/public/assets/images/icon-visual.svg"

const RightSide = () => {
  return (
    <div className='w-[50%] h-full p-4 flex flex-col py-10 justify-between
    mobile:h-[55%] mobile:w-full mobile:px-8 mobile:py-4
    mobileBig:h-[60%] mobileBig:w-full mobileBig:px-8 mobileBig:py-6'>
        <h2>Summary</h2>
        
        <div className='flex flex-col'>
            <button className='flex flex-row w-full p-1 rounded-lg font-semibold items-centre
             bg-Light-red bg-opacity-5'>
                <Image src={reaction} alt='react' width={20} priority className='mr-4'/>
                <p className='text-[16px] text-Light-red mr-auto'>Reaction</p>
                <p className='text-[14px] '>80  <span className='text-Light-lavender'> / 100</span></p>
            </button>
<br />
            <button className='flex flex-row w-full  p-1 rounded-lg font-semibold items-center
             bg-Orangey-yellow bg-opacity-5'>
                <Image src={memory} alt='react' width={20} priority className='mr-4'/>
                <p className='text-[16px] text-Orangey-yellow mr-auto'>Memory</p>
                <p className='text-[14px] '>92  <span className='text-Light-lavender'>  /  100</span></p>
            </button>
<br />
            <button className='flex flex-row w-full  p-1 rounded-lg font-semibold items-center
             bg-Green-teal bg-opacity-5'>
                <Image src={verbal} alt='react' width={20} priority className='mr-4'/>
                <p className='text-[16px] text-Green-teal mr-auto'>Verbal</p>
                <p className='text-[14px] '>61  <span className='text-Light-lavender'>  /  100</span></p>
            </button>
<br />
            <button className='flex flex-row w-full  p-1 rounded-lg font-semibold items-center
             bg-Cobalt-blue bg-opacity-5'>
                <Image src={visual} alt='react' width={20} priority className='mr-4'/>
                <p className='text-[16px] text-Cobalt-blue mr-auto'>Visual</p>
                <p className='text-[14px] '>72  <span className='text-Light-lavender'>  /  100</span></p>
            </button>
        </div>
        
        <button className='flex flex-row  rounded-full items-center justify-center 
        w-full h-1 p-5 bg-gradient-to-b from-Violet-blue to-Persian-blue'>
            <p className='text-White text-[14px] font-semibold '>Continue</p>
  </button>
    </div>

    
  )
}

export default RightSide
