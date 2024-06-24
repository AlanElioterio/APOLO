'use client';

import mockupApollo from "@public/assets/images/mockup-apollo-iphone.png";

import { FaAngleUp } from "react-icons/fa6";
import Image from "next/image";
import { redirect } from "next/navigation";
import Link from "next/link";

const FirstSection = () => {
    return (
      <div

        style={{
          backgroundImage: "url('/assets/images/line-orange.svg')",
          backgroundSize: 'cover',
          backgroundPositionX:"-300px"
        }}
        className={`overflow-hidden flex-wrap w-full h-full items-center flex flex-col`}
      >
      
        <div className="relative flex flex-row overflow-hidden h-full w-full justify-center items-center">
          {/* <Image
            className="flex object-cover scale-125 overflow-hidden absolute z-[-200]"
            src={lineOrange}
            // width={1000}
          /> */}
  
          <div className="self-start lg:flex hidden flex-wrap ">
            <Image alt="Mockup Celular com a página inicial" className="max-w-[700px] flex " src={mockupApollo} />
          </div>
  
          <div className="max-w-[600px] h-full justify-center items-center gap-5 flex flex-wrap">
            <div className="lg:px-0 px-10 flex justify-center flex-wrap flex-col lg:gap-5 gap-3">
              <h1 className="font-bold lg:text-5xl text-4xl ">
                Descubra artistas, músicas e playlists de todos os gêneros.
              </h1>
              <p className="font-regular lg:text-[1rem] text-[0.8rem]">
                Avaliações musicais que fazem a diferença.
                <br />
                Descubra novas sonoridades, acompanhe seus artistas favoritos e
                crie a trilha sonora perfeita para cada momento da sua vida.
              </p>
  
              <Link href="/login" className="cursor-pointer w-[150px] font-bold text-[1rem] flex justify-center items-center transition-all duration-300 rounded-[20px] hover:bg-orange-800 bg-primary px-8 py-[0.5rem]">
                Começar
              </Link>

            </div>
          </div>
        </div>
      </div>
    );
  };

export default FirstSection