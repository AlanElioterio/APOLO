'use client'
import './Notas.css'
import { useCycle } from 'framer-motion';
import React, { useState } from 'react'
import { MdStar } from 'react-icons/md'

function NotaComponent() {
    const [notas, setNotas] = useState(0);
    
    const [notasAteUm, SetNotasAteUm] = useCycle([0.5,1,0])
    const [notasAteDois, SetNotasAteDois] = useCycle([1.5,2,0])
    const [notasAteTres, SetNotasAteTres] = useCycle([2.5,3,0])
    const [notasAteQuatro, SetNotasAteQuatro] = useCycle([3.5,4,0])
    const [notasAteCinco, SetNotasAteCinco] = useCycle([4.5,5,0])

    const handleNota = (e:any) => {

    }

    const handleClick = (value:any) => {
        
        if (value === notas / 2) {
          // Se clicar na mesma estrela novamente, reseta para 0
          setNotas(value + (value - 0.5));
        } else {
          // Define a avaliação baseada no valor clicado
          setNotas(value * 2);
        }
      };

    return (
        <span  className='text-primary text-3xl sm:justify-start justify-center flex-row flex'>
            <button name='1' onClick={(e) => (handleNota(e))}><MdStar /></button>
            <button name='2' onClick={(e) => (handleNota(e))}><MdStar /></button>
            <button name='3' onClick={(e) => (handleNota(e))}><MdStar /></button>
            <button name='4' onClick={(e) => (handleNota(e))}><MdStar /></button>
            <button name='5' onClick={(e) => (handleNota(e))}><MdStar /></button>
        </span>
    )
}

export default NotaComponent