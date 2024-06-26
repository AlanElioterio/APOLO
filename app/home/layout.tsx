import { Footer } from "@components/Footer"
import Transition from "@components/Transition"
import NavBarHome from "@components/home/NavBarHome"
import SideBar from "@components/home/SideBar"
import { useCycle } from "framer-motion"
import React from "react"
import { ReactNode } from "react"

interface Props {
  children?: ReactNode
  // any props that come into the component
}

const HomeLayout = ({ children }: Props) => {


  return (
    <div className="bg-[#141414] flex flex-col w-full h-full items-center">

      <Transition className="h-full items-center w-full flex flex-col gap-5">
        <div className=" w-full items-center max-w-[1330px]">
          <NavBarHome />

          <div className="flex flex-row h-full w-full">
            {children}
          </div>
        </div>

        <Footer />

      </Transition>


    </div>
  )
}

export default HomeLayout