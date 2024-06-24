'use client'

import { useFormStatus } from "react-dom"

export const LoginButton = () => {

    const { pending } = useFormStatus()
    const handleClick = (event:any) => {
        if (pending) {
            event.preventDefault()
            console.log('pend')
        }
    }
    return (
    <button
    className="hover:bg-orange-800 transition-all duration-300 text-[17px] h-[40px] rounded-lg bg-primary px-2 py-1"
    aria-disabled={pending} type="submit" onClick={handleClick}>
        Entrar
    </button>
    )
    
}



export const BotaoSecundario = ({acao, text}:any) => {
  return (
    <button
    className="hover:bg-orange-800 transition-all duration-300 text-[17px] h-[40px] rounded-lg bg-primary px-2 py-1"
     type="button" onClick={acao}>
        {text}
    </button>
  )
}


