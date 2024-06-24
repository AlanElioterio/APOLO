import Image from "next/image"
import loginPageWall from '@public/assets/images/login-page.jpg'
import { FaSpotify } from "react-icons/fa6"
import apolloLogo from '@public/assets/images/apollo-white-logo.svg'
import { BotaoSecundario } from "@components/buttons/BotoesDeAcao";
import SignInForm from "@components/login/SignInForm";


const Login = () => {
  return (
  
        <div className=' max-w-[1300px] justify-center items-center flex flex-row w-screen h-screen  '>
            
            <div className='px-10 gap-5 w-full flex flex-col justify-between py-10 items-start h-full'>
                <a href="/"><Image className="" alt="Logotipo" width={80} src={apolloLogo}/></a>
                
                <SignInForm/>

                <p className="text-[10px]">@2024 - APOLLO</p>
            </div>
            <div className='md:flex hidden w-full h-full  bg-transparent'>
                <Image alt="Login Image" className="saturate-0 rounded-[10px] my-5 object-cover" src={loginPageWall}
                />
            </div>
        </div>

  )
}

export default Login