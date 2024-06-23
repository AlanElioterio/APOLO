// import BotaoPrincipal from '@components/buttons/BotaoPrincipal'


import '@styles/globals.css'
import Head from 'next/head';
import { title } from 'process'
import { COLORS } from '@styles/colors'
import Image from 'next/image'
import type { Viewport } from 'next'


import apolloLogo from '@public/assets/images/apollo-white-logo.svg'
import Transition from '@components/Transition'

 
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

const RootLayout = ({children}) => {
    return (
        <html>
           
                <body className='select-none overflow-x-hidden h-full'>
                    <div className='fixed z-[2000] flex-row flex justify-between items-center bg-transparent w-screen p-4 px-10'>

                        <Image
                            src={apolloLogo}
                            width={75}
                        />
                        <div className='cursor-pointer font-bold text-[1rem] flex justify-center items-center transition-all duration-300 rounded-[20px] hover:bg-primary bg-secondary px-8 py-[0.5rem]'>
                            Login
                        </div>
                    

                        {/* <button onClick={()=>redirect('login')} className={`bg-[#444444] hover:bg-[${COLORS.secondary}]`}>
                            Login
                        </button> */}
                        {/* <BotaoPrincipal
                            action={()=>redirect('/login')}
                            color={COLORS.secondary}
                            text={'Login'}
                        /> */}
                    </div>
                    
                    <Transition>
                        {children}
                    </Transition>
                </body>
            </html>
    
  )
}

export default RootLayout