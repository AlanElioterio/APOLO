'use client'


import { motion } from "framer-motion";
import { IoIosClose } from "react-icons/io";
const links = [
  { name: "Home", to: "#", id: 1 },
  { name: "About", to: "#", id: 2 },
  { name: "Blog", to: "#", id: 3 },
  { name: "Contact", to: "#", id: 4 }
];
const itemVariants = {
  closed: {
    opacity: 0
  },
  open: { opacity: 1 }
};
const sideVariants = {
  closed: {
    transition: {
      staggerChildren: 0.2,
      staggerDirection: -1
    }
  },
  open: {
    transition: {
      staggerChildren: 0.2,
      staggerDirection: 1
    }
  }
};
export default function SideBar({open, cycleOpen, className}:{open:any, cycleOpen:any, className?:any}) {
  return (
    <aside className=''>

      <motion.div>
        {open && (
        
          <motion.div
            className="fixed top-0 right-0 left-0  bg-[#0c0c0cde]  w-screen z-[4000] h-full "
            
          >
            <motion.div
            initial={{ width: 0 }}
            animate={{
              width: 500,
              
            }}
            exit={{
              width: 0,
              transition: { delay: 0.7, duration: 0.3 }
            }}
            className="h-full fixed flex flex-col bg-[#141414]">
              <div>

              </div>
              <IoIosClose onClick={() => (cycleOpen())} className='cursor-pointer size-[30px]'/>

              <motion.div
                className="container"
                initial="closed"
                animate="open"
                exit="closed"
                variants={sideVariants}
              >
                {links.map(({ name, to, id }) => (
                  <motion.a
                    key={id}
                    href={to}
                    whileHover={{ scale: 1.1 }}
                    variants={itemVariants}
                  >
                    {name}
                  </motion.a>
                ))}
              </motion.div>

            </motion.div>
            
          </motion.div>
        )}
      </motion.div>
      {/* <div className="btn-container">
        <button onClick={()=>(cycleOpen())}>{open ? "Close" : "Open"}</button>
      </div> */}
    </aside>
  );
}