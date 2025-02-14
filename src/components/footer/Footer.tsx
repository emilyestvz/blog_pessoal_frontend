
import { LinkedinLogo } from '@phosphor-icons/react/dist/ssr'
import { GithubLogo } from '@phosphor-icons/react/dist/ssr/GithubLogo'

const Footer = () => {
  return (
    <div className='flex justify-center bg-black text-white'>
        <div className='container flex flex-col items-center py-4'>
            <p className='text-lg font-mono'>Todos os direitos reservados &copy; 2025 - Emily Cristiny Dias</p>
        

            <div className='flex gap-2'>
                <a href='#' target='_blank'>
                    <GithubLogo size={32} />
                </a>
                <a href='#' target='_blank'>
                    <LinkedinLogo size={32} />
                </a>
            </div>
            
        </div>
    </div>
  )
}

export default Footer
