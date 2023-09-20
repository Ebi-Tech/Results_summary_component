"use client";

const LeftSide = () => {
  return (
    <div className='w-[50%] h-full flex flex-col items-center p-18 justify-center gap-5 rounded-2xl
        bg-gradient-to-b from-Light-slate-blue to-Light-royal-blue overflow-hidden mx-auto py-10
      mobile:w-full mobile:h-[45%]  mobile:rounded-none mobile:py-1 mobile:rounded-b-3xl mobile:my-0
      mobileBig:w-full mobileBig:h-[40%]  mobileBig:rounded-none mobileBig:py-2 mobileBig:rounded-b-3xl mobileBig:m-0'>
          <h2 className='text-Light-lavender text-[15px] font-semibold'>Your Result</h2>
          <button className='flex flex-col  rounded-full items-center justify-center 
           w-36 h-36 p-5 bg-gradient-to-b from-Persian-blue to-Violet-blue '>
            <p className='text-White text-[45px] font-black '>76</p>
            <p className='text-Light-lavender text-[10px] '>of 100</p>
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
