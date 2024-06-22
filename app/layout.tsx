// import BotaoPrincipal from '@components/buttons/BotaoPrincipal'
'use-client'

import '@styles/globals.css'
import { title } from 'process'
import { redirect } from 'next/navigation'
import { COLORS } from '@styles/colors'

export const metadata = {
    title : "APOLLO",
    description : "Descubra novas músicas."
}


const RootLayout = ({children}) => {
  return (
    <html lang='pt-br'>
        <body>
            <div className='fixed flex-row flex justify-between bg-red-200 w-screen p-6 px-10'>
                <img className='font-antonio font-bold text-[35px]'>APOLLO</h1>
                <div>
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
            
            <main className='app'>
                {children}
            </main>
        </body>
    </html>
  )
}

export default RootLayout