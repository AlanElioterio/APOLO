// import BotaoPrincipal from '@components/buttons/BotaoPrincipal'


import '@styles/globals.css'
import Head from 'next/head';
import { title } from 'process'
import { COLORS } from '@styles/colors'
import Image from 'next/image'
import type { Viewport } from 'next'


import Transition from '@components/Transition'
import { ReactNode } from 'react';
import { MotionNavBar } from '@components/CustomAnimations';
import NavBar from '@components/NavBar';

 
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
}

export const metadata = {
    title : "APOLLO",
    description: "Descubra novas músicas."
}
interface Props {
    children?: ReactNode
    // any props that come into the component
}
const RootLayout = ({children}:Props) => {
    return (
        
            <body className='bg-[#141414] select-none overflow-x-hidden h-full'>
                <Transition>
                    {children}
                </Transition>
            </body>
       
    
  )
}

export default RootLayout
