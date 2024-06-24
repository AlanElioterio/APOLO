
import Image from 'next/image'
import apolloLogo from '@public/assets/images/apollo-white-logo.svg'

const NavBar = () => {
  return (
    <div id='navbar' className='absolute right-0 left-0  transition-all duration-500 z-[4000] flex-row flex justify-between items-center w-screen p-4 px-10'>

        <Image
            
            alt="Logotipo"
            src={apolloLogo}
            width={75}
        />
        <a href='/login' className='cursor-pointer font-bold text-[1rem] flex justify-center items-center transition-all duration-300 rounded-[20px] hover:bg-primary bg-secondary px-8 py-[0.5rem]'>
            Login
        </a>
    
    </div>
  )
}

export default NavBar