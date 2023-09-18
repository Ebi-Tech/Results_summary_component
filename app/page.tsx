import LeftSide from '@/component/LeftSide'
import RightSide from '@/component/RightSide'

import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex bg-White w-50 h-50 items-center justify-center p-24">

      <div className='flex w-[45%] h-[85%] bg-White shadow-2xl rounded-xl overflow-hidden '>
        
        <LeftSide/>

        <RightSide/>

      </div>
    </main>
  )
}
