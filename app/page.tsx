import LeftSide from '@/component/LeftSide'
import RightSide from '@/component/RightSide'

export default function Home() {
  return (
    <main className="flex bg-White w-screen h-screen items-center justify-center p-24">

      <div className='flex w-[45%] h-[85%] bg-White shadow-2xl rounded-xl overflow-hidden '>
        
        <LeftSide/>

        <RightSide/>

      </div>
    </main>
  )
}
