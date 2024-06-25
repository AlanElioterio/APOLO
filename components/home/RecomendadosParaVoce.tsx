import Image from "next/image"
import Link from "next/link"
import { ReactNode } from "react"

async function getData() {
    const res = await fetch(process.env.URL_BASE + 'api/dashboard/recomendado', { cache: 'no-store' })
   console.log(process.env.URL_BASE + 'api/dashboard/recomendado')
    if (!res.ok) {
      throw new Error('Failed to fetch data')
    }
   
    return res.json()
  }

  interface RecomendadoProps{
    className?:string;
  }
  
export async function RecomendadosParaVoce({className}: RecomendadoProps){
    const recomendados:Album[] = await getData();
    
    return(
      <div className={className}>
        {recomendados.map((recomendado)=>(
          // href={`/home/album/${recomendado.id}`}
              <Link href={"/home"} key={recomendado.id} className="w-[200px] gap-3  flex flex-col" id={recomendado.id}>
                
                <div className="relative overflow-hidden w-[200px] h-[200px]">
                  <Image fill className="object-top object-cover top-0 left-0 bottom-0 right-0 size-[200px] z-[-1] absolute rounded-lg " alt={`Capa do album ${recomendado.titulo}`} src={recomendado.capa}/>

                  {/* <Image fill className='object-top object-cover top-0 left-0 bottom-0 right-0 z-[-1] absolute brightness-50  w-full h-full'  alt={`Capa do album ${albumDaSemana.titulo}`} src={albumDaSemana.capa}/> */}

                </div>

  
                <div className="w-full min-h-[50px] text-white">
                  <h3 className="text-[15px] font-bold">{recomendado.titulo}</h3>
                  <p className="text-[10px]">{recomendado.artista}</p>
                </div>
  
              </Link>
            ))}
      </div>
     
    )
  
  }