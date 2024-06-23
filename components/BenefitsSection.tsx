"use client";

import { useMotionValue } from "framer-motion";
import { useMotionTemplate } from "framer-motion";
import { MotionBenefit } from "./CustomAnimations";
import { MotionDiv } from "./Transition";

let benefits_list = [
  {
    titulo: "GRATUITO",
    desc: "Nosso aplicativo é totalmente gratuito e acessível  para todos.",
  },
  {
    titulo: "SPOTIFY API",
    desc: "APOLLO é integrado ao sistema de requisições oficial da Spotify API.",
  },
  {
    titulo: "RÁPIDO E ÁGIL",
    desc: "O aplicativo foi desenvolvido para ser extremamente rápido e ágil.",
  },
];

const BenefitsSection = () => {
  let mouseX = useMotionValue(0);
  let mouseY = useMotionValue(0);
  let currentDiv = useMotionValue(null);

  function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
    let { left, top } = currentTarget?.getBoundingClientRect();

    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
    currentDiv.set(currentTarget?.current);
    
    console.log(currentDiv);
  }
  return (
    <div
      className="flex flex-row gap-6 justify-center"
    //   onMouseMove={handleMouseMove}
    >
      {benefits_list.map((benefit, index) => (
        <div id={`benefit-${index}`} key={index} onMouseMove={handleMouseMove}>
          <MotionBenefit

            // className={`gap-3 cursor-pointer transition-all duration-300 hover:scale-[101%] flex flex-col  justify-end w-[300px] bg-[#181818] h-[300px] rounded-[15px] px-6 py-5`}
            className="gap-3 flex flex-col justify-end w-[300px] h-[300px] rounded-[15px] px-6 py-5 
            pointer-events-none border-2 border-[#1E1E1E]  -inset-px opacity-0 transition duration-300 group-hover:opacity-100"
            style={{
              background: useMotionTemplate` 
                radial-gradient(
                650px circle at ${mouseX}px ${mouseY}px,
                rgba(190, 70, 19, 0.15),
                transparent 80%
                )
            `,
            }}
          >
            <h1 className="font-bold text-xl uppercase">{benefit.titulo}</h1>

            <div>
              <p className="text-[15px]">{benefit.desc}</p>
            </div>
          </MotionBenefit>
        </div>
      ))}
    </div>
  );
};



export default BenefitsSection;
