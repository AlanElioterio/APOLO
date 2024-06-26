import { motion, useCycle } from 'framer-motion'
import React, { useRef } from 'react'
import { useDimensions } from './use-dimensions';
import { MenuToggle } from './MenuToogle';
import  Navigation  from './Navigation';

export const AnimatedNav = () => {

  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);

  const sidebar = {
    open: (height = 1000) => ({
      clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
      transition: {
        type: "spring",
        stiffness: 20,
        restDelta: 2
      }
    }),
    closed: {
      clipPath: "circle(30px at 40px 40px)",
      transition: {
        delay: 0.5,
        type: "spring",
        stiffness: 400,
        damping: 40
      }
    }
  };
  
  return (
    <div>

        <motion.nav
            initial={false}
            animate={isOpen ? "open" : "closed"}
            custom={height}
            ref={containerRef}
            className='top-0 right-0 flex flex-col  w-full justify-center h-full'
            >
            
            <MenuToggle toggle={() => toggleOpen()} />

            <motion.div className="background" variants={sidebar} />

            <Navigation/>
        </motion.nav>
    </div>
    
  )
}
