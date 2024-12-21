import AboutImg from '../assets/hero.png';

export default function About () {
    const config = {
        line1: "Hi, I'm Esakkisubha M, a Computer Science and Engineering student at the Government College of Engineering, Tirunelveli. I possess strong skills in software development and backend technologies.",
        line2: "I am proficient in Java, C, and frontend technologies, including HTML, CSS3, JavaScript, React.js, and Tailwind CSS.",
        line3: "On the backend, I have experience with Node.js, Express.js, MongoDB, and Mongoose."
      };
      

    return <section className='flex flex-col md:flex-row bg-secondary px-10' id='about'>
        <div className='py-5 md:w-1/2'>
            <img src={AboutImg} />
        </div>
        <div className='md:w-1/2 flex justify-center'>
            <div className='flex flex-col justify-center text-white'>
                <h1 className='text-4xl border-b-4 border-primary mb-5 w-[170px] font-bold'>About Me</h1>
                <p className='pb-5'>{config.line1}</p>
                <p className='pb-5'>{config.line2}</p>
                <p className='pb-5'>{config.line3}</p>
            </div>
        </div>
    </section>
}