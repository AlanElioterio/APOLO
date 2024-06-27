import Transition from '@components/Transition';
import Image from 'next/image';
import React from 'react'
// import userPhotoUnknown from '@public/assets/images/user_photo_unknown.jpg'

async function GetNewsFromAlbumId(albumId:number){

  const news:News = {
    titulo: "Kendrick Did Everything He Needed to on 'Euphoria'",
    subtitulo: "Kendrick em nova música chamada 'Euphoria' faz uma diss para o cantor de hip-hop Drake.",
    newsId: 2,
    texto: 'A rivalidade entre Kendrick Lamar e Drake no mundo do rap é lendária. Desde trocas de versos ácidos em músicas até alfinetadas sutis em entrevistas, os dois artistas alimentam uma competição que divide fãs e críticos. Kendrick, conhecido por seu flow complexo e letras introspectivas, contrasta com o estilo mais comercial de Drake, famoso por seus hits e versatilidade musical. A batalha pela coroa do rap contemporâneo continua a ser um dos pontos altos da cultura hip-hop.',
    capa: 'https://www.rollingstone.com/wp-content/uploads/2024/04/kendrick-v-drake-euphoria.jpg?w=1581&h=1054&crop=1',
    autor: 'Alessandra Ribeiro',
    data: new Date(),
    idMusicasRelacionadas: [1],
    idAlbunsRelacionados: [1]
  }

  return news;
}

async function NewsComponent({ params }: { params: { newsId: number } }) {

  const news = await GetNewsFromAlbumId(params.newsId);
  
  return (
    <Transition className='overflow-hidden w-full h-full'>

    <section className="overflow-x-hidden bg-transparent z-[1] text-white w-screen min-h-screen h-full">


      <section className=" w-full h-full overflow-y-hidden sm:gap-5 gap-5 flex-col flex">
        
        <div className='sm:p-10 p-4 gap-5  py-2  flex flex-col justify-center '>

          <div className='flex flex-col gap-4 text-center justify-center'>

            <div className='text-center flex gap-3 flex-col justify-center items-center'>
              <div className='flex flex-row gap-3 justify-center items-center'>
                <Image alt={news.autor} src={'https://imgs.search.brave.com/7cEqNS5bwXq2c2SWMdBxlTCwi8jUdebmWnX98UYagmk/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/bWF0dGhld2RldmFu/ZXkuY29tL3dwLWNv/bnRlbnQvdXBsb2Fk/cy8yMDIxLzA4L3Bv/d2VyYXBwcy11c2Vy/cGhvdG8tZmVhdHVy/ZWQtMS5qcGc'} width={300} height={300} className='size-[40px] rounded-full'/>
                <span className=''>{news.autor}</span>
              </div>

              <h1 className='text-center font-bold sm:text-4xl text-3xl'>{news.titulo}</h1>
              <h2 className="text-[14px] px-5">{news.subtitulo}</h2>
            </div>

            
            <div className='flex flex-col gap-1 justify-center items-center'>
              
              
              <span className='bg-primary rounded-lg px-2 py-1 text-xs'>{news.data.toLocaleDateString()}</span>
            </div>
            

            <Image alt={'Imagem da notícia: '+news.newsId} src={news.capa} width={2000} height={2000} className='object-top object-cover h-[400px] w-full'/>
            <p className='text-xs'>{'Fonte: Wikipédia'}</p>
          </div>

          <div>
            <div className='flex flex-col gap-2'>
            
            {news.texto}
            </div>
            
          </div>

        </div>

        
        

      </section>

      
    </section>
    </Transition>
  )
}

export default NewsComponent
