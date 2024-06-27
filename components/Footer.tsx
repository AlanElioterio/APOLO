import Image from "next/image"
import { MotionDiv, MotionP } from "./Transition"
import apolloLogo from '@public/assets/images/apollo-white-logo.svg'


export const Footer = ({className}:{className?:string}) => {
    return (
    <div className=" text-white  bg-primary flex flex-row justify-center items-center w-full sm:h-[180px] h-[160px]">
        <MotionDiv className="px-10 gap-5 flex justify-start items-start flex-col w-full  max-w-[1330px]">
          <div
            className="text-center w-full justify-center items-center flex flex-col gap-4">
  
            <div className="text-start flex flex-col w-full justify-start items-start gap-5">
              <MotionDiv>
                <Image
                  alt='Logotipo'
                  src={apolloLogo}
                  width={201}
                  className="sm:w-[150px] w-[100px]"
                />
              </MotionDiv>
  
              <MotionDiv className="w-full">
                <hr className="h-[5px] bg-white border-2 w-full border-white"></hr>
  
                <div className="flex flex-row w-full justify-between py-3">
                  <MotionP className="md:text-[15px] text-[10px] w-full">
                    @ 2024 APOLLO - Todos os direitos reservados.
                  </MotionP>
  
                  <MotionP className="md:text-[15px] text-[10px] w-full text-end">
                    São Paulo - Brasil
                  </MotionP>
                </div>
                
  
              </MotionDiv>
              
            </div>
  
    
          </div>
        </MotionDiv>
      </div>
  )
    
  }
