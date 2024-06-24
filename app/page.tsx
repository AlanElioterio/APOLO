// import { MotionDiv } from "@components/AnimationTags"
import { COLORS } from "@styles/colors";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaAngleUp } from "react-icons/fa6";
import apolloLogo from '@public/assets/images/apollo-white-logo.svg'

import mockupApollo from "@public/assets/images/mockup-apollo-iphone.png";
import lineOrange from "@public/assets/images/line-orange.svg";
import { MotionDiv, MotionH1, MotionH2, MotionP } from "@components/Transition";
import { MotionBenefit, MotionDivView } from "@components/CustomAnimations";
import BenefitsSection from "@components/BenefitsSection";
import FirstSection from "@components/FirstSection";
import NavBar from "@components/NavBar";

let feedback_list = [
  {
    texto:
      "“Adorei a experiência de usar o aplicativo! A interface é intuitiva e as avaliações são muito detalhadas. Recomendo a todos os amantes de música!”",
    data: "15/06/2024",
    user: "João Silva",
  },
  {
    texto:
      "“Excelente plataforma para avaliar e descobrir músicas. As recomendações são sempre precisas e de acordo com meu gosto musical. Parabéns pelo ótimo trabalho!”",
    data: "15/06/2024",
    user: "Caroline Gusmão",
  },
  {
    texto:
      "“O aplicativo é fantástico! Consegui descobrir novos artistas e álbuns incríveis. A comunidade também é muito ativa e engajada.",
    data: "15/06/2024",
    user: "Beatriz Almeida",
  },
];

const Home = () => {
  return (
    <section className="bg-[#030303] select-none overflow-x-hidden w-screen h-screen">
      <NavBar/>
      <FirstSection />
      <SecondSection />
      <ThirdSection />
      <FeedBacks />
      <Benefits />
      <Community />
      <Footer/>
    </section>
  );
};


const SecondSection = () => {
  return (
    <div
      style={{
        backgroundImage: "url('/assets/images/toca-discos-wall.png')",
        backgroundSize: "cover",
        backgroundPosition: 'right',
        
      }}
      className="overflow-hidden flex flex-row justify-start items-center w-full h-[360px]"
    >
      <MotionDivView type="left" className="text-white font-bold  px-10 md:px-20 md:text-4xl min-w-auto text-2xl md:w-[60%] md:min-w-[675px] uppercase">
        <h1>
          Avalie suas músicas, álbuns e artistas favoritos, onde quer que você
          esteja e a qualquer momento.
        </h1>
      </MotionDivView>
    </div>
  );
};
const ThirdSection = () => {
  return (
    <div className="bg-[#030303]  lg:px-[10rem] md:px-[5rem] px-[2rem] py-[10rem] flex flex-row justify-center items-center w-full ">
      <MotionDivView type="right" className="max-w-[1000px]  overflow-hidden w-full h-full py-20 lg:px-20 px-10 flex flex-col text-center rounded-[30px] justify-center items-center border-2 border-[#363636] bg-gradient-to-br from-[#1E1E1E] to-[#030303]  text-white font-bold    min-w-auto ">
        <MotionH1 className="lg:text-6xl  text-4xl font-extrabold">
          Avaliações Musicais que Fazem a Diferença.
        </MotionH1>
        <MotionP className="lg:text-[20px] md:text-[17px] items-center flex justify-center py-5 font-light w-[90%]">
          Sabemos que cada música, letra e ritmo conta uma história única. Por
          isso, criamos uma plataforma onde você pode descobrir novas músicas,
          avaliar suas favoritas e se conectar com outros amantes da música.
        </MotionP>
      </MotionDivView>
    </div>
  );
};
const FeedBacks = () => {
  return (
    <div className="bg-[#030303]  inline-flex sm:flex flex-row justify-center items-center w-full  pb-[100px]">
      <MotionDivView type="left"  className="overflow-hidden flex-wrap h-full gap-5 flex flex-col">
        <MotionDiv className="text-center">
          <MotionH2 className="text-xl text-primary uppercase">Nossos</MotionH2>
          <MotionH1 className="text-3xl font-bold uppercase">
            FeedBacks
          </MotionH1>
        </MotionDiv>

        <MotionDiv className="flex flex-wrap justify-center  flex-row gap-6">
          {feedback_list.map((feedback, index) => (
            <div
              key={index}
              className={`cursor-pointer ${
                index % 2 !== 0 && "mt-4"
              } transition-all duration-300 hover:scale-[101%] flex flex-col  justify-between w-[300px] bg-[#181818] h-[300px] rounded-[15px] px-6 py-5`}
            >
              <p>{feedback.texto}</p>

              <div>
                <p>{feedback.data}</p>
                <p className="text-[20px] font-bold text-primary">
                  {feedback.user}
                </p>
              </div>
            </div>
          ))}
        </MotionDiv>
      </MotionDivView>
    </div>
  );
};
const Benefits = () => {
  return (
    <div className="bg-[#0E0E0E] rounded-t-[50px] flex py-20  flex-row justify-center items-center w-full">
      <MotionDivView type="right" className="overflow-hidden gap-5 flex flex-col">
        <MotionDiv className="text-center py-10">
          <MotionH2 className="text-xl text-primary uppercase">Nossos</MotionH2>
          <MotionH1 className="text-3xl font-bold uppercase">
            Benefícios
          </MotionH1>
        </MotionDiv>

        <BenefitsSection />
      </MotionDivView>
    </div>
  );
};
const Community = () => {
  return (
    <div className="bg-[#0E0E0E]   flex flex-row justify-center items-center w-full pb-[100px]">
      <MotionDivView type="left"  once={true} className="gap-5 px-[30px] flex flex-col">
        <MotionDiv
          style={{
          backgroundImage: "url('/assets/images/community-image.png')",
          backgroundSize: "cover",
          // backgroundPositionY: "400px",
          }}
          className="lg:px-[200px] px-5 rounded-[30px] text-center justify-center items-center flex flex-col gap-4  h-[530px]">
          <MotionH2 className="text-xl text-primary font-bold uppercase">APOLLO</MotionH2>

          <div className="text-center flex flex-col w-full justify-center items-center gap-3">
            <MotionH1 className="md:text-5xl text-4xl font-bold  text-center">
              Junte-se à nossa comunidade agora mesmo!
            </MotionH1>
            <MotionP className="w-full">
              Nossa missão é fazer com que mais pessoas se conectem por meio da
              música.
            </MotionP>
          </div>

          <div className="cursor-pointer w-[150px] font-bold text-[1rem] flex justify-center items-center transition-all duration-300 rounded-[20px] hover:bg-orange-800 bg-primary px-8 py-[0.5rem]">
            Explorar
          </div>
        </MotionDiv>
      </MotionDivView>
    </div>
  );
};


const Footer = () => {
  return (
  <div className="pb-[50px] bg-primary flex flex-row justify-center items-center w-full h-[250px]">
      <MotionDiv className="px-10 gap-5 flex justify-start items-start flex-col w-full  max-w-[1330px]">
        <div
          className="text-center w-full justify-center items-center flex flex-col gap-4">

          <div className="text-start flex flex-col w-full justify-start items-start gap-5">
            <MotionDiv>
              <Image
                alt='Logotipo'
                src={apolloLogo}
                width={201}
              />
            </MotionDiv>

            <MotionDiv className="w-full">
              <hr className="h-[5px] bg-white border-2 w-full border-white"></hr>

              <div className="flex flex-row w-full justify-between py-3">
                <MotionP className="md:text-[17px] text-[10px] w-full">
                  @ 2024 APOLLO - Todos os direitos reservados.
                </MotionP>

                <MotionP className="md:text-[17px] text-[10px] w-full text-end">
                  São Paulo - Brasil
                </MotionP>
              </div>
              

            </MotionDiv>
            
          </div>

  
        </div>
      </MotionDiv>
    </div>
)
  
}
export default Home;
