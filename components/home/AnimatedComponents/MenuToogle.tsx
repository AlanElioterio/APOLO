import * as React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import apolloLogo from '@public/assets/images/apollo-white-logo.svg'

const Path = (props:any) => (
  <motion.path
    fill="transparent"
    strokeWidth="3"
    stroke="white"
    strokeLinecap="round"
    {...props}
  />
);

interface ToggleProps{
  toggle: ()=>void;
}
export const MenuToggle = ( {toggle}:ToggleProps) => (
  <div className="absolute z-[4001] gap-5  flex flex-row">
    
    <button className="" onClick={toggle}>
    <svg width="23" height="23"  viewBox="0 0 23 23">
      <Path
        
        variants={{
          closed: { d: "M 2 2.5 L 20 2.5" },
          open: { d: "M 3 16.5 L 17 2.5" }
        }}
      />
      <Path
        

        d="M 2 9.423 L 20 9.423"
        variants={{
          closed: { opacity: 1 },
          open: { opacity: 0 }
        }}
        transition={{ duration: 0.1 }}
      />
      <Path

        

        variants={{
          closed: { d: "M 2 16.346 L 20 16.346" },
          open: { d: "M 3 2.5 L 17 16.346" }
        }}
      />
    </svg>
  </button>
  
  <Image
                        alt="Logotipo"
                        src={apolloLogo}
                        className=''
                        width={75}
                    />
  </div>

  
);