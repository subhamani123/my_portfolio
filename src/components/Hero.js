
import { AiOutlineMail, AiOutlineGithub, AiOutlineLinkedin } from "react-icons/ai";

export default function Hero() {
    const config  = {
        subtitle: "I'm a Full-stack developer",
        social: {
            mail: 'mailto:sivarajmani2006@gmail.com',
            github: 'https://github.com/subhamani123',
            linkedin: 'https://www.linkedin.com/in/esakkisubha-m-76725a2a3/'
        }
    }


    return <section className='flex flex-col md:flex-row px-5 py-40 bg-primary justify-center'>
       <div className='md:w-1/2 flex flex-col'>
            <h1 className=' text-white text-6xl font-hero-font'>Hi, <br/> I'm <span className='text-black sparkle-text' >M</span> Esakkisubha
                <p className='text-2xl'>{config.subtitle}</p>
            </h1>
            <div className='flex py-10'>
                <a href={config.social.mail} className='pr-5 hover:text-white'><AiOutlineMail size={40} /></a>
                <a href={config.social.github} className='pr-5 hover:text-white'><AiOutlineGithub size={40}/></a>
                <a href={config.social.linkedin} className='hover:text-white'><AiOutlineLinkedin size={40}/></a>
            </div>
       </div>
       <p className='md:w-1/3'></p>
    </section>
}