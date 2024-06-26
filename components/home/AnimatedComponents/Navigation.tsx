import * as React from "react";
import { motion } from "framer-motion";
import { MenuItem } from "./MenuItem";
import { useState } from 'react'
import { MdHome, MdLibraryMusic, MdSearch } from "react-icons/md";
import { CgProfile } from "react-icons/cg";

const variants = {
  open: {
    height:0,
    transition: { staggerChildren: 0.07, delayChildren: 0.2 }
  },
  closed: {
    height:0,

    transition: { staggerChildren: 0.05, staggerDirection: -1 }
  }
};

const variantsBack = {
    open: {
        
        height: '100vh',

      transition: { staggerChildren: 0.07, delayChildren: 0.2 }
    },
    closed: {


        height:0,
      transition: { staggerChildren: 0.05, staggerDirection: -1 }
    }
  };

  const variantsNav = {
    open: {
        width: getWindowDimensions().width > 768 ? 500 : "100vw",
        height: '100vh',

      transition: { staggerChildren: 0.07, delayChildren: 0.2 }
    },
    closed: {

        width:0,
        height:0,
      transition: { staggerChildren: 0.05, staggerDirection: -1 }
    }
  };



function getWindowDimensions() {


    let width = 0;
    let height = 0;


    if (typeof window !== "undefined") {
        const { innerWidth: widthWind, innerHeight: heightWind } = window;
        width = widthWind;
        height = heightWind;
    }

    return {
        width,
        height
    };
}

export default function Navigation() {
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());
    
  return (
    <motion.div 
        initial={{height:0}}
        variants={variantsBack}
        className={` fixed z-[3000] top-0 left-0  flex flex-col justify-center items-center w-screen bg-[#0c0c0cde] h-[${getWindowDimensions().height}px]`}
    >
        <motion.div variants={variantsBack} className="w-full max-w-[1330px]">
            <motion.div variants={variantsNav} className=" rounded-lg fixed z-[4002] h-full bg-primary">
                
                <div className="py-[90px] pb-[20px] px-[10px] h-full relative top-0 left-0 ">
                    <div className="flex flex-col w-full h-full">
                        <motion.div variants={variants}>
                            {navItems.map(i => (
                                <MenuItem key={i.id} icon={i.icon} href={i.href} text={i.text} />
                            ))}
                            
                            <MenuItem icon={<CgProfile/>} text={'Meu Perfil'} href="/home/profile/me" />

                        </motion.div>
            

                    </div>
                </div>

            </motion.div>
            

        


        </motion.div>

        
        
    </motion.div>
  )
}

interface NavItem{
    id: number;
    icon: React.JSX.Element;
    text: string;
    href: string;
}
const navItems:NavItem[] = [
    {id:1, icon:<MdHome/>, text:"Home", href:"/home"},
    {id:2, icon:<MdSearch/>, text:"Pesquisar", href:"/home/search"},
    {id:3, icon:<MdLibraryMusic/>, text:"Minha Biblioteca", href:"/home/library"},

]
// const itemIds = [0, 1, 2, 3, 4];