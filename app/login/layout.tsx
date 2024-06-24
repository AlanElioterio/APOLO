import Transition from '@components/Transition'
import React, { ReactNode } from 'react'

export const metadata = {
    title : "Login",
    description: "Faça login no sistema"
}
interface Props {
    children?: ReactNode
    // any props that come into the component
}

const LoginLayout = ({children}:Props) => {
  return (

    <div className='bg-[#3d3d3d] w-full h-full justify-center flex'>
        <Transition>
            {children}
        </Transition>
    </div>
        

  )
}

export default LoginLayout