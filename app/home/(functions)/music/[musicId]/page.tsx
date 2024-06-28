import { MotionSection } from '@components/CustomAnimations'
import Image from 'next/image'
import React from 'react'

async function MusicComponent({ params }: { params: { musicId: string } }) {

  const musicData = await getMusicDataById(params.musicId);
  return (

    <section className="overflow-x-hidden bg-transparent z-[1] text-white w-screen min-h-screen h-full">

    {/* <section className=" w-full h-full overflow-y-hidden sm:gap-5 gap-5 flex-col flex">
      <MotionSection className="px-5 overflow-y-hidden flex sm:flex-row flex-col gap-10 w-full sm:h-[300px]">
          <Image alt={musicData} width={2000} height={2000} src={}/>
      </MotionSection>

      
      
      

    </section> */}

    
  </section>

    
  )
}

export default MusicComponent
function getMusicDataById(musicId: string) {
  throw new Error('Function not implemented.');
}

