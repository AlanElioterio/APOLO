import AlbumRecomendado from "@components/home/AlbumRecomendado";
import NovidadePrincipal from "@components/home/NovidadePrincipal";
import { RecomendadosParaVoce } from "@components/home/RecomendadosParaVoce";
import Image from "next/image"
import { MdNavigateNext } from "react-icons/md";
import userPhotoUnknown from '@public/assets/images/user_photo_unknown.jpg'
import Link from "next/link";
import apolloLogo from '@public/assets/images/apollo-white-logo.svg'
import { IoIosMenu } from "react-icons/io";


const Home = () => {
  return (
    <section className="overflow-x-hidden bg-[#141414] z-[1] text-white w-screen h-full">

      <div className=" justify-between items-center flex  flex-row w-full h-[80px] px-5 py-5">
        <div className="flex flex-row items-center gap-3 w-[200px]">
          <IoIosMenu className="w-[30px] h-[30px]"/>
          <Image
              alt="Logotipo"
              src={apolloLogo}
              width={75}
          />
        </div>

        {/* <div className="flex-grow flex flex-col max-w-[500px]">
          <input name="rounded-lg bg-slate-500 p-3 " type="text" placeholder="Pesquise algo aqui"/>
        </div> */}

        <div  className='h-[40px] flex gap-3'>
          <div className="flex-col sm:flex hidden">
          <h1 className="font-bold ">Alan Eliotério</h1>
          <h1 className="font-regular text-xs text-end">Sair</h1>
          </div>

          <Link href={'/profile/me'} className="size-[40px]">
            <Image className="rounded-full size-[40px]" width={200} height={200} alt="Foto de perfil" src={userPhotoUnknown}/>
          </Link>
        </div>

      </div>

      

      <section className=" w-full h-full sm:gap-10 gap-5 flex-col flex">
        <div className="px-5 flex sm:flex-row flex-col gap-10 w-full sm:h-[300px]">
            <div className="basis-2/3 h-full">
              <NovidadePrincipal/>
            </div>

            <div className="basis-1/3 h-full">
              <AlbumRecomendado/>
            </div>
        </div>

        <div className="w-full flex flex-col gap-5 h-[500px]">
          <div className="px-5 items-center text-white h-[40px] flex-row flex justify-between w-full">
            <h1>Recomendado para você</h1>
            <MdNavigateNext className="text-4xl"/>
          </div>

          <div className=".show-scrollbar w-full flex flex-row gap-3">
            <RecomendadosParaVoce className=".show-scrollbar gap-5 overflow-x-auto pl-5 pr-10 w-full flex flex-row flex-nowrap"/>
          </div>
        </div>

        {/* <div className="w-full h-[500px]">
          <div className="text-white h-[20px] flex-row flex justify-between w-full">
            <h1>Recomendado para você</h1>
            <MdNavigateNext className="text-lg"/>
          </div>

          <div className="w-full flex flex-row flex-nowrap gap-3">
            <RecomendadosParaVoce/>
          </div>
        </div>

        <div className="w-full h-[500px]">
          <div className="text-white h-[20px] flex-row flex justify-between w-full">
            <h1>Recomendado para você</h1>
            <MdNavigateNext className="text-lg"/>
          </div>

          <div className="w-full flex flex-row flex-nowrap gap-3">
            <RecomendadosParaVoce/>
          </div>
        </div> */}

      </section>

      
    </section>
  )
}

export default Home