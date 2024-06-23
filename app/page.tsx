// import { MotionDiv } from "@components/AnimationTags"
import { COLORS } from "@styles/colors";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaAngleUp } from "react-icons/fa6";
import apolloLogo from '@public/assets/images/apollo-white-logo.svg'

import mockupApollo from "@public/assets/images/mockup-apollo-iphone.png";
import lineOrange from "@public/assets/images/line-orange.svg";
import { MotionDiv, MotionH1, MotionH2, MotionP } from "@components/Transition";
import { MotionBenefit } from "@components/CustomAnimations";
import BenefitsSection from "@components/BenefitsSection";

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

const FirstSection = () => {
  return (
    <div
      style={{
        backgroundImage: "url('/assets/images/line-orange.svg')",
        backgroundSize: 'cover',
        backgroundPositionX:"-300px"
      }}
      className={`overflow-hidden flex-wrap w-full h-full items-center flex flex-col`}
    >
      <div className="relative top-[90%] right-0 left-0 bottom-0 ">
        <FaAngleUp className="absolute top-0 right-0 left-0 bottom-0 cursor-pointer z-[2000] duration-500 transition-all hover:text-orange-500 text-4xl  my-3" />
      </div>
      <div className="relative flex flex-row overflow-hidden h-full w-full justify-center items-center">
        {/* <Image
          className="flex object-cover scale-125 overflow-hidden absolute z-[-200]"
          src={lineOrange}
          // width={1000}
        /> */}

        <div className="self-start lg:flex hidden flex-wrap ">
          <Image alt="Mockup Celular com a página inicial" className="max-w-[700px] flex " src={mockupApollo} />
        </div>

        <div className="max-w-[600px] h-full justify-center items-center gap-5 flex flex-wrap">
          <div className="lg:px-0 px-10 flex justify-center flex-wrap flex-col lg:gap-5 gap-3">
            <h1 className="font-bold lg:text-5xl text-4xl ">
              Descubra artistas, músicas e playlists de todos os gêneros.
            </h1>
            <p className="font-regular lg:text-[1rem] text-[0.8rem]">
              Avaliações musicais que fazem a diferença.
              <br />
              Descubra novas sonoridades, acompanhe seus artistas favoritos e
              crie a trilha sonora perfeita para cada momento da sua vida.
            </p>

            <div className="cursor-pointer w-[150px] font-bold text-[1rem] flex justify-center items-center transition-all duration-300 rounded-[20px] hover:bg-orange-800 bg-primary px-8 py-[0.5rem]">
              Começar
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
const SecondSection = () => {
  return (
    <div
      style={{
        backgroundImage: "url('/assets/images/toca-discos-wall.png')",
        backgroundSize: "cover",
        backgroundPositionY: "400px",
      }}
      className="flex flex-row justify-start items-center w-full h-[360px]"
    >
      <MotionDiv className="text-white font-bold px-20 md:text-4xl min-w-auto text-2xl md:w-[60%] md:min-w-[675px] uppercase">
        <h1>
          Avalie suas músicas, álbuns e artistas favoritos, onde quer que você
          esteja e a qualquer momento.
        </h1>
      </MotionDiv>
    </div>
  );
};
const ThirdSection = () => {
  return (
    <div className="bg-[#030303] py-[10rem] flex flex-row justify-center items-center w-full h-[700px]">
      <MotionDiv className="flex flex-col gap-5 text-center rounded-[30px] justify-center items-center border-2 border-[#363636] bg-gradient-to-br from-[#1E1E1E] to-[#030303] w-[1100px] h-[530px] text-white font-bold px-20   min-w-auto ">
        <MotionH1 className="text-6xl font-extrabold">
          Avaliações Musicais que Fazem a Diferença.
        </MotionH1>
        <MotionP className="text-[20px] font-light w-[90%]">
          Sabemos que cada música, letra e ritmo conta uma história única. Por
          isso, criamos uma plataforma onde você pode descobrir novas músicas,
          avaliar suas favoritas e se conectar com outros amantes da música.
        </MotionP>
      </MotionDiv>
    </div>
  );
};
const FeedBacks = () => {
  return (
    <div className="bg-[#030303]  flex flex-row justify-center items-center w-full h-[600px] pb-[100px]">
      <MotionDiv className="gap-5 flex flex-col">
        <MotionDiv className="text-center">
          <MotionH2 className="text-xl text-primary uppercase">Nossos</MotionH2>
          <MotionH1 className="text-3xl font-bold uppercase">
            FeedBacks
          </MotionH1>
        </MotionDiv>

        <MotionDiv className="flex flex-row gap-6">
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
      </MotionDiv>
    </div>
  );
};
const Benefits = () => {
  return (
    <div className="bg-[#0E0E0E] rounded-t-[50px] flex flex-row justify-center items-center w-full h-[650px]">
      <MotionDiv className="gap-5 flex flex-col">
        <MotionDiv className="text-center">
          <MotionH2 className="text-xl text-primary uppercase">Nossos</MotionH2>
          <MotionH1 className="text-3xl font-bold uppercase">
            Benefícios
          </MotionH1>
        </MotionDiv>

        <BenefitsSection />
      </MotionDiv>
    </div>
  );
};
const Community = () => {
  return (
    <div className="bg-[#0E0E0E]   flex flex-row justify-center items-center w-full pb-[100px]">
      <MotionDiv className="gap-5 px-[30px] flex flex-col">
        <MotionDiv
          style={{
          backgroundImage: "url('/assets/images/community-image.png')",
          backgroundSize: "cover",
          // backgroundPositionY: "400px",
          }}
          className="mx-[30px] rounded-[30px] text-center justify-center items-center flex flex-col gap-4 w-[1270px] h-[530px]">
          <MotionH2 className="text-xl text-primary font-bold uppercase">APOLLO</MotionH2>

          <div className="text-center flex flex-col w-[700px] justify-center items-center gap-3">
            <MotionH1 className="text-5xl font-bold  text-center">
              Junte-se à nossa comunidade agora mesmo!
            </MotionH1>
            <MotionP className="w-[500px]">
              Nossa missão é fazer com que mais pessoas se conectem por meio da
              música.
            </MotionP>
          </div>

          <div className="cursor-pointer w-[150px] font-bold text-[1rem] flex justify-center items-center transition-all duration-300 rounded-[20px] hover:bg-orange-800 bg-primary px-8 py-[0.5rem]">
            Explorar
          </div>
        </MotionDiv>
      </MotionDiv>
    </div>
  );
};


const Footer = () => {
  return (
  <div className="bg-primary flex flex-row justify-center items-center w-full h-[250px]">
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
                <MotionP className="w-full">
                  @ 2024 APOLLO - Todos os direitos reservados.
                </MotionP>

                <MotionP className="w-full text-end">
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
