import Transition from '@components/Transition'
import Link from 'next/link'
import Image from 'next/image'

import React from 'react'

async function getData() {
    const res = await fetch(process.env.URL_BASE +'api/dashboard/albumDaSemana')
    
    console.log(process.env.URL_BASE +'/api/dashboard/albumDaSemana')

    if (!res.ok) {
        console.error(res)
      throw new Error('Failed to fetch data')
    }
   
    return res.json()
  }

const AlbumRecomendado = async () => {
    const albumDaSemana:Album = await getData();
  return (
    <Transition className='w-full h-full'>
      
      <div className='w-full h-full'>
        <Link href={`/home/album/${albumDaSemana.id}`} className='border-2 border-primary sm:gap-0 gap-5 relative overflow-hidden w-full rounded-lg h-full flex flex-col items-start justify-between p-5'>

            {/* <Image className='absolute saturate-0 hover:saturate-100 brightness-50 hover:brightness-75 z-[-20] w-full h-full' fill alt={`Capa do album ${albumDaSemana.titulo}`} src={albumDaSemana.capa}/> */}
            

            <h3 className='w-[130px] min-w-[130px] text-center sm:text-[13px] text-[12px] sm:w-full font-semibold bg-slate-700  rounded-lg px-2 py-1  '>Álbum da semana</h3>

            <div className='sm:w-full w-[50%] h-full flex flex-col items-start justify-end gap-1'>
              <h1 className='sm:text-[40px] text-[30px] sm:leading-[2.5rem] leading-[2rem] text-primary font-bold'>{albumDaSemana.titulo}</h1>
              <h3 className='sm:text-[20px] text-[12px] text-white font-semibold'>{albumDaSemana.artista}</h3>
            </div>

            <Image width={700} height={700} className='object-middle object-cover top-0  bottom-0 right-0 z-[-1] absolute brightness-50  w-[180px] h-full'  alt={`Capa do album ${albumDaSemana.titulo}`} src={albumDaSemana.capa}/>
            
          </Link>

      </div>
        
    </Transition>
  )
}

export default AlbumRecomendado