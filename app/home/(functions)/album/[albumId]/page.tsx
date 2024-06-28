import { MotionSection } from '@components/CustomAnimations';
import NotaComponent from '@components/home/Album/NotaComponent';
import { useCycle } from 'framer-motion';
import Image from 'next/image';

import { FaSpotify } from 'react-icons/fa6';
import { MdAdd, MdStar } from 'react-icons/md';

function trataNotas(nota: Number) {

}
async function AlbumPage({ params }: { params: { albumId: string } }) {
  const albumData: Album = await getAlbumDataById(params.albumId);

  const meses = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']
  // const month = (albumData?.dataDeLancamento?.getMonth().toString().length > 1 ? albumData?.dataDeLancamento?.getMonth() : '0' + albumData?.dataDeLancamento?.getMonth());
  // const year = albumData?.dataDeLancamento?.getFullYear();
  const data = albumData.dataDeLancamento.toString().split('T')[0].split('-');

  const month = meses[Number(data[1]) - 1]
  const year = data[0]



  return (
    <section className="overflow-x-hidden bg-transparent z-[1] text-white w-screen min-h-screen h-full">

      <section className=" w-full h-full sm:gap-5 gap-5 flex-col flex">
        <MotionSection className="px-5 flex sm:flex-row flex-col gap-10 w-full ">

          <div className='w-full flex flex-col gap-5 sm:flex-row items-center sm:items-start'>
            <Image alt={albumData.titulo} className='size-[300px]' width={2000} height={2000} src={albumData.capa} />

            <div className='flex flex-col h-full w-full justify-between gap-5 px-6'>
              <div className='sm:text-start w-full text-center sm:items-start items-center flex flex-col gap-7'>

                <div className='uppercase bg-primary text-center text-[13px] py-1 rounded-md w-[70px] hover:w-[80px] hover:bg-orange-800 transition-all duration-300'>Álbum</div>
                <div className='flex flex-col w-full gap-3'>
                  <h1 className='text-3xl leading-3 font-extrabold'>{albumData.titulo}</h1>
                  <h2 className='text-lg font-regular'>{albumData.artistasPrincipais.join(" • ")}</h2>
                </div>

              </div>


              <div className='sm:text-start sm:flex-row flex-col gap-5 justify-between flex w-full text-center'>

                <div className='flex flex-col justify-end'>
                  <span className='text-white text-center sm:text-start text-xl flex flex-row gap-2 items-end sm:justify-start justify-center'><p className='text-5xl font-bold text-primary'>{albumData.nota}</p>de 5</span>
                  
                  <NotaComponent />

                  <span className='text-xs font-light'>{month} de {year}</span>
                </div>

                <div className='flex lg:flex-row flex-col justify-center lg:justify-end gap-5 items-center md:items-end'>
                  <button className='flex-row flex bg-transparent border-2 border-primary text-white hover:bg-primary text-center text-[15px] gap-3 px-3 items-center py-1 rounded-md  transition-all duration-300'><MdAdd/> Adicionar à minha lista</button>
                  <button className='flex-row flex bg-transparent border-2 border-primary text-white hover:bg-primary text-center text-[15px] gap-3 px-3 items-center py-1 rounded-md  transition-all duration-300'><FaSpotify/> Ouvir no Spotify</button>
                
                </div>

              </div>

            </div>

            {/* {albumData.dataDeLancamento.getMonth().toString().length > 1 ? ("0" + albumData.dataDeLancamento.getMonth().toString()) : (albumData.dataDeLancamento.getMonth())}
              /{albumData.dataDeLancamento.getFullYear()} */}
          </div>



        </MotionSection>

        <MotionSection className="px-5 h-full flex sm:flex-row flex-col gap-10 w-full ">



          <div className="relative w-full overflow-x-auto shadow-md sm:rounded-lg border border-slate-500">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-[#3d3d3d] dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-6 py-3">

                  </th>
                  <th scope="col" className="px-6 py-3">
                    Duração
                  </th>
                  <th scope="col" className="px-6 py-3">

                  </th>
                  <th scope="col" className="px-6 py-3">
                    Nota
                  </th>
                  <th scope="col" className="px-6 py-3">
                    <span className="sr-only">Avaliar</span>
                  </th>
                </tr>
              </thead>
              <tbody>

                {albumData.faixas.map((faixa) => (
                  <tr key={1} className="bg-white border-b border-t-0 dark:bg-transparent dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      {faixa.titulo}
                    </th>
                    <td className="px-6 py-4">
                      {faixa.duracao}
                    </td>
                    <td className="px-6 py-4">

                    </td>
                    <td className="px-6 py-4">
                      {faixa.nota}
                    </td>
                    <td className="px-6 py-4 text-right">
                      <button  className="font-medium text-primary hover:underline"><MdAdd /></button>
                    </td>
                  </tr>
                ))}


              </tbody>
            </table>
          </div>

        </MotionSection>

      </section>


    </section>
  )
}

export default AlbumPage
async function getAlbumDataById(albumId: any) {

  console.log(process.env.URL_BASE + `api/spotify/album?albumId=${albumId}`)
  const response = await fetch(process.env.URL_BASE + `api/spotify/album?albumId=${albumId}`, { cache: 'no-store' })

  if (!response.ok) throw new Error('Erro ao ir para a função');

  return response.json()
}

