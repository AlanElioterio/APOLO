"use client";

import { motion, Variants } from "framer-motion";

export function MotionDivView({
  className,
  style,
children,
once,
type,

}: {
className?: string;
style?: any;
once?:boolean;
type:string;
children: React.ReactNode;
}){
  const cardVariants: Variants = {
    offscreen: {
      x: (type == "left" ? (-500):(500)),
      opacity: 0,
      transition: {
        type: 'spring',
        bounce: 0.4,
        duration: 1
      }
    },
    onscreen: {
      // y: 0,
      x:0,
      opacity: 1,

      transition: {
        type: 'spring',
        bounce: 0.4,
        duration: 1
      }
    }
  };

  return(
    <motion.div
    initial="offscreen"
    whileInView="onscreen"
  
    viewport={{  once: true }}
    
    style={style}
    // className="overflow-hidden"
    >

      <motion.div className={className} variants={cardVariants}>
        {children}

      </motion.div>
    </motion.div>
  )
}

export function MotionSection({
  className,
  style,
  children,
}: {
className?: string;
style?: any;
children: React.ReactNode;
}){
  const cardVariants: Variants = {
    offscreen: {
      y: 100,
      opacity: 0,
      transition: {
        type: 'spring',
        bounce: 0.4,
        duration: 1
      }
    },
    onscreen: {
      y: 0,
      opacity: 1,

      transition: {
        type: 'spring',
        bounce: 0.4,
        duration: 1
      }
    }
  };

  return(
    <motion.div
    initial="offscreen"
    whileInView="onscreen"
  
    viewport={{  once: true }}
    
    style={style}
    // className="overflow-hidden"
    >

      <motion.div className={className} variants={cardVariants}>
        {children}

      </motion.div>
    </motion.div>
  )
}



export function MotionNavBar({
  className,
  style,
children,
once,
type,

}: {
className?: string;
style?: any;
once?:boolean;
type:string;
children: React.ReactNode;
}){
  const cardVariants: Variants = {
    offscreen: {

      opacity: 0,
      transition: {
        type: 'spring',
        bounce: 0.4,
        duration: 1
      }
    },
    onscreen: {
      opacity: 1,

      transition: {
        type: 'spring',
        bounce: 0.4,
        duration: 1
      }
    }
  };


  return(
    <motion.div
    initial="offscreen"

    whileInView="onscreen"
    viewport={{  once: false }}
    
    style={style}
    // className="overflow-hidden"
    >

      <motion.div variants={cardVariants} className={className} >
        {children}

      </motion.div>
    </motion.div>
  )
}

export function MotionBenefit({
    className,
    style,
  children,
  
}: {
  className?: string;
  style?: any;
  children: React.ReactNode;
}) {
  return (
      <motion.div

      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ ease: "easeInOut", duration: 0.75 }}
          className={className}
          style={style}
    >
      {children}
    </motion.div>
  );
}
