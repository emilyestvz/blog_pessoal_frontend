import { LinkedinLogo } from '@phosphor-icons/react/dist/ssr'
import { GithubLogo } from '@phosphor-icons/react/dist/ssr/GithubLogo'
import styles from './Footer.module.css'

const Footer = () => {
  return (
    <div className='flex justify-center text-white' style={{backgroundColor: '#0F0F0F'}}>
        <div className='container flex flex-col items-center py-4'>
            <p className='text-lg font-mono'>Todos os direitos reservados &copy; 2025 - Emily Cristiny Dias</p>
        

            <div className='flex gap-2'>
                <a className={styles.postButton} href='https://github.com/emilyestvz' target='_blank' rel='noopener'>
                    <GithubLogo size={32} />
                </a>
                <a className={styles.postButton} href='https://www.linkedin.com/in/emilycristinydias/' target='_blank' rel='noopener'>
                    <LinkedinLogo size={32} />
                </a>
            </div>
            
        </div>
    </div>
  )
}

export default Footer
