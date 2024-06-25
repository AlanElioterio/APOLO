import Transition from '@components/Transition'
import { BotaoWithWhere } from '@components/buttons/BotoesDeAcao'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

async function getData() {

  
    const res = await fetch(process.env.URL_BASE + 'api/dashboard/novidade')
   
    if (!res.ok) {
      throw new Error('Failed to fetch data')
    }
   
    return res.json()
  }


const NovidadePrincipal = async () => {

  const novidade:Novidade = await getData();

  return (
    <div className='w-full h-full flex flex-col'>

    <Transition className='w-full h-full'>
        <Link  href={`/home/news/${novidade.id}`} className='relative sm:gap-0 gap-20 overflow-hidden w-full rounded-lg h-full flex flex-col items-start justify-between p-5'>

            <h3 className='uppercase font-semibold bg-slate-700 text-[13px] rounded-lg px-2 py-1 min-w-[100px] text-center'>Novidade</h3>

            <div className='sm:w-[50%] w-full h-full flex flex-col items-start justify-end gap-3'>
              <h1 className='font-bold text-xl'>{novidade.titulo}</h1>
              <BotaoWithWhere  text="Visualizar" where={`home/news/${novidade.id}`}/>
            </div>

            <Image fill className='object-top object-cover top-0 left-0 bottom-0 right-0 z-[-1] absolute brightness-50 hover:brightness-75  w-full h-full'  alt={`Capa da notícia ${novidade.id}`} src={novidade.capa}/>

            
            

          </Link>
        
    </Transition>
    </div>

    

  )
}

export default NovidadePrincipal