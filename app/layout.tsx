
import '@styles/globals.css'

import type { Viewport } from 'next'


import Transition from '@components/Transition'
import { ReactNode } from 'react';


 
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
        <html>
            <body className='bg-[#141414] select-none overflow-x-hidden h-full'>
                <Transition>
                    {children}
                </Transition>
            </body>
        </html>
            
       
    
  )
}

export default RootLayout
