import * as React from "react";
import { motion } from "framer-motion";
import { MdHome } from "react-icons/md";

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 }
    }
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 }
    }
  }
};

const colors = ["#FF008C", "#D309E1", "#9C1AFF", "#7700FF", "#4400FF"];

export const MenuItem = ({icon, text, href}:{icon?:any, text?:any, href?:string}) => {
//   const style = { border: `2px solid ${colors[i]}` };
  return (
    <motion.a
      variants={variants}
    //   initial={{color:"white" }}
    color="white"
      whileHover={{ scale: 1.01, backgroundColor:"white", color:"black" }}
      whileTap={{ scale: 1.00, backgroundColor:"white", color:"black" }}
      className="w-full h-[50px] p-3 items-center justify-start gap-5 rounded-lg flex-row flex"
      href={href}
    >
      {icon}
      <div>{text}</div>
    </motion.a>
  );
};
