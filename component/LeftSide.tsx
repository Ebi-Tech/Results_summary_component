import React from 'react'

const LeftSide = () => {
  return (
    <div className='w-[50%] h=full flex flex-col items-center p-18 justify-center gap-5 rounded-2xl
        bg-gradient-to-b from-Light-slate-blue to-Light-royal-blue'>
          <h2 className='text-Light-lavender text-[15px] font-semibold'>Your Result</h2>
          <button className='flex flex-col  rounded-full items-center justify-center 
           w-36 h-36 p-5 bg-gradient-to-b from-Persian-blue to-Violet-blue '>
            <p className='text-White text-[45px] font-black '>76</p>
            <p className='text-Light-lavender text-[11px] '>of 100</p>
          </button>
          <div className=' flex flex-col items-center'>
          <p className='text-White text-[20px] font-bold'>Great</p>
          <p className='text-Light-lavender text-[15px] text-center mx-6'>You scored higher than 65% of the people
           who have taken these tests.</p>
          </div>
        </div>
  )
}

export default LeftSide