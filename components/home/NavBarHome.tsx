'use client'

import { Link } from 'next-view-transitions'
import Image from 'next/image'
import React from 'react'

import userPhotoUnknown from '@public/assets/images/user_photo_unknown.jpg'
import { useCycle } from 'framer-motion'

import { AnimatedNav } from './AnimatedComponents/AnimatedNav'

// (<IoIosClose onClick={() => (cycleOpen())} className='absolute z-[2000] size-[30px]'/>)
const NavBarHome = () => {
    const [open, cycleOpen] = useCycle(false, true);

    return (
        <div className=" justify-between items-center flex  flex-row w-full h-[80px] px-5 py-5">
            <div className="flex flex-row items-center w-[200px]">
                {/* {!open && (

                <div className='flex flex-row gap-3'>
                    <IoIosMenu className='cursor-pointer size-[30px]' onClick={() => (cycleOpen())} />

                    <Image
                        alt="Logotipo"
                        src={apolloLogo}
                        className=''
                        width={75}
                    />
                </div>

                )
                }
                <SideBar open={open} cycleOpen={cycleOpen} /> */}

                    
                <AnimatedNav/>


            </div>

            <div className='h-[40px] flex gap-3'>
                <div className="flex-col sm:flex hidden">
                    <h1 className="font-bold ">Alan Eliotério</h1>
                    <h1 className="font-regular text-xs text-end">Sair</h1>
                </div>

                <Link href={'/profile/me'} className="size-[40px]">
                    <Image className="rounded-full size-[40px]" width={200} height={200} alt="Foto de perfil" src={userPhotoUnknown} />
                </Link>
            </div>

        </div>
    )
}

export default NavBarHome