import AlbumRecomendado from "@components/home/AlbumRecomendado";
import NovidadePrincipal from "@components/home/NovidadePrincipal";
import { RecomendadosParaVoce } from "@components/home/RecomendadosParaVoce";
import Image from "next/image"
import { MdNavigateNext } from "react-icons/md";
import Link from "next/link";
import { IoIosMenu } from "react-icons/io";
import { Footer } from "@components/Footer";
import { MotionSection } from "@components/CustomAnimations";
import NavBarHome from "@components/home/NavBarHome";


const Home = () => {
  return (
    <section className="overflow-x-hidden bg-transparent z-[1] text-white w-screen min-h-screen h-full">


      <section className=" w-full h-full overflow-y-hidden sm:gap-5 gap-5 flex-col flex">
        <MotionSection className="px-5 overflow-y-hidden flex sm:flex-row flex-col gap-10 w-full sm:h-[300px]">
            <div className="basis-2/3 h-full">
              <NovidadePrincipal/>
            </div>

            <div className="basis-1/3 overflow-y-hidden h-full">
              <AlbumRecomendado/>
            </div>
        </MotionSection>

        <MotionSection className="w-full overflow-y-hidden flex flex-col py-1 gap-2 h-full">
          <div className="px-5 items-center text-white h-[40px] flex-row flex justify-between w-full">
            <h1>Recomendado para você</h1>
            <MdNavigateNext className="text-4xl"/>
          </div>

          <div className="showScrollBar w-full flex flex-row gap-3">
            <RecomendadosParaVoce className="showScrollBar gap-5 overflow-x-auto py-2 pl-5 pr-10 w-full flex flex-row flex-nowrap"/>
          </div>
        </MotionSection>

        <MotionSection className="w-full overflow-y-hidden flex flex-col py-1 gap-2 h-full">
          <div className="px-5 items-center text-white h-[40px] flex-row flex justify-between w-full">
            <h1>Recomendado para você</h1>
            <MdNavigateNext className="text-4xl"/>
          </div>

          <div className=".show-scrollbar w-full flex flex-row gap-3">
            <RecomendadosParaVoce className=".show-scrollbar gap-5 overflow-x-auto py-2 pl-5 pr-10 w-full flex flex-row flex-nowrap"/>
          </div>
        </MotionSection>

        <MotionSection className="w-full overflow-y-hidden flex flex-col py-1 gap-2 h-full">
          <div className="px-5 items-center text-white h-[40px] flex-row flex justify-between w-full">
            <h1>Recomendado para você</h1>
            <MdNavigateNext className="text-4xl"/>
          </div>

          <div className=".show-scrollbar w-full flex flex-row gap-3">
            <RecomendadosParaVoce className=".show-scrollbar gap-5 overflow-x-auto py-2 pl-5 pr-10 w-full flex flex-row flex-nowrap"/>
          </div>
        </MotionSection>
        
        

      </section>

      
    </section>
  )
}

export default Home