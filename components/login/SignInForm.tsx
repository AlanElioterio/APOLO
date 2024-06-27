'use client'

import { BotaoSecundario, LoginButton } from "@components/buttons/BotoesDeAcao";
import { redirect, useRouter } from "next/navigation";
import { FaSpotify } from "react-icons/fa6";
import { authenticate } from '@/app/lib/actions'
import { useFormState } from "react-dom";
import { MdError } from "react-icons/md";


const SignInForm = () => {

  const router = useRouter()
    
  const handleSubmit = (event:Event) =>{
    event.preventDefault();

    router.push("/home");
  }

  const [errorMessage, dispatch] = useFormState(authenticate, undefined)

  return (
    <form action={dispatch} className="text-white w-full flex gap-6 flex-col">
                    
        <div className="flex flex-col">
            <label className="text-[24px] font-bold">Seja bem-vindo!</label>
            <label className="text-[12px]">Descubra novas músicas e artistas no aplicativo.</label>
        </div>

        <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-1">
                <label className="text-[17px]">Email</label>
                <input required className="text-[14px]  transition-all duration-300 outline-none focus:bg-transparent focus:text-white focus:border-white border-2 border-transparent  text-black w-full py-2 px-3 rounded-[5px]" placeholder="Insira o seu e-mail"/>
            </div>
            <div className="flex flex-col gap-1">
                <label className="text-[17px]">Senha</label>
                <input required className="text-[14px] transition-all duration-300 outline-none focus:bg-transparent focus:text-white focus:border-white border-2 border-transparent  text-black w-full py-2 px-3 rounded-[5px]" type="password" placeholder="Insira sua senha"/>
            </div>
        </div>
        

        <div className="flex flex-row justify-between gap-10">
            <div className="flex text-[12px] cursor-pointer items-center flex-row gap-2">
                <input className="cursor-pointer" id="mantem_conectado" name="mantem_conectado" type='checkbox'/>
                <label className="cursor-pointer font-regular" htmlFor="mantem_conectado">Manter conectado</label>
            </div>

            <button type="button" className="text-[12px] hover:font-bold font-regular ">Esqueci a senha</button>
        </div>

        <div className="flex-col flex gap-3">

            {/* <button type="submit" className="hover:bg-orange-800 transition-all duration-300 text-[17px] h-[40px] rounded-lg bg-primary px-2 py-1">Entrar</button> */}
            <BotaoSecundario acao={handleSubmit} text="Entrar"/>
            {/* <LoginButton/> */}
            <button onClick={()=>alert("spotify")} type="button" className="text-[17px] h-[40px] hover:bg-primary transition-all duration-300 rounded-lg bg-transparent border-2 flex flex-row gap-3 justify-center items-center border-primary px-2 py-1"><FaSpotify />Entrar com Spotify</button>
            {/* <div className="text-[14px] text-red-400 flex flex-row">{errorMessage && <p className="flex flex-row gap-2 items-center"><MdError className="text-[18px]"/>{errorMessage}</p>}</div>
         */}
        </div>
    </form>
  )
}

export default SignInForm
