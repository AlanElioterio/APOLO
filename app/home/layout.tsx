import Transition from "@components/Transition"
import SideBar from "@components/home/SideBar"
import { ReactNode } from "react"

interface Props {
  children?: ReactNode
  // any props that come into the component
}
const HomeLayout = ({children}:Props) => {
  return (
    <div>
      <Transition>
          <div className="flex flex-row h-full w-full">
            
            {children}
          </div>
          
      </Transition>
    </div>
  )
}

export default HomeLayout